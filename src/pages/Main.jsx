import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MovieContext } from "../context/MovieContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

/** Components */
import MovieCard from "../components/MovieCard";





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
