
import SecretCode from './SecretCode'
import'./App.css'
import './Titre.css'
import Reponse from './Reponse'
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SecretCode} />
        <Route exact path="/Reponse" component={Reponse} />
        <Redirect to="/" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

