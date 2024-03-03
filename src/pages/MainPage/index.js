import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Row
        title = 'NetflixOriginals'
        id = "NO"
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title = 'TrendingNow' id = "TN" fetchUrl = {requests.fetchTrending} />
      <Row title = 'TopRated' id = "TR" fetchUrl = {requests.fetchTopRated} />
      <Row title = 'ActionMovies' id = "AM" fetchUrl = {requests.fetchActionMovies} />
      <Row title = 'ComedyMovies' id = "CM" fetchUrl = {requests.fetchComedyMovies} />
      <Row title = 'HorrorMovies' id = "HM" fetchUrl = {requests.fetchHorrorMovies} />
      <Row title = 'RomanceMovies' id = "RM" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title = 'Documentaries' id = "DT" fetchUrl = {requests.fetchDocumentaries} /> 
    </div>
  );
}
