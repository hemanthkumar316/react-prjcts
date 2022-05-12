import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import Requests from './Requests';



function App() {
  return (
    <div className="app">

      <Navbar />
      
      <Banner />
       
      <Row title="NETFLIX ORIGINALS" fetchUrl={Requests.fetchNetflixOriginals} 
      isLargeRow />

      <Row title="Trending now" fetchUrl={Requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />

      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />

      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />

      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />

     
    </div>
  );
}

export default App;