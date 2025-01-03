import axios from "axios";
import { useEffect, useState } from "react";
import { svgs } from "../assets/asserts";

const Data = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/";
  const isEmpty = data.length === 0;

  async function getDate() {
    axios.get(`${url}user/data`).then((res) => {
      let data = res.data.data;
      setData(data);
    });
  }

  async function handleDelete(id) {
    await axios
      .post(`http://localhost:8080/user/delete-data/${id}`)
      .then(() => {
        getDate();
      });
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <>
      <section className="mx-5">
        <div>
          <h1 className="text-lg">Recently Added</h1>
          {isEmpty ? (
            <div>
              <p>No Data</p>
            </div>
          ) : (
            data.map((item) => (
              <div key={item._id} className="rounded-lg bg-[#262525] w-[100%] px-5 py-3 flex justify-between my-3 transition-all hover:bg-black hover:border hover:cursor-pointer">
                <div>
                  <h1 className="font-bold text-xl">{item.url}</h1>
                  <p>{item.username}</p>
                </div>
                <div className="flex gap-3 items-end">
                  <div className="bg-white rounded-[100%]">
                    <img src={svgs.edit} alt="edit-icon" className="w-8 p-1" />
                  </div>
                  <div className="bg-white rounded-[100%]">
                    <img
                      src={svgs.delete_icon}
                      alt="edit-icon"
                      className="w-8 p-1"
                      onClick={()=> handleDelete(item._id)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Data;
