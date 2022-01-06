
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import Navbar from './component/navbar';
import Add from './component/add';
import Details from './component/Details';
import Home from './component/Home';
import './App.css';
import {movies} from './component/List';
import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

function App() {

const [movieList, setMovieList]= useState(movies)
console.log(movieList)
//function to add a new movie to the list
  const handlerMovie = (movie) => {
      setMovieList([...movieList, movie]);
  }
  return (
    <div className="App">
    <Navbar/>
    <Add handlerMovie={handlerMovie} />
  
    <Filter/>
<Switch>
<Route exact path='/' render ={()=> <MovieList movieList={movieList}/> }/> 
<Route path='/Details/:id' render ={(props)=><Details {...props} Liste={movies} /> }/>


</Switch>
  
    </div>
  );
}

export default App;
