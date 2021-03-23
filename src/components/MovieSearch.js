import React, { useState } from 'react'
import MovieCard from "./MovieCard"

function MovieSearch() {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting")

    const apiKey = '9c3d73e4f07dbaa0510572dfefe3c275'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    }catch(err){
      console.log(err)
    }
  }

    return (
        <>  
        <h1 className='title'>Movie Search!</h1>
        <form className='form' onSubmit={searchMovies}>
            <label 
                htmlFor='query' 
                className="label"
                >Movie Name
            </label>
            <input
                type='text'
                className='input'
                name='query' 
                placeholder='type in a movie....'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button 
                className='button' 
                type='submit'
                >Submit
            </button>
        </form>
        <div className='card-list'>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        </>
    )
}

export default MovieSearch
