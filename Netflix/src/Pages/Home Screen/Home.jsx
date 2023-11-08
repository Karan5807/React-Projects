import { useState, useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";
import axios from "axios";
import Loader from "../../assets/Core/Loader";
import ImageCard from "../../assets/Core/ImageCard";
import { Grid, Typography, Box } from "@mui/material";
import "./Home.css";


function Home() {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState();
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [IsLoading, setLoading] = useState(false);


    // Section for Popular Movies
    const imgUrl = import.meta.env.VITE_IMAGEURL;
    const upcomingURL = import.meta.env.VITE_UPCOMING_URL;
    const playingURL = import.meta.env.VITE_PLAYING_URL;
    const popularURL = import.meta.env.VITE_POPULAR_URL;
    const ratedURL = import.meta.env.VITE_RATED_URL;

    // Use Effect for Set Loading
    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setLoading(false); // Set loading to false when data is fetched
        }, 2000);
    }, []);

    // Use Effect for Upcoming Movies 
    useEffect(() => {
        const fetchUpcoming = async () => {
            try {
                const response = await axios.get(upcomingURL)
                setUpcomingMovies(response.data.results)
                setLoading(false)
            } catch (error) {
                console.error("Error in Fetching API");
                setLoading(false)
            }
        }
        fetchUpcoming()
    }, [])

    // Use Effect for Now playing Movies
    useEffect(() => {
        const fetchPlaying = async () => {
            try {
                const response = await axios.get(playingURL)
                setNowPlayingMovies(response.data.results)
                setLoading(false)
            } catch (error) {
                console.error("Error while Fetching an API");
                setLoading(false)
            }
        }
        fetchPlaying()
    }, [])

    // Use Effect for Popular URL Moview
    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const response = await axios.get(popularURL)
                setPopularMovies(response.data.results);
                setLoading(false)
            } catch (error) {
                console.error("Error while Fetching an API")
                setLoading(false)
            }
        }
        fetchPopular()
    }, [])

    // Use Effect for Top Rated movies
    useEffect(() => {
        const fetchTopRated = async () => {
            try {
                const response = await axios.get(ratedURL)
                setTopRatedMovies(response.data.results)
                setLoading(false)
            } catch (error) {
                console.error("Error WhileFetching an API")
                setLoading(false)
            }
        }
        fetchTopRated()
    }, [])

    return (
        <div>
            <Header />
            <Banner />
            <Box bgcolor={"black"}>
                {/* Section for The Now Playing Movies */}
                <div className="Header">
                    <Grid container>
                        <Grid p={1}>
                            <Typography variant="h4" color={"white"}> Now Playing </Typography>
                        </Grid>
                        {IsLoading ? (<Loader />) : (
                            <Grid item display={"flex"} className="ImageCard" justifyContent={"space-between"} p={1}>
                                {nowPlayingMovies?.map((item) => (
                                    <ImageCard key={item} ImageUrl={`${imgUrl}/${item.poster_path}`} />
                                ))}
                            </Grid>
                        )}
                    </Grid>
                </div>

                {/* Section for Top Rated */}
                <div className="Header">
                    <Grid container mt={2}>
                        <Grid p={1}>
                            <Typography variant="h4" color={"white"}> Top Rated Movies </Typography>
                        </Grid>
                        {IsLoading ? (<Loader />) : (
                            <Grid item display={"flex"} className="ImageCard" justifyContent={"space-between"} p={1}>
                                {topRatedMovies?.map((item) => (
                                    <ImageCard key={item} ImageUrl={`${imgUrl}/${item.poster_path}`} />
                                ))}
                            </Grid>
                        )}
                    </Grid>
                </div>

                {/* Section for Popular Movies */}
                <div className="Header">
                    <Grid container mt={2}>
                        <Grid p={1}>
                            <Typography variant="h4" color={"white"}> Popular Movies </Typography>
                        </Grid>
                        {IsLoading ? (<Loader />) : (
                            <Grid item display={"flex"} className="ImageCard" justifyContent={"space-between"} p={1}>
                                {popularMovies?.map((item) => (
                                    <ImageCard key={item} ImageUrl={`${imgUrl}/${item.poster_path}`} />
                                ))}
                            </Grid>
                        )}

                    </Grid>
                </div>

                {/* Section for Upcoming Movies */}
                <div className="Header">
                    <Grid container mt={2}>
                        <Grid p={1}>
                            <Typography variant="h4" color={"white"}>Up-Coming Movie</Typography>
                        </Grid>
                        {IsLoading ? (<Loader />) : (
                            <Grid item className="ImageCard" display={"flex"} justifyContent={"space-between"} p={1}>
                                {upcomingMovies?.map((item) => (
                                    <ImageCard key={item} ImageUrl={`${imgUrl}/${item.poster_path}`} />
                                ))}
                            </Grid>
                        )}
                    </Grid>
                </div>
            </Box>
        </div>
    )
}

export default Home;