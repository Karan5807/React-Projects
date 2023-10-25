import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import tv from "../../assets/SVG/Tv.png";
import DownloadImage from "../../assets/SVG/Download.jpg";
import DeviceImage from "../../assets/SVG/Device.png";
import ChildrenImage from "../../assets/SVG/Children.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NetflixBG from "../../assets/SVG/NetflixBG.png";
import Accordion from "../../assets/Core/Accordion";
import "./FirstScreen.css";

const FirstScreen = () => {



    const navigate = useNavigate();
    const onStart = () => {
        navigate("/Home");
    }

    return (
        <div>
            <Grid container>
                {/* Sectionf for Screen Holder */}
                <Grid container className="First_Screen_Header">

                    <Grid container display={"flex"} justifyContent={"space-between"} mt={2}>
                        <Grid item><img className="NetflixBG" src={NetflixBG} /></Grid>
                        <Grid item display={"flex"} justifyContent={"space-between"}>
                            <Grid item p={1}>
                                <Button variant="contained" color="warning">English</Button>
                            </Grid>
                            <Grid item p={1}>
                                <Button variant="contained" color="error" onClick={onStart}>Get Started</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container className="Shadow" justifyContent={"center"}>
                        <Typography color={"white"} textAlign={"center"} justifyContent={"center"} variant="h1">The biggest Indian hits. The best Indian Stories. All Streaming Here.</Typography>
                        <Typography mt={6} variant="h3" justifyContent={"center"} color={"white"} textAlign={"center"}>Watch Anywhere. Cancel Anytime.</Typography>
                        <Typography mt={6} variant="h5" justifyContent={"center"} color={"white"} textAlign={"center"}>Ready to watch? Enter your email to create or restart your membership.</Typography>
                    </Grid>

                    <Grid container className="EmailInput" mt={10} mb={10} display={"flex"}>
                        <Grid item p={1}>
                            <input type="email" className="Input" placeholder="Email Address" />
                        </Grid>

                        <Grid item p={1}>
                            <Button variant="contained" color="error" onClick={onStart}>Get Started <ArrowForwardIosIcon /></Button>
                        </Grid>
                    </Grid>

                </Grid>
                {/* Section for Enjoy  */}
                <Grid container mt={1} className="Content" display={"flex"} justifyContent={"space-evenly"}>
                    {/* Section for Text */}
                    <Grid item className="Text">
                        <Typography pb={4} variant="h1" textAlign={"center"} color={"snow"}>Enjoy on your TV</Typography>
                        <Typography variant="h6" color={"snow"}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</Typography>
                    </Grid>
                    <Grid item className="Video">
                        <Grid item>
                            <img src={tv} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Section for Download */}
                <Grid container mt={1} className="Content" display={"flex"} justifyContent={"space-evenly"}>
                    <Grid item>
                        <Typography p={2} variant="h1" color={"snow"} textAlign={"center"}>Download your shows to watch offline</Typography>
                        <Typography variant="h6" color={"snow"} textAlign={"center"}>Save your favourites easily and always have something to watch.</Typography>
                    </Grid>

                    <Grid item>
                        <img src={DownloadImage} alt="DownloadImage" height={320} width={720} />
                    </Grid>
                </Grid>

                {/* Section for Watch Evreywhere  */}
                <Grid container mt={1} className="Content" display={"flex"} justifyContent={"center"}>
                    <Grid item>
                        <Typography p={2} variant="h1" color={"snow"} textAlign={"center"}>Watch everywhere</Typography>
                        <Typography variant="h6" color={"snow"} textAlign={"center"}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={DeviceImage} alt="DownloadImage" height={320} width={520} />
                    </Grid>
                </Grid>

                {/* Sectionf for Children */}
                <Grid container mt={1} className="Content" display={"flex"} justifyContent={"center"}>
                    <Grid item>
                        <Typography p={2} variant="h1" color={"snow"} textAlign={"center"}>Create profiles for kids</Typography>
                        <Typography variant="h6" color={"snow"} textAlign={"center"}>Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={ChildrenImage} alt="DownloadImage" height={320} width={520} />
                    </Grid>
                </Grid>

                {/* Section for FAQ */}
                <Grid container mt={1} className="Content" justifyContent={"center"}>
                    {/* Section for FAQ */}
                    <Grid container justifyContent={"center"} mb={3}>
                        <Typography color={"snow"} variant='h3' textAlign={"center"} fontWeight={800}>Frequently Asked Questions</Typography>
                    </Grid>

                    {/* SEction for Accordin */}
                    <Accordion/>

                    {/* Section for Input */}
                    <Grid container mt={4}>
                        <Grid container justifyContent={"center"}>
                            <Typography variant="body" fontSize={20} color={"snow"}>Ready to watch? Enter your email to create or restart your membership.</Typography>
                        </Grid>
                        <Grid container className="EmailInput" mt={1} mb={1} display={"flex"}>
                            <Grid item p={1}>
                                <input type="email" className="Input" placeholder="Email Address" />
                            </Grid>

                            <Grid item p={1}>
                                <Button variant="contained" color="error" onClick={onStart}>Get Started <ArrowForwardIosIcon /></Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>


                {/* Sectrion for Footer */}
                <Grid container mt={1} className="Content">
                    <Grid item>
                        <Typography variant="body" color={"snow"}>Questions? Call 000-800-919-1694</Typography>
                    </Grid>
                    {/* Section for Querires */}
                    <Grid container justifyContent={"space-between"} mt={4}>
                        <Grid item>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>FAQ</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Investor Reslations</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Privacy</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Speed Test</Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Help Center</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Jobs</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>cookie Prefernces</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Legal Notice</Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Account</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Way to Watchs</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Corporate Information</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Only on Netflix</Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Media Center</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Terms of Use</Typography>
                            </Grid>
                            <Grid item p={1}>
                                <Typography variant="body" color={"snow"}>Contact Us</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Section for Netflix India */}
                    <Typography variant="body" mt={8} color={"snow"}>Netflix India</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default FirstScreen;