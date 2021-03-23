import React from 'react'

function MovieCard(props) {

    const {title, poster_path, release_date, vote_average, overview} = props.movie

    return (
        <div className='movie-card'>
            <h3 className='card-title'>{title}</h3>
            <img 
                className="card-img" 
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} 
                alt={title + ' poster'}
            />
            <p><small>Release: {release_date}</small></p>
            <p><strong>Rating: {vote_average + '/10'}</strong></p>
            <p>{overview}</p>
        </div>
    )
}

export default MovieCard
