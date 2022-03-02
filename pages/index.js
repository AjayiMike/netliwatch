import Jumbotron from "../components/Jumbotron";
import TrendingMovies from "../components/trendingMovies";
import { theMovieDB } from "../config";

export default function Home({movies}) {
  console.log(movies)
  return (
    <h1 className="">
      <Jumbotron />
      <TrendingMovies movies = {movies} />
    </h1>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${theMovieDB}/3/trending/all/day?api_key=${process.env.THE_MOVIEDB_API_KEY}`)
  const data = await res.json()

  return {
    props : {
      movies: data.results
    }
  }
}
