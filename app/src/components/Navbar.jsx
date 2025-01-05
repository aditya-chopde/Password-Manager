import { useEffect, useState } from "react";
import { images, svgs } from "../assets/asserts";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  async function loggedOut(){
    localStorage.removeItem("token")
    navigate("/login")
  }

  async function isLoggedIn(){
    const getToken = localStorage.getItem("token")
    if(!getToken){
      navigate("/")
      return setIsLogin(false)
    }
    else return setIsLogin(true)
  }

  useEffect(() => {
    isLoggedIn()
  })
  
  return (
    <>
      <nav className="flex justify-between mx-8 items-center">
        <div onClick={loggedOut}>
          <img src={svgs.logout} alt="user-svg-icon" className={`w-8 invert ${isLogin ? "":"hidden"}`}/>
        </div>
        <div>
          <img src={images.logo} alt="passpod_logo" className="w-32" />
        </div>
        <div onClick={()=> navigate("/dashboard")}>
          <img src={svgs.user} alt="user-svg-icon" className={`w-8 invert ${isLogin ? "":"hidden"}`} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
