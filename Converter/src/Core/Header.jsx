import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <Grid container display={"flex"} className='Header'>

            <Grid item>
                <Typography variant='h6' bgcolor={"#00308F"} color={"white"}>X-Change</Typography>
            </Grid>

            <Grid item display={"flex"} bgcolor={"#00308F"} width={800} justifyContent={"space-evenly"}>

                <Grid item bgcolor={"#00308F"}>
                    <Link className="Link" to="/EMI"><Typography variant="h6" bgcolor={"#00308F"} color={"snow"}>EMI Calculator</Typography></Link>
                </Grid>

                <Grid item bgcolor={"#00308F"}>
                    <Link className="Link" to="/MutualFund"><Typography variant="h6" bgcolor={"#00308F"} color={"snow"}>SIP</Typography></Link>
                </Grid>

                <Grid item bgcolor={"#00308F"}>
                    <Link className="Link" to="/ProvidentFund"><Typography variant="h6" bgcolor={"#00308F"} color={"snow"}>Employment Fund</Typography></Link>
                </Grid>

                <Grid item bgcolor={"#00308F"}>
                    <Link className="Link" to="/Deposit"><Typography variant="h6" bgcolor={"#00308F"} color={"snow"}>Deposit Fund</Typography></Link>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Header;