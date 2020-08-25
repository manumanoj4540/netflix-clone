import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import requests from "../utils/requests";
import '../style/Banner.css'
import {useDispatch, useSelector} from  "react-redux";
import { getBanner } from '../actions';

function Banner() {
    const dispatch = useDispatch();
    const movie = useSelector(state => state.banner.bannerData)

    useEffect(() => {
        dispatch(getBanner());
    }, [])
    console.log(movie);
    
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "...": str;
    }

    return (
        <header className="banner"
        style = {{
            backgroundSize : "cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center"
        }}
        >
            <div className="banner_contents">                
                <h1 className="banner_title">
                    { movie?.title || movie?.name || movie?.original_name } 
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>  
                <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="banner_fade"></div>
        </header>
    )
}

export default Banner
