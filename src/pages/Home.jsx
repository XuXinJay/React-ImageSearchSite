import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/search";
import Picture from "../components/picture";

function Home() {
  let [data, setData] = useState([]);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState(1);
  const API_Key = "bGhuwYd1JcQr686rYtmxhTmHNSxINq39EM9bghs1eDAfgiLJS8OFmrZS";
  const URL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  async function getImg(url) {
    try {
      const response = await axios.get(url, {
        headers: { Authorization: API_Key },
      });
      setData(response.data.photos);
      setCurrentSearch(input);
    } catch (error) {
      console.error(error);
    }
  }

  // Closure
  // setPage(page + 1)的部分有個bug，如果
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    try {
      const response = await axios.get(newURL, {
        headers: { Authorization: API_Key },
      });
      setData(data.concat(response.data.photos));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImg(URL);
  }, []);

  return (
    <div className="website_home">
      <Search
        getImg={() => {
          getImg(searchUrl);
        }}
        setInput={setInput}
      />
      <div className="website_picture_box">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>

      <div>
        <button className="morePicture" onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
}

export default Home;
