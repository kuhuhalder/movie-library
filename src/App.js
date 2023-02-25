import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import CreateMovie from './components/CreateMovie';
import ShowMovieList from './components/ShowMovieList';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<ShowMovieList/>} />
          <Route exact path = "/add-movie" element = {<CreateMovie/>} />
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
