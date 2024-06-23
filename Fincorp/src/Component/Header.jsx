import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='container flex relative'>
                {/* Company Title */}
                <div className='container'>
                    <img src={""} alt='Logo' style={{ maxWidth: '35%', height: '90%' }}/>
                </div>

                {/* Navigation Option */}
                <div className='container flex relative'>
                    <div className='container'>
                        <Link className='Link' to={"/"}>Home</Link>
                    </div>
                    <div className='container'>
                        <Link className='Link' to={"/Exchange"}>Exchange</Link>
                    </div>
                    <div className='container'>
                        <Link className='Link' to={"/ProvidentFund"}>Provident</Link>
                    </div>
                    <div className='container'>
                        <Link className='Link' to={"/Deposit"}>Deposit</Link>
                    </div>
                    <div className='container'>
                        <Link className='Link' to={"/MutualFund"}>MutualFund</Link>
                    </div>
                    <div className='container'>
                        <Link className='Link' to={"/EMI"}>EMI</Link>
                    </div>
                </div>
        </div> 
    )
}

export default Header;