import Movie from './Movie';
import { Row , Col} from "antd"


function App() {

  const movieList = [
    {
      MovieName:"The Godfather",
      Year:"1972",
      Genre:"Drama",
      Director:"Francis Ford Capolla"
    },
    {
      MovieName:"Superbad",
      Year:"2007",
      Genre:"Comedy",
      Director:"Greg Mottola"
    },
    {
      MovieName:"The Departed",
      Year:"2006",
      Genre:"Drama",
      Director:"Martin Scorsese"
    },
    {
      MovieName:"Saving Private Ryan",
      Year:"1998",
      Genre:"Action",
      Director:"Steven Spielberg"
    },
    {
      MovieName:"The Expendables",
      Year:"2010",
      Genre:"Action",
      Director:"Sylvester Stallone"
    }
  ]

  return (
    <div>
      <Row gutter={20}>
        <Col className="gutter-row">
          {movieList.map(
            (movieObj)=>{return(<Movie MovieName={movieObj.MovieName} Year={movieObj.Year} Genre={movieObj.Genre} Director={movieObj.Director}/>)}
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;
