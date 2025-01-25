import { useEffect, useState } from "react";
import { svgs } from "../assets/asserts";
import PropTypes from "prop-types";

const SingleData = ({ closeDisplayData, editData }) => {
  const [website, setWebsite] = useState("");
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toggleEye, setToggleEye] = useState(true);

  useEffect(() => {
    setWebsite(editData.website);
    setUsername(editData.username);
    setUrl(editData.url);
    setPassword(editData.password);
  }, [editData.website, editData.username, editData.url, editData.password]);

  return (
    <>
      <div>
        <img
          src={svgs.cross}
          alt="cross-icon-svg"
          className="w-5 invert absolute right-[15px] top-[15px] transition-all hover:scale-105 cursor-pointer"
          onClick={() => closeDisplayData()}
        />
        <h1 className="font-bold text-center text-3xl mb-5">Details</h1>

        <div className="my-2">
          <label htmlFor="url">Enter Platform: </label>
          <br />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-transparent px-3 py-2 border w-full my-2"
            type="text"
            placeholder="Google, Youtube"
            required
          />
        </div>

        <div className="my-2">
          <label htmlFor="website">Enter Website URL: </label>
          <br />
          <input
            value={website}
            className="bg-transparent px-3 py-2 border w-full my-2"
            type="text"
            placeholder="https://www.example.com"
            required
          />
        </div>

        <div className="my-2">
          <label htmlFor="username">Enter Username/Email: </label>
          <br />
          <input
            value={username}
            type="text"
            className="bg-transparent px-3 py-2 border w-full my-2"
            placeholder="abc@xyz.com"
            required
          />
        </div>

        <div className="my-2">
          <label htmlFor="password">Enter Password: </label>
          <br />
          <div className="flex relative">
            <input
              value={password}
              type={toggleEye ? "password" : "text"}
              className="bg-transparent px-3 py-2 border w-full my-2"
              placeholder="**********"
            />
            <img
              src={toggleEye ? svgs.eye_open : svgs.eye_close}
              alt="togglePasswordView"
              className="w-5 invert absolute lg:left-[270px] left-[225px] top-[18px] cursor-pointer"
              onClick={() => setToggleEye(!toggleEye)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

SingleData.propTypes = {
  closeDisplayData: PropTypes.func.isRequired,
  editData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    website: PropTypes.string,
    url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string,
  }).isRequired,
};

export default SingleData;
