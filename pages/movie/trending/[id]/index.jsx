import Image from "next/image"
import Movie from "../../../../components/movie"
import { moviePosterEndpoint, theMovieDB } from "../../../../config"

const MovieDetails = ({movie}) => {
    console.log(movie)
    if(!movie.id) return (
        <div className="container mx-auto px-4 lg:px-32 mt-16">
            <p className="text-2xl font-extrabold">
                Sorry! No details to be displayed for this movie
            </p>
        </div>
    )
  return (
    <div className="container mx-auto px-4 lg:px-32 mt-16">
        <h2 className="text-xl font-bold">TITLE: {movie.title}<span className=" block font-light text-neutral-600 text-sm mb-4">{movie.tagline && movie.tagline}</span></h2>
        <Image
            src = {moviePosterEndpoint + movie.backdrop_path}
            width = {600}
            height=  {400}
            className = "rounded-md"
        />
        <div className="mt-4 text-neutral-700">
            <h4 className="font-bold">Overview:</h4>
            <p>{movie.overview}</p>

            <h5 className="font-bold">Original language:</h5>
            <p>{movie.original_language}</p>

            <h5 className="font-bold">Genres:</h5>
            <p>{movie.genres.map(genre => genre.name).join(", ")}</p>
             
            <h5 className="font-bold">Rated 18+</h5>
            <p>{movie.adult.toString()}</p>
        </div>
    </div>
  )
}

export const getStaticPaths = async() => {
    const res = await fetch(`${theMovieDB}/3/trending/all/day?api_key=${process.env.THE_MOVIEDB_API_KEY}`)
    const data = await res.json()

    const paths = data.results.map(movie => {
        return {params: {id: movie.id.toString()}}
    })
    return {paths, fallback: true}
}

export const getStaticProps = async(context) => {
    const {params} = context;
    const res = await fetch(`${theMovieDB}/3/movie/${params.id}?api_key=${process.env.THE_MOVIEDB_API_KEY}`)
    const data = await res.json()

    return {
        props: {movie: data}
    }
}
export default MovieDetails