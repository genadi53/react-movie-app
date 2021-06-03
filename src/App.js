import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from "@material-ui/core";

import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Trending from './pages/trending/trending';
import Movies from './pages/movies/movies';
import Series from './pages/series/series';
import Search from './pages/search/search';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact component={Trending}  />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>
      </Container>
    </div>
    <Navbar />
  </BrowserRouter>
  );
}

export default App;
