import React, {useState, useEffect} from 'react';
import axios from './axios'
import './Row.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies,setMovies] = useState([])
    useEffect(() => {
        async function fetchData ()
        {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])
    return (
        <div className="row">
            <h2>{title}</h2> 
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    src = {`${baseUrl}${isLargeRow ? movie.poster_path : movie.poster_path}`} 
                    key={movie.id} 
                    alt={movie.title} 
                    className= {`row_poster ${isLargeRow && "row_posterLarge"}`}
                    /> 
                ))}
            </div>
        </div>
    )
}

export default Row
