import { useNavigate } from "react-router-dom";
import Create from "../components/Create";
import DataParent from "../components/DataParent";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate()

  async function isLoggedIn(){
    let checkToken = localStorage.getItem("token")
    if(!checkToken){
      navigate("/dashboard")
    }
  }
  
  useEffect(() => {
    isLoggedIn()
  })
  
  return (
    <>
      <Create />
      <DataParent />
    </>
  );
};

export default Home;
