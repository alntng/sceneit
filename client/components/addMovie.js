import React, {useState} from "react"
import {useForm} from "react-hook-form"
import axios from "axios"
import {TMDBAPIKEY} from "../../secrets"
import {Button} from "semantic-ui-react"

export default function addMovie(props) {
  const [foundMovies, setFoundMovies] = useState([])

  const queryMovie = async data => {
    const movieQuery = data.Title.split(" ").join("%20")
    const movieURL = `https://api.themoviedb.org/3/search/movie?api_key=${TMDBAPIKEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`

    const res = await axios.get(movieURL)

    const movieSearch = res.data.results

    setFoundMovies(movieSearch)
  }

  const {register, handleSubmit} = useForm()

  return (
    <div>
      <h3>Add a movie</h3>
      <form onSubmit={handleSubmit(queryMovie)}>
        <label>Search</label>
        <input name="Title" ref={register} />
        <input type="submit" />
      </form>
      {foundMovies.map(movie => (
        <div
          key={movie.id}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300/${
              movie.backdrop_path
            })`
          }}
        >
          <div>
            <div className="searchMovies">
              <h5>{movie.original_title}</h5>
              <h5>{movie.release_date.slice(0, 4)}</h5>
            </div>
            <br />
            <Button
              type="submit"
              style={{textAlign: "right"}}
              onClick={() => {
                props.addToList(movie, props.listid)
              }}
            >
              Add Movie
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
