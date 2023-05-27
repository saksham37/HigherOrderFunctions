import React from "react";

import { useState, useEffect } from "react";

const HigherOrderComponent = (WrappedComponent, entity) => {
  const ModifiedComponent = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");
    //entity will either be users or todos
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();

        console.log(json);
        setData(json.slice(0, 10));
      };
      fetchData();
    }, []);
    const filteredData = data.filter((value) => {
      if (entity === "users") {
        const { name } = value;
        return name.indexOf(term) >= 0;
      } else {
        const { title } = value;
        return title.indexOf(term) >= 0;
      }
    });
    return (
      <>
        <div>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <WrappedComponent data={filteredData} />
        </div>
      </>
    );
  };

  return ModifiedComponent;
};

export default HigherOrderComponent;
