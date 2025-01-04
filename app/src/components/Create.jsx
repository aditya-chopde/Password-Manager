import { useState } from "react";
import axios from "axios";
import { svgs } from "../assets/asserts";

const Create = () => {
  const [website, setWebsite] = useState("");
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toggleEye, setToggleEye] = useState(true);
  const [toggleEnterData, setToggleEnterData] = useState(true);

  async function handleCreateData(e) {
    e.preventDefault();
    const formData = {
      website,
      url,
      username,
      password,
    };

    await axios
      .post("http://localhost:8080/user/create", formData)
      .then((res) => {
        setToggleEnterData(true);
        console.log(res);
      });
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        <div className="my-10 absolute top-[48rem] right-8">
          <button
            className="bg-white text-black rounded-[100%] p-3 cursor-pointer transition-all hover:bg-black hover:text-white border hover:scale-[1.025]"
            onClick={() => setToggleEnterData(!toggleEnterData)}
          >
            <img src={svgs.plus} alt="plus-icon" className="w-8"/>
          </button>
        </div>

        <form
          className={`border bg-black rounded-md px-8 py-8 my-24 w-96 absolute top-[25px] z-10 ${
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
              className="bg-transparent px-3 py-2 border w-full my-2"
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
              className="bg-transparent px-3 py-2 border w-full my-2"
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
              className="bg-transparent px-3 py-2 border w-full my-2"
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
                className="bg-transparent px-3 py-2 border w-full my-2"
                placeholder="**********"
              />
              <img
                src={toggleEye ? svgs.eye_open : svgs.eye_close}
                alt="togglePasswordView"
                className="w-5 invert absolute left-[270px] top-[18px] cursor-pointer"
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
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
