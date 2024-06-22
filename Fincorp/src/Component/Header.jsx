import { Link } from 'react-router-dom';

function Header() {

    return (
        <div container display={"flex"} justifyContent={"space-between"} className='header' p={1}>
                {/* Company Title */}
                <div item>
                    <img src={""} alt='Logo' style={{ maxWidth: '35%', height: '90%' }}/>
                </div>

                {/* Navigation Option */}
                <div item p={1} display={"flex"} minWidth={600} fontStyle={"Montserrat"} justifyContent={"space-between"}>
                    <div item fontSize={22}>
                        <Link className='Link' to={"/"} >Home</Link>
                    </div>
                    <div item fontSize={22}>
                        <Link className='Link' to={"/Exchange"}>Exchange</Link>
                    </div>
                    <div item fontSize={22}>
                        <Link className='Link' to={"/ProvidentFund"}>Provident Fund</Link>
                    </div>
                    <div item fontSize={22}>
                        <Link className='Link' to={"/Deposit"}>Deposit</Link>
                    </div>
                    <div item fontSize={22}>
                        <Link className='Link' to={"/MutualFund"}>MutualFund</Link>
                    </div>
                    <div item fontSize={22}>
                        <Link className='Link' to={"/EMI"}>EMI</Link>
                    </div>
                </div>
        </div> 
    )
}

export default Header;