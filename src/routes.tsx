import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./screens";
import { Page, Navbar, Container } from "components";
import { Screens } from "enums";

const Preferences = lazy(() => import("./screens/preferences"));
const Board = lazy(() => import("./screens/board"));
const Players = lazy(() => import("./screens/players"));
const Editor = lazy(() => import("./screens/editor"));

type RoutesProps = {
  theme: Theme;
  initial: Screens;
  text: I18n.SharedScreen;
};

export default function Routes({ theme, initial, text }: RoutesProps) {
  return (
    <Container>
      <Router>
        <Navbar theme={theme} />
        <Page>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to={`/${initial}`} />
              </Route>
              <Route exact path={`/${Screens.HOME}`} component={Home} />
              <Route exact path={`/${Screens.PLAYERS}`} component={Players} />
              <Route path={`/${Screens.SETTINGS}`} component={Preferences} />
              <Route path={`/${Screens.BOARD}`} component={Board} />
              <Route path={`/${Screens.EDITOR}`} component={Editor} />
            </Switch>
          </Suspense>
        </Page>
      </Router>
    </Container>
  );
}
