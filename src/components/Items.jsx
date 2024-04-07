import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Items = () => {
  const [input, setInput] = useState("");
  const [uniData, setUniData] = useState([]);
  const [resaults, setResaults] = useState([]);
  const [searchFilter, setSearchFilter] = useState("name");

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = "http://universities.hipolabs.com/search";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const res = data.filter((uni) => {
        return uni.country === "Niger" || uni.country === "Israel" || uni.country === "France";
      });
      setUniData(res);
      setResaults(uniData);
      console.log(res);
    } catch (err) {
      console.log(err);
      alert("There is a problem come back later");
    }
  };

  const getResaults = (value, filter) => {
    if (filter === "name") {
      const filteredResaults = uniData.filter((uni) => {
        return uni.name.toLowerCase().includes(value);
      });
      setResaults(filteredResaults);
      console.log(resaults);
    } else {
      const filteredResaults = uniData.filter((uni) => {
        return uni.country.toLowerCase().includes(value);
      });
      setResaults(filteredResaults);
      console.log(resaults);
    }
  };

  const handleChange = (value, filter) => {
    setInput(value);
    getResaults(value, filter);
  };

  const handleCLick = (filter) => {
    if (filter === "name") setSearchFilter("country");
    else setSearchFilter("name");
  };
  return (
    <div className="item-container">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          className="search_input"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value, searchFilter)}
        />
        <button className="button" onClick={() => handleCLick(searchFilter)}>
          {searchFilter}
        </button>
      </div>
      {resaults.map((uni) => {
        return (
          <ul>
            <li className="uni"> University name: {uni.name} <br />
                 Country: {uni.country} <br />
                 Website: {uni.web_pages[0]}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Items;
