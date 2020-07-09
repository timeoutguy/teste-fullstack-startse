import React from 'react'
import { Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import NewCourse from "./pages/NewCourse";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/new" component={NewCourse} />
    </Switch>
  )
}
