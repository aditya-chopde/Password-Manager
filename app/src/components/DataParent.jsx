import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Data from "./Data";
import { AppContext } from "../context/AppContext";

const DataParent = () => {
  const [data, setData] = useState([]);
  const {url_backend} = useContext(AppContext)
  const userId = localStorage.getItem("userId")

  async function getData() {
    axios.get(`${url_backend}user/data`, {userId}).then((res) => {
      let data = res.data.data;
      setData(data);
    });
  }

  async function handleDelete(id) {
    await axios
      .post(`${url_backend}user/delete-data/${id}`)
      .then(() => {
        getData();
      });
  }

  useEffect(() => {
    getData();
  });

  return <Data data={data} handleDelete={handleDelete} getData={getData} />;
};

export default DataParent;
