// import pages
import React from 'react';
import * as Sentry from '@sentry/browser';

import { render } from 'react-dom';

import './bootstrap-includes';
import '../sass/style.scss';

import App from './App';

Sentry.init({
  dsn: window.SENTRY_DSN,
  release: window.COMMIT_SHA,
});

render(<App />, document.getElementById('react-app'));
