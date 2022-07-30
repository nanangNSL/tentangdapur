import { BiHome, BiUser } from "react-icons/bi";
import { GoDiffAdded } from "react-icons/go";
import { FiMessageCircle } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="sticky-top bg-light shadow position-fixed top-100 start-50 translate-middle navbar-mobile">
      <div className="d-flex flex-row justify-content-center bg-light h-50 ">
        <button type="button" className="btn btn-lg m-1 button-bar">
          <BiHome className="icon" />
        </button>
        <button type="button" className="btn btn-lg m-1 button-bar">
          <GoDiffAdded className="icon" />
        </button>
        <button type="button" className="btn btn-lg m-1 button-bar">
          <FiMessageCircle className="icon" />
        </button>
        <button type="button" className="btn btn-lg m-1 button-bar">
          <BiUser className="icon" />
        </button>
      </div>
    </nav>
  );
}
