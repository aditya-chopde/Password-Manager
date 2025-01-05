import { useState } from "react";
import axios from "axios";
import { svgs } from "../assets/asserts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleEye, setToggleEye] = useState(true);
  const navigate = useNavigate();

  async function handleCreateUser(e) {
    e.preventDefault(); 
    const formData = { email, password }; 
    try {
      const res = await axios.post("http://localhost:8080/user/login", formData);

      if (res.data.success) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userId", JSON.stringify(res.data.getUser._id));

        navigate("/dashboard");
      } else {
        alert(res.data.message);
        console.log(res.data);
      }
    } catch (err) {
      console.error("Error during login:", err);
      alert("Login failed. Please check your credentials and try again.");
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[75vh]">
        <form
          onSubmit={handleCreateUser} // Handle form submission
          className={`border bg-black rounded-md px-8 py-8 my-24 w-96 top-[25px] z-10`}
        >
          <h1 className="font-bold text-center text-3xl mb-5">Login into Account</h1>

          {/* Email Input */}
          <div className="my-2">
            <label htmlFor="email">Enter Email:</label>
            <br />
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              className="bg-transparent px-3 py-2 outline-none border w-full my-2"
              type="email" // Use type="email" for email validation
              placeholder="example@xyz.com"
              required
            />
          </div>

          {/* Password Input */}
          <div className="my-2">
            <label htmlFor="password">Enter Password:</label>
            <br />
            <div className="flex relative">
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                type={toggleEye ? "password" : "text"} // Toggle password visibility
                className="bg-transparent px-3 py-2 outline-none border w-full my-2"
                placeholder="**********"
                required
              />
              <img
                src={toggleEye ? svgs.eye_open : svgs.eye_close} // Toggle eye icon
                alt="togglePasswordView"
                className="w-5 invert absolute left-[280px] top-[18px] cursor-pointer"
                onClick={() => setToggleEye(!toggleEye)} // Toggle visibility state
              />
            </div>
          </div>

          {/* Submit Button */}
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
  );
};

export default Login;
