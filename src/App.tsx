import { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'
import './App.css'
import Page from './components/placeholders/Page'
import { Container } from './layouts'

const Home = lazy(() => import('./pages/Home'))
const Search = lazy(() => import('./pages/Search'))
function App() {
  return (
    <Container>
      <Suspense fallback={<Page />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={Search} />
          <Route>
            <h1>Oops, are you lost?</h1>
          </Route>
        </Switch>
      </Suspense>
    </Container>
  )
}

export default App
