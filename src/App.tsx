import { Route, Switch } from 'wouter'
import './App.css'
import { Container } from './layouts'
import { Home, Search } from './pages'

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={Search} />
        <Route>
          <h1>Oops, are you lost?</h1>
        </Route>
      </Switch>
    </Container>
  )
}

export default App
