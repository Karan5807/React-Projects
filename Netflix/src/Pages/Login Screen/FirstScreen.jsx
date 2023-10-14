import { Button, Grid, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NetflixBG from "../../assets/SVG/NetflixBG.png";
import "./FirstScreen.css";

const FirstScreen = () => {
    return (
        <div>
            <Grid container>
                <Grid container className="Header">

                    <Grid container display={"flex"} justifyContent={"space-between"} mt={2}>
                        <Grid item><img className="NetflixBG" src={NetflixBG} /></Grid>
                        <Grid item display={"flex"} justifyContent={"space-between"}>
                            <Grid item p={1}>
                                <Button variant="outlined" color="warning">English</Button>
                            </Grid>
                            <Grid item p={1}>
                                <Button variant="contained" color="error">Get Started</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container className="Shadow" justifyContent={"center"}>
                        <Typography color={"white"} textAlign={"center"} justifyContent={"center"} variant="h1">The biggest Indian hits. The best Indian Stories. All Streaming Here.</Typography>
                        <Typography mt={6} variant="h3" justifyContent={"center"} color={"white"} textAlign={"center"}>Watch Anywhere. Cancel Anytime.</Typography>
                        <Typography mt={6} variant="h5" justifyContent={"center"} color={"white"} textAlign={"center"}>Ready to watch? Enter your email to create or restart your membership.</Typography>
                    </Grid>

                    <Grid container className="EmailInput"  mt={10} mb={10} display={"flex"}>
                        <Grid item p={1}>
                           <input type="email" className="Input" placeholder="Email Address"/>
                        </Grid>

                        <Grid item p={1}>
                            <Button variant="contained" color="error">Get Started <ArrowForwardIosIcon /></Button>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid className="Enjoy"></Grid>
                <Grid className="Download"></Grid>
                <Grid className="Watch"></Grid>
                <Grid className="Kids"></Grid>
                <Grid className="FAQ"></Grid>
                <Grid className="Footer"></Grid>
            </Grid>
        </div>
    )
}

export default FirstScreen;