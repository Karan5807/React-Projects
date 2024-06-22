import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Silver from "../assets/Silver.png";
import "./Header.css";

function Header() {

    return (
        <Grid container display={"flex"} justifyContent={"space-between"} className='header' p={1}>
                {/* Company Title */}
                <Grid item>
                    <img src={Silver} alt='Logo' style={{ maxWidth: '35%', height: '90%' }}/>
                </Grid>

                {/* Navigation Option */}
                <Grid item p={1} display={"flex"} minWidth={600} fontStyle={"Montserrat"} justifyContent={"space-between"}>
                    <Grid item fontSize={22}>
                        <Link className='Link' to={"/"} >Home</Link>
                    </Grid>
                    <Grid item fontSize={22}>
                        <Link className='Link' to={"/Exchange"}>Exchange</Link>
                    </Grid>
                    <Grid item fontSize={22}>
                        <Link className='Link' to={"/ProvidentFund"}>Provident Fund</Link>
                    </Grid>
                    <Grid item fontSize={22}>
                        <Link className='Link' to={"/Deposit"}>Deposit</Link>
                    </Grid>
                    <Grid item fontSize={22}>
                        <Link className='Link' to={"/MutualFund"}>MutualFund</Link>
                    </Grid>
                    <Grid item fontSize={22}>
                        <Link className='Link' to={"/EMI"}>EMI</Link>
                    </Grid>
                </Grid>
        </Grid> 
    )
}

export default Header;