import { useContext, useState } from "react"
import axios from "axios"
import {svgs} from "../assets/asserts"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [toggleEye, setToggleEye] = useState(true)
  const navigate = useNavigate()
  const {url_backend} = useContext(AppContext)
  const [isSignup, setIsSignup] = useState(false)

  async function handleCreateUser(e){
    setIsSignup(true);
    e.preventDefault()
    const formData = {
      name, email, password
    }

    await axios.post(`${url_backend}user/signup`, formData).then((res)=>{
      if(res.data.success){
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userId", res.data.createUser._id)
        navigate("/dashboard")
        setIsSignup(false);
      }else{
        alert(res.data.message)
      }
    })
  } 
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[75vh]">
        <form
        onSubmit={handleCreateUser}
          className={`border bg-black rounded-md px-8 py-8 my-24 w-96 top-[25px] z-10`}
        >
          <h1 className="font-bold text-center text-3xl mb-5">Create Account</h1>

          <div className="my-2">
            <label htmlFor="">Enter Name: </label>
            <br />
            <input
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent px-3 py-2 outline-none border w-full my-2"
              type="text"
              placeholder="e.g. John Deo"
              required
            />
          </div>
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
                onChange={(e) => setPassword(e.target.value)}
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
            disabled={isSignup}
              type="submit"
              className={`w-full bg-white text-black border rounded-sm py-2 my-2 transition-all ${isSignup ? "cursor-not-allowed" : "hover:bg-black hover:text-white hover:scale-[1.025]"}`}
            >
              {isSignup ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp
