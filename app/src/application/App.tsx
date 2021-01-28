import { Route, Switch } from 'react-router-dom';
import style from './App.module.css';
import { Navigation, NavigationItem, TopBar } from './components';
import { Dribble, Rijks, RijksObject } from './features';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

function Info() {
  return (
    <div>
      <div>Collibra Fonend Challange</div>
      <div>Michał Grzergoczyk</div>
    </div>
  );
}

function App() {
  library.add(fas);

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
        <Info />
      </footer>
    </main>
  );
}

export { App };
