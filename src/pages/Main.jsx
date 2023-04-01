import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";

const Main = () => {
    const { movies } = useContext(MovieContext);
    const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f'

    useEffect(() => {
        getData(FEATURED_API)

    }, [])


    function getData(url) {
        fetch(url).then(res => res.json())
            .then(res => console.log(res))
    }

    console.log(movies);
    return <div>Main</div>;
};

export default Main;
