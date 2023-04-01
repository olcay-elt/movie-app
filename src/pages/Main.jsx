import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";

/** Components */
import MovieCard from "../components/MovieCard";

const Main = () => {
    const { movies } = useContext(MovieContext);
    const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=68815c4fd1873452233f78017cfd779d'

    useEffect(() => {
        getData(FEATURED_API)
    }, [])


    function getData(url) {
        fetch(url).then(res => res.json())
            .then(res => console.log('res: ', res))
    }

    console.log(movies);
    return (
        <>
            <form className="flex justify-center p-2">
                <input
                    type="search"
                    className="w-80 h-8 rounded-md p-1 m-2"
                    placeholder="Search a movie..."
                />
                <button className="btn-danger-bordered" type="submit">
                    Search
                </button>
            </form>
            <div className="flex justify-center flex-wrap">
                {
                    movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
                }
            </div>
        </>
    );
};

export default Main;
