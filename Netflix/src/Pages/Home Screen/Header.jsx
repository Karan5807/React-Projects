import NetflixLogo from "../../assets/SVG/NetflixLogo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <Grid container className="Header" display={"flex"} justifyContent={"space-between"} p={1}>
            <Grid item>
                <img className="NetflixLogo" src={NetflixLogo} alt="A Netflix Logo" />
            </Grid>
            <Grid item display={"flex"} justifyContent={"space-evenly"}>
                <Link className="Link" to="/Popular">Popular</Link>
                <Link className="Link" to="/Watching">Watching</Link>
                <Link className="Link" to="/TopRated">Top Rated</Link>
                <Link className="Link" to="/Fav">Favourite</Link>
            </Grid>
            <Grid item display={"flex"} justifyContent={"space-evenly"} className="Logo">
                <Grid item color={"white"}>
                    <SearchIcon className="Icon" />
                </Grid>
                <Grid item color={"white"} >
                    <AccountCircleIcon className="Icon" />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header;