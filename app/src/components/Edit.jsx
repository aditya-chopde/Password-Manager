import { useContext, useEffect, useState } from "react";
import { svgs } from "../assets/asserts";
import PropTypes from "prop-types";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Edit = ({ closeEdit, id, editData, getData}) => {
  const [website, setWebsite] = useState("");
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toggleEye, setToggleEye] = useState(true);
  const {url_backend} = useContext(AppContext)
  const [isEditing, setIsEditing] = useState(false);

  async function handleEditData(e) {
    setIsEditing(true);
    e.preventDefault(); 
    const formData = { url, website, username, password };
      await axios.post(`${url_backend}user/edit/${id}`, formData).then(()=>{
        closeEdit(); 
        getData();
        setIsEditing(false);
      });
  }

  useEffect(() => {
    setWebsite(editData.website)
    setUsername(editData.username)
    setUrl(editData.url)
    setPassword(editData.password)
  }, [editData.website, editData.username, editData.url, editData.password])

  return (
    <>
      <div>
        <form onSubmit={handleEditData}>
          <img
            src={svgs.cross}
            alt="cross-icon-svg"
            className="w-5 invert absolute right-[15px] top-[15px] transition-all hover:scale-105 cursor-pointer"
            onClick={() => closeEdit()}
          />
          <h1 className="font-bold text-center text-3xl mb-5">Enter Data</h1>

          <div className="my-2">
            <label htmlFor="url">Enter Platform: </label>
            <br />
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-transparent px-3 outline-none py-2 border w-full my-2"
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
              onChange={(e) => setWebsite(e.target.value)}
              className="bg-transparent px-3 outline-none py-2 border w-full my-2"
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
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="bg-transparent px-3 outline-none py-2 border w-full my-2"
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
                onChange={(e) => setPassword(e.target.value)}
                type={toggleEye ? "password" : "text"}
                className="bg-transparent px-3 outline-none py-2 border w-full my-2"
                placeholder="**********"
              />
              <img
                src={toggleEye ? svgs.eye_open : svgs.eye_close}
                alt="togglePasswordView"
                className="w-5 invert absolute left-[270px] top-[18px] cursor-pointer"
                onClick={() => setToggleEye(!toggleEye)}
              />
            </div>
          </div>

          <div>
            <button
            disabled={isEditing}
              type="submit"
              className={`w-full bg-white text-black border rounded-sm py-2 my-2 transition-all ${isEditing ? "cursor-not-allowed" : "hover:bg-black hover:text-white hover:scale-[1.025]"}`}
            >
              {isEditing ? "Editing..." : "Edit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Edit.propTypes = {
  closeEdit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  editData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    website: PropTypes.string,
    url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string,
  }).isRequired,
  getData: PropTypes.func.isRequired,
  
};

export default Edit;
