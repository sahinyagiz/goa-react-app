import React, { FunctionComponent, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from '../components/Loading';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const Guide = lazy(() => import('./Guide'));
const News = lazy(() => import('./News'));
const Store = lazy(() => import('./Store'));
const OAuth2Callback = lazy(() => import('../components/OAuth2/Callback'));

const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));
const TermsOfService = lazy(() => import('./TermsOfService'));
const PageNotFound = lazy(() => import('./PageNotFound'));

const Routes: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/auth/callback" exact component={OAuth2Callback} />
      <Route path="/register" exact component={Register} />
      <Route path="/guide" component={Guide} /> {/* Guide has subroutes so we do not use exact */}
      <Route path="/news" exact component={News} />
      <Route path="/store" exact component={Store} />
      <Route path="/privacy" exact component={PrivacyPolicy} />
      <Route path="/tos" exact component={TermsOfService} />
      <Route component={PageNotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
