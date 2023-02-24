import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import CreateMovie from './components/CreateMovie';
import ShowMovieList from './components/ShowMovieList';
import UpdateMovie from './components/UpdateMovie';
import ShowMovieDetails from './components/ShowMovieDetails';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<ShowMovieList/>} />
          <Route exact path = "/add" element = {<CreateMovie/>} />
          <Route exact path = "/edit/:id" element = {<UpdateMovie/>} />
          <Route exact path = "/show/:id" element = {<ShowMovieDetails/>} />

        </Routes>
      </div>
    </Router>    
  );
}

export default App;
