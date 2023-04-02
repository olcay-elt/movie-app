import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MovieContext } from "../context/MovieContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

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


    export default Main;
