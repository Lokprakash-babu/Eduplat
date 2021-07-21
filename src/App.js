import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/landingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/dashboard" component={Dashboard} exact/>
        <Route path="/" component={LandingPage} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
