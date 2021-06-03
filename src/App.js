import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from "@material-ui/core";

import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
    <Container>
      <Switch>
        <Route path='/' exact component={Trending}  />
        <Route path='/movies' component={Movies} />
        <Route path='/series' component={Series} />
        <Route path='/search' component={Search} />
      </Switch>
    </Container>
    </div>    
    <Navbar />
    </BrowserRouter>
  );
}

export default App;
