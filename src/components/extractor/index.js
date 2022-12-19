import { useState } from "react";
import "./style.css";

import Button from "../button";

import { names } from "./constants";
import Loader from "../loader";

const Extractor = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const setData = (number) => {
    setCount(count + 1);
    setName(names[number]);
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500)

    if (count === 0) return setData(16);

    if (count === 1) return setData(5);

    const random = Math.floor(Math.random() * names.length);
    return setData(random);
  };

  return (
    <div className="extractor">
      <div className="name-label">Studente:</div>
      <div className="name">
        {loading && <Loader />}
        {!loading && name}
      </div>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default Extractor;
