import Page from "@components/shared/placeholders/Page";
import NotFound from "@pages/404";
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
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default AppRouter;
