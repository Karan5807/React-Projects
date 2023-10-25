import AddIcon from '@mui/icons-material/Add';
import "./AccordianStyle.css";
import { Button, Grid, Typography } from '@mui/material';

const Accordion = ({ question, detail }) => {
    return (
        <Grid>
            <Grid>
                <Typography color={"snow"} variant='h2'>Frequently Asked Questions</Typography>
            </Grid>
            <Grid container marginLeft={15} bgcolor={"#272727"} width={880} className="wrapper" justifyItems={"center"}>
                <Grid container onClick={open} className='toggle' display={"flex"} justifyContent={"space-between"}>
                    <Typography variant='h6' color={"snow"}> What is React ?</Typography>
                    <Button> <AddIcon /> </Button>
                </Grid>
                <Grid className="content">
                    <Typography variant='body' color={"snow"}>
                        {detail}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Accordion;