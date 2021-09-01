import './App.css';
import Desavanja from './Glavne stranice/desavanja';
import Kontakt from './Glavne stranice/kontakt';
import ONama from './Glavne stranice/Onama';
import Pocetna from './Glavne stranice/pocetna';
import Desavanje from './Sranice desavanja/Desavanje';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Glavna from './galerija-Jelena/Glavna';
import Forma from './login-Milica/Form';
import ProtectedRoute from './ProtectedRoute';
function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route path="/" exact component={Forma} />
      <Route path="/pocetna" exact component={Pocetna} />
      <Route path="/desavanja" exact component={Desavanja} />
      <Route path="/nalog" exact component={Kontakt} />
      <Route path="/onama" exact component={ONama} />
      <Route path="/desavanja/:id"exact component={Desavanje} />
      <Route path="/desavanja/:id/:idDesavanja"exact component={Glavna} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
