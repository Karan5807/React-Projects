import "./Banner.css";
import { Grid, Typography, Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
const Banner = () => {
    return (
        <div className='Banner'>
            <Grid container p={5}>
                <Grid item>
                    <Typography variant="h1" color={"goldenrod"} p={4}> Animal </Typography>
                    <Grid item maxWidth={470}>
                        <Typography variant="body" color={"black"} textAlign={"justify"} p={4}>Expectations were high from Ranbir Kapoor Animal teaser. And they were met. On the actors birthday on Thursday, the makers dropped the Animal teaser, and it promises a fierce, exciting, gory action film. Sharing the teaser, filmmaker Sandeep Reddy Vanga wrote on X (formerly Twitter), “Check it out guys</Typography>
                    </Grid>
                </Grid>
                <Grid container p={4} display={"flex"} >
                    <Grid item p={2} >
                        <Button variant="outlined" color="error" size="medium">Play<PlayArrowIcon /></Button>
                    </Grid>
                    <Grid item p={2} >
                        <Button variant="outlined" color="error" size="medium">My List<AddIcon /></Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Banner;