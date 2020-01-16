import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users/">Users com /</Link>
            </li>
            <li>
              <Link to="/users/1">Users 1</Link>
            </li>
            <li>
              <Link to="/users/1/">Users 1 com / </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/1" strict exact>
            <Users1 />
          </Route>
          <Route path="/users/1/" exact>
            <Users1ComBarra />
          </Route>
          <Route exact strict path="/users">
            <Users />
          </Route>
          <Route strict path="/users/">
            <UsersComBarra />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h3>Users</h3>
}

function UsersComBarra() {
  return <h1>Users Barra! </h1>
}

function Users1() {
  return <h3>Users 1 </h3>
}

function Users1ComBarra() {
  return <h1>Users 1 com Barra </h1>
}
