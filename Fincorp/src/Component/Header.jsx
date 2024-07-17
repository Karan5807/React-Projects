import { Link } from "react-router-dom";
import { GrLogin } from "react-icons/gr";

function Header() {
  return (
    <div className="container h-14 p-2 flex justify-around relative   font-serif  bg-rose-50">
      {/* Company Title */}
      <div className="container">
        <h6>Fincorp</h6>
      </div>

      {/* Navigation Option */}
      <div className="container flex justify-around">
        <div className="container">
          <Link className="Link" to={"/"}>
            Home
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/Exchange"}>
            Exchange
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/ProvidentFund"}>
            Provident
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/Deposit"}>
            Deposit
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/MutualFund"}>
            MutualFund
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/EMI"}>
            EMI
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/GST"}>
            GST
          </Link>
        </div>

        <div className="container">
          <Link className="Link" to={"/Login"}>
            <button>
            <GrLogin />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
