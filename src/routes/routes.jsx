import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Profile from '../components/Profile/profile';
import MyResume from '../components/My-Resume/my_Resume';
import ResumeMaker from '../components/Resume-Maker/resume_Maker';
import Contact from '../components/Contact/contact';
import NotFound from '../components/Not-Found/not_Found';

const Routes = () => (
  <Switch>
    <Route path="/" component={Profile} exact />
    <Route path="/myresume" component={MyResume} exact />
    <Route path="/resumemaker" component={ResumeMaker} exact />
    <Route path="/contact" component={Contact} exact />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
