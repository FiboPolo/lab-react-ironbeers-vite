import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
import { GlobalStyle } from "./Style/Global";


export function Home() {
  return (
    <section>
      <br></br>
      <ul className="custom-controls">

          <img 
            style={{
             maxHeight: '10vh',
             overflowX: 'none',
             overflowY: 'scroll',
           }}
          src={beers} alt="" width={"100%"}/>

      </ul>
      <br></br>

      <Link to={`/beers`}>
     <h1>All Beers</h1>      
  </Link>

      <p>
      Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen.
      </p>

      <section>
        <br></br>
        <ul className="custom-controls">

            <img src={newBeer} alt=""  width={"100%"}/>

        </ul>
        <br></br>
        <Link to={`/randombeers`}>
     <h1>Random Beers</h1>      
  </Link>
        <p>
        Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen.
        </p>
      </section>
      <section>

        <br></br>
        <ul className="custom-controls">

            <img src={randomBeer} alt=""  width={"100%"}/>

        </ul>
        <br></br>
        <Link to={`/newbeers`}>
     <h1>New Beers</h1>      
  </Link>


        <p>
        Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen.
        </p>
      </section>

      <GlobalStyle />
    </section>
  );
}