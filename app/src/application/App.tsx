import { Route, Switch } from 'react-router-dom';
import style from './App.module.css';
import { Navigation, NavigationItem, TopBar } from './components';
import { Dribble, Rijks, RijksObject } from './features';

function App() {
  return (
    <main className={style.main}>
      <div className={style.topbar}>
        <TopBar>
          <Navigation>
            <NavigationItem to="/rijks">Rijks</NavigationItem>
            <NavigationItem to="/dribble">Dribble</NavigationItem>
          </Navigation>
        </TopBar>
      </div>
      <div className={style.content}>
        <Switch>
          <Route path="/rijks/:objectNumber" component={RijksObject} />
          <Route path="/rijks" component={Rijks} />
          <Route path="/dribble" component={Dribble} />
        </Switch>
      </div>
      <footer className={style.footer}>
        <p>Collibra Frontend Challange</p>
        <p>Michał Grzergoczyk</p>
      </footer>
    </main>
  );
}

export { App };
