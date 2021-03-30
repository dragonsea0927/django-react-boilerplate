import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import DjangoImgSrc from '../../assets/images/django-logo-negative.png';
import { creators } from '../store/rest_check';

const Home = () => {
  const dispatch = useDispatch();
  const restCheck = useSelector((state) => state.restCheck);
  useEffect(() => {
    const action = creators.fetchRestCheck();
    dispatch(action);
  }, [dispatch]);

  const [showBugComponent, setShowBugComponent] = useState(false);

  return (
    <>
      <div id="django-background">
        If you are seeing the green Django logo on a white background and this text color is
        #092e20, frontend static files serving is working
      </div>
      <div id="django-logo-wrapper">
        <div>
          Below this text, you should see an img tag with the white Django logo on a green
          background
        </div>
        <img alt="Django Negative Logo" src={DjangoImgSrc} />
      </div>
      <div>{restCheck.result}</div>
      <Button variant="outline-dark" onClick={() => setShowBugComponent(true)}>
        Click to test if Sentry is capturing frontend errors! (Should only work in Production)
      </Button>
      {showBugComponent && showBugComponent.field.notexist}
    </>
  );
};

export default Home;
