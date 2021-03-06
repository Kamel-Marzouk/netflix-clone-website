import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row
        title="Top Rated"
        fetchURL={requests.fetchTopRates}
      />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies "
        fetchURL={requests.fetchRomanceMovies}
      />
    </div>
  );
}

export default App;
