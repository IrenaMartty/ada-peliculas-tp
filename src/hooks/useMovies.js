import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const language = "es";

export default function useMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [trailer, setTrailer] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetching popular movies data
  async function getPopularMovies(page = 1) {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&language=${language}`
      );
      setPopularMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  }

  // Fetching latest movies data
  async function getLatestMovies(page = 1) {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}&language=${language}`
      );
      setLatestMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  }

  // Fetching movies data for search
  async function findMovies(query) {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=${language}`
      );
      setAllMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  // Fetching movie details data
  async function getMovieDetails(id) {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${language}`
      );
      setMovieDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Fetching trailer data
  const getTrailer = async (id) => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
      );
      console.log("API response:", data);
      return data; 
    } catch (error) {
      console.log(error);
      return null; 
    }
  };

  // Paginacion

  function changePage(newPage) {
    setPage(newPage);
  }

  useEffect(() => {
    getPopularMovies(page);
    getLatestMovies(page);
  }, [page]);

  return {
    popularMovies,
    getPopularMovies,
    latestMovies,
    getLatestMovies,
    allMovies,
    findMovies,
    movieDetails,
    getMovieDetails,
    trailer,
    getTrailer,
    page,
    totalPages,
    changePage,
  };
}
