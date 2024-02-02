import axios from "axios";
import { useEffect, useState } from "react";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_API_URL;
const TOKEN = "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN;

const useAxios = (url, method = "get", body = {}) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const responseData = await axios[method](API_ENDPOINT + url, {
        headers: {
          Authorization: TOKEN,
        },
        body,
      });
      console.log(url);
      setData(responseData.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useAxios;
