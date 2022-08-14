import { BiHome, BiUser } from "react-icons/bi";
import { GoDiffAdded } from "react-icons/go";
import { FiMessageCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";


export default function Navbar() {
  const router = useRouter();
  const { auth } = useSelector((state) => state);
  const handleHome = (e) => {
    e.preventDefault();
    router.push("/")
  };
  const handleButtonAdd = (e) => {
    e.preventDefault();
    if (!auth.token) {
      router.push("/login");
    } else {
      router.push("/add");
    }
  };

  const handleButtonChat = (e) => {
    e.preventDefault();
    if (!auth.token) {
      router.push("/login");
    } else {
      router.push("/chat");
    }
  };
  const handleButtonProfile = (e) => {
    e.preventDefault();
    if (!auth.token) {
      router.push("/login");
    } else {
      router.push("/profile");
    }
  };

  return (
    <nav className="sticky-top  bg-light position-fixed top-100 start-50 translate-middle  navbar-buttom  shadow-sm">
      <div className=" navbar-buttom  shadow-sm ">
        <button type="button" className="btn btn-lg m-1 button-bar "
        onClick={handleHome}>
          <BiHome className="icon" />
        </button>
        <button
          onClick={handleButtonAdd}
          type="button"
          className="btn btn-lg m-1 button-bar"
        >
          <GoDiffAdded className="icon" />
        </button>
        <button  onClick={handleButtonChat}
         type="button" className="btn btn-lg m-1 button-bar">
          <FiMessageCircle className="icon" />
        </button>
        <button
          onClick={handleButtonProfile}
          type="button"
          className="btn btn-lg m-1 button-bar"
        >
          <BiUser className="icon" />
        </button>
      </div>
    </nav>
  );
}
