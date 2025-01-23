import { useNavigate } from "react-router-dom";
import Create from "../components/Create";
import DataParent from "../components/DataParent";
import { ToastContainer} from 'react-toastify';
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate()

  async function isLoggedIn(){
    let checkToken = localStorage.getItem("token")
    if(!checkToken){
      navigate("/")
    }
  }
  
  useEffect(() => {
    isLoggedIn()
  })
  
  return (
    <>
    <ToastContainer position="bottom-right" theme="dark"/>
      <Create />
      <DataParent />
    </>
  );
};

export default Home;
