import { useState } from "react";
import axios from 'axios'
import { svgs } from "../assets/asserts";

const Create = () => {
    const [website, setWebsite] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [toggleEye, setToggleEye] = useState(true)

    async function handleCreateData(e){
        e.preventDefault()
        const formData = {
            website,
            username,
            password
        }

        const request = await axios.post("http://localhost:8080/user/create", formData);
        console.log(request)
    }

  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <form className="border px-10 py-8 my-24 w-96" onSubmit={handleCreateData}>
        <div>
          <label htmlFor="">Enter Website URL: </label>
          <br />
          <input onChange={(e)=> setWebsite(e.target.value)} className="bg-transparent px-3 py-2 border w-full my-2" type="text" placeholder="http://www.example.com" required/>
        </div>
        <div>
            <label htmlFor="">Enter Username/Email: </label>
            <br />
            <input onChange={(e)=> setUsername(e.target.value)} type="text" className="bg-transparent px-3 py-2 border w-full my-2" placeholder="abc@xyz.com" required/>
        </div>
        <div>
            <label htmlFor="">Enter Password: </label>
            <br />
            <div className="flex relative">
            <input onChange={(e) => setPassword(e.target.value)} type={toggleEye?"password":"text"} className="bg-transparent px-3 py-2 border w-full my-2" placeholder="**********"/>
            <img src={toggleEye?svgs.eye_open:svgs.eye_close} alt="togglePasswordView" className="w-5 invert absolute left-[270px] top-[18px] cursor-pointer" onClick={()=>setToggleEye(!toggleEye)} required/>
            </div>
        </div>
        <div>
            <button type="submit" className="w-full bg-white text-black border rounded-sm py-2 my-2 transition-all hover:bg-black hover:text-white hover:scale-[1.025]">Add</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Create;
