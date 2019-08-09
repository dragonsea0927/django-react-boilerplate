import * as Sentry from '@sentry/browser';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FallbackUI = ({ eventId }) => (
  <>
    <h3>Check if there is an error on your Sentry app</h3>
    <button type="button" onClick={() => Sentry.showReportDialog({ eventId })}>Report feedback</button>
  </>
);

FallbackUI.propTypes = {
  eventId: PropTypes.string.isRequired,
};

class ExampleBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { eventId: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { eventId, hasError } = this.state;
    const { children } = this.props;

    // render fallback UI
    if (hasError) {
      return <FallbackUI eventId={eventId} />;
    }

    // when there's not an error, render children untouched
    return children;
  }
}

ExampleBoundary.propTypes = {
  children: PropTypes.node,
};

ExampleBoundary.defaultProps = {
  children: null,
};

export default ExampleBoundary;
