import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {

    return (
        <Grid container>
            <Grid container bgcolor={"whitesmoke"} display={"flex"} justifyContent={"space-between"} className="Header">
                <Grid item p={1}>
                    <Typography color={"#002D62"} fontSize={32} fontFamily={"Style Script"} fontWeight={700}>X-Change</Typography>
                </Grid>
                <Grid item p={1} marginRight={2} minWidth={550} display={"flex"} justifyContent={"space-between"}>
                    <Grid item>
                        <Link className='Link' to={"/"}>Home</Link>
                    </Grid>
                    <Grid item>
                        <Link className='Link' to={"/ProvidentFund"}>Provident Fund</Link>
                    </Grid>
                    <Grid item>
                        <Link className='Link' to={"/Deposit"}>Deposit</Link>
                    </Grid>
                    <Grid item>
                        <Link className='Link' to={"/MutualFund"}>MutualFund</Link>
                    </Grid>
                    <Grid item>
                        <Link className='Link' to={"/EMI"}>EMI</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Header;