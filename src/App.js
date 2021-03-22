import React, { useEffect, useState, useCallback } from "react";
import './App.css';
import Table from "./Copmonents/Table.jsx";


function App() {
  // const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);


  const getFetch = useCallback(async () => {
    let url =
      "https://bitbucket.org/GuestOne/goodline-test-task/raw/64ddcf7539c64d7a7ad5efb4dcef1f20a1805ef9/frontend/data.json";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      console.log("GetFetch Ошибка:", error);
      return error;
    }
  }, []);

  useEffect(() => {
    getFetch();
  }, [getFetch]);

  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
