import React from 'react';
import Row from './Row'
import requests from "../utils/requests";
import Banner from './Banner'
import Nav from './Nav'
import '../style/App.css';


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row  title= "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row  title= "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row  title= "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row  title= "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row  title= "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row  title= "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row  title= "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row  title= "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
