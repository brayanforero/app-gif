import Page from "@components/shared/placeholders/Page";
import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";

const Home = lazy(() => import("./../../../pages/Home"));
const Search = lazy(() => import("./../../../pages/Search"));
const Detail = lazy(() => import("./../../../pages/Detail"));

function AppRouter() {
  return (
    <>
      <Suspense fallback={<Page />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={Search} />
          <Route path="/g/:id" component={Detail} />
          <Route>
            <h1>Oops, are you lost?</h1>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default AppRouter;
