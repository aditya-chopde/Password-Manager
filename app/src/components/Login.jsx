import { useState } from "react"
import axios from "axios"
import {svgs} from "../assets/asserts"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [toggleEye, setToggleEye] = useState(true)
  const navigate = useNavigate()

  async function handleCreateUser(e){
    e.preventDefault()
    const formData = {
      email, password
    }
    await axios.post("http://localhost:8080/user/login", formData).then((res)=>{
      if(res.data.success){
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userId", JSON.stringify(res.data.getUser._id))
        navigate("/dashboard")
      }else{
        alert(res.data.message)
        console.log(res.data)
      }
    })
  } 
  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        <form
        onSubmit={handleCreateUser}
          className={`border bg-black rounded-md px-8 py-8 my-24 w-96 absolute top-[25px] z-10`}
        >
          <h1 className="font-bold text-center text-3xl mb-5">Login into Account</h1>

          <div className="my-2">
            <label htmlFor="">Enter Email: </label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent px-3 py-2 outline-none border w-full my-2"
              type="text"
              placeholder="exmaple@xyz.com"
              required
            />
          </div>
          <div className="my-2">
            <label htmlFor="">Enter Password: </label>
            <br />
            <div className="flex relative">
              <input
                onChange={(e) => {setPassword(e.target.value)}}
                type={toggleEye ? "password" : "text"}
                className="bg-transparent px-3 py-2 outline-none border w-full my-2"
                placeholder="**********"
              />
              <img
                src={toggleEye ? svgs.eye_open : svgs.eye_close}
                alt="togglePasswordView"
                className="w-5 invert absolute left-[280px] top-[18px] cursor-pointer"
                onClick={() => setToggleEye(!toggleEye)}
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-white text-black border rounded-sm py-2 my-2 transition-all hover:bg-black hover:text-white hover:scale-[1.025]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
