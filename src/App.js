import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar'

// Routes
import Overview from './Pages/Overview';
import Products from './Pages/Products';
import { 
  Reports,
  ReportsOne,
  ReportsTwo,
  ReportsThree
} from './Pages/Reports';
import Team from './Pages/Team';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/products" component={Products} />
        <Route path="/reports" component={Reports} />
        <Route path="/reports/reports1" component={ReportsOne} />
        <Route path="/reports/reports2" component={ReportsTwo} />
        <Route path="/reports/reports3" component={ReportsThree} />
        <Route path="/team" exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
