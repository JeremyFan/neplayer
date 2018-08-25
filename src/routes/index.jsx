import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Recommend from '../containers/Recommend'
import UserList from '../containers/UserList'
import Album from '../containers/Album'
import Artist from '../containers/Artist'

const routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/recommend" component={Recommend} />
      <Route path="/playlist/:id" component={UserList} />
      <Route path="/album/:id" component={Album} />
      <Route path="/artist/:id" component={Artist} />
    </div>
  </Router>
)

export default routes