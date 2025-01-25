import { useContext, useState } from "react";
import axios from "axios";
import { svgs } from "../assets/asserts";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Create = () => {
  const [website, setWebsite] = useState("");
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toggleEye, setToggleEye] = useState(true);
  const [toggleEnterData, setToggleEnterData] = useState(true);
  const userId = localStorage.getItem("userId")
  const {url_backend} = useContext(AppContext)
  const [isCreated, setIsCreated] = useState(false)

  async function handleCreateData(e) {
    setIsCreated(true);
    e.preventDefault();
    const formData = {
      website,
      url,
      username,
      password,
      userId
    };

    await axios
      .post(`${url_backend}user/create`, formData)
      .then((res) => {
        toast.success("Data Created Successfully");
        setToggleEnterData(true);
        setIsCreated(false);
      });
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        <div className="fixed bottom-8 right-8 z-10 group lg:right-56">
          <button
            className="bg-white text-black rounded-[100%] p-3 cursor-pointer transition-all hover:bg-black hover:text-white border hover:scale-[1.025]"
            onClick={() => setToggleEnterData(!toggleEnterData)}
          >
            <img src={svgs.plus} alt="plus-icon" className="w-8 group-hover:invert"/>
          </button>
        </div>

        <form
          className={`border bg-black rounded-md px-8 py-8 my-24 w-80 lg:w-96 absolute right-[8%] sm:right-[20%] md:right-[35%] lg:right-[35%] top-0 z-10 ${
            toggleEnterData && "hidden"
          }`}
          onSubmit={handleCreateData}
        >
          <img
            src={svgs.cross}
            alt="cross-icon-svg"
            className="w-5 invert absolute right-[15px] top-[15px] transition-all hover:scale-105 cursor-pointer"
            onClick={() => setToggleEnterData(!toggleEnterData)}
          />
          <h1 className="font-bold text-center text-3xl mb-5">Enter Data</h1>

          <div className="my-2">
            <label htmlFor="">Enter Platform: </label>
            <br />
            <input
              onChange={(e) => setUrl(e.target.value)}
              className="bg-transparent px-3 py-2 outline-none border w-full my-2"
              type="text"
              placeholder="Google, Youtube"
              required
            />
          </div>
          <div className="my-2">
            <label htmlFor="">Enter Website URL: </label>
            <br />
            <input
              onChange={(e) => setWebsite(e.target.value)}
              className="bg-transparent px-3 py-2 outline-none border w-full my-2"
              type="text"
              placeholder="https://ww.example.com"
              required
            />
          </div>
          <div className="my-2">
            <label htmlFor="">Enter Username/Email: </label>
            <br />
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="bg-transparent px-3 py-2 outline-none border w-full my-2"
              placeholder="abc@xyz.com"
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
                className="w-5 invert absolute lg:left-[270px] left-[225px] top-[18px] cursor-pointer"
                onClick={() => setToggleEye(!toggleEye)}
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isCreated}
              className={`w-full bg-white text-black border rounded-sm py-2 my-2 transition-all ${isCreated ? "cursor-not-allowed" : "hover:bg-black hover:text-white hover:scale-[1.025]"}`}
            >
              {isCreated ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
