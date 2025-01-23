import PropTypes from "prop-types";
import { svgs } from "../assets/asserts";
import { useContext, useState } from "react";
import Edit from "./Edit";
import axios from "axios";
import SingleData from "./SingleData";
import {AppContext} from "../context/AppContext"

const Data = ({ data, handleDelete, getData }) => {
  const [toggleEditData, setToggleEditData] = useState(true);
  const [toggleDisplayData, setToggleDisplayData] = useState(true);
  const [editData, setEditData] = useState({});
  const [id, setId] = useState("");
  const isEmpty = data.length === 0;

  const {url_backend} = useContext(AppContext) 

  async function getSingleData(id) {
    await axios
      .get(`${url_backend}user/single-data/${id}`)
      .then((res) => {
        let EditData = res.data.getSingleData;
        setEditData(EditData);
      });
  }

  async function openDisplayData() {
    setToggleDisplayData(false);
  }

  async function closeDisplayData() {
    setToggleDisplayData(true);
  }

  async function openEdit() {
    setToggleEditData(false);
  }

  async function closeEdit() {
    setToggleEditData(true);
  }

  return (
    <>
      <section className="mx-5 relative mb-10">
        <div className="lg:w-1/2 w-full mx-auto">
          <h1 className="text-lg">Recently Added</h1>
          {isEmpty ? (
            <div>
              <p>No Data</p>
            </div>
          ) : (
            data.map((item) => (
              <div
                key={item._id}
                className="rounded-lg bg-[#262525] w-[100%] px-5 py-3 flex justify-between my-3 transition-all hover:bg-black hover:border hover:cursor-pointer relative"
              >
                <div onClick={()=> {
                  getSingleData(item._id)
                  openDisplayData()
                  }}>
                  <h1 className="font-bold text-xl">{item.url}</h1>
                  <p>{item.username}</p>
                </div>
                <div className="flex gap-3 items-end">
                  <div
                    onClick={() => {
                      setId(item._id);
                      openEdit();
                      getSingleData(item._id);
                    }}
                  >
                    <button className="bg-white rounded-[100%]">
                      <img
                        src={svgs.edit}
                        alt="edit-icon"
                        className="w-8 p-1"
                      />
                    </button>
                  </div>
                  <div className="bg-white rounded-[100%] mb-1">
                    <img
                      src={svgs.delete_icon}
                      alt="edit-icon"
                      className="w-8 p-1"
                      onClick={() => handleDelete(item._id)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Edit Modal  */}
        <div
          className={`border bg-black rounded-md px-8 py-8 my-24 w-96 absolute left-[-5px] top-0 z-10 ${
            toggleEditData && "hidden"
          }`}
        >
          <Edit
            closeEdit={closeEdit}
            id={id}
            editData={editData}
            getData={getData}
          />
        </div>

        {/* Display data Modal  */}
        <div
          className={`border bg-black rounded-md px-8 py-8 my-24 w-96 absolute sm:right-[20%] md:right-[35%] lg:right-[35%] top-0 z-10 ${
            toggleDisplayData && "hidden"
          }`}
        >
          <SingleData closeDisplayData={closeDisplayData} editData={editData} />
        </div>
      </section>
    </>
  );
};

Data.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      website: PropTypes.string,
      url: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Data;
