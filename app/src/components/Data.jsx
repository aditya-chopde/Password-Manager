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
      <section className="flex flex-col justify-center items-center my-10">
        <div className="flex flex-col justify-center w-[60%]">
          <h1 className="font-bold text-2xl my-5">Your data</h1>
          <table>
            <thead>
              <tr className="border text-center">
                <th>#</th>
                <th>Platform</th>
                <th>URL</th>
                <th>Username/Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isEmpty ? (
                <tr>
                  <td colSpan="6" className="text-center py-3">
                    No Data
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={item._id} className="border">
                    <td className="px-3 py-2">{index + 1}</td>
                    <td className="px-3 pt-2">{item.url}</td>
                    <td className="px-3 pt-2">{item.website}</td>
                    <td className="px-3 pt-2">{item.username}</td>
                    <td className="px-3 pt-2">{item.password}</td>
                    <td>
                      <img
                        src={svgs.delete_icon}
                        alt="delete_icon"
                        className="w-5 transition-all hover:scale-105 invert cursor-pointer"
                        onClick={() => handleDelete(item._id)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Data;
