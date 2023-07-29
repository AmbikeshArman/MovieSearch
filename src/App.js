import React from "react";
import { useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./movieCard";

//a1f1ac6
const apiURL = 'https://www.omdbapi.com?apikey=a1f1ac6';

const App =  () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const searchMovies = async(title) => {
        if(title.length===0){
            return;
        }
        const response = await fetch(`${apiURL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    return (
        <div className="app">
            <h1>MoviesSearch</h1>
            <div className="search">
                <input 
                    placeholder="Search for Movies" 
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(search)} 
                />
            </div>
            {
                movies.length>0 ? 
                (
                    <div className="container">
                        {
                            movies.map((movie) => 
                            <MovieCard Movie1={movie}/>)
                        }
                    </div>
                ):
                (
                    <div className="empty">
                        <h2>No Movie Found!</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;