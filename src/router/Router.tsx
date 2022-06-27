import React from 'react';
import {
  Switch,
  Route, BrowserRouter,
} from 'react-router-dom';
import Initial from '@features/initial/Initial';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Initial />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
