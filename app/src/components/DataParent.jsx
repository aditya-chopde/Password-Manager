import axios from "axios";
import { useEffect, useState } from "react";
import Data from "./Data";

const DataParent = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/";

  async function getData() {
    axios.get(`${url}user/data`).then((res) => {
      let data = res.data.data;
      setData(data);
    });
  }

  async function handleDelete(id) {
    await axios
      .post(`http://localhost:8080/user/delete-data/${id}`)
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
