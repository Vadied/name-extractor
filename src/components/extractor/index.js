import { useState } from "react";
import "./style.css";

import { names } from "./constants";
import Loader from "../loader";
import FakeButton from "../fakeButton";

const Extractor = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const handleClick = (number) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
    setName(names[number]);
  };

  return (
    <div className="extractor">
      <div className="name-label">Studente:</div>
      <div className="name">
        {loading && <Loader />}
        {!loading && name}
      </div>
      <FakeButton handleClick={handleClick} />
    </div>
  );
};

export default Extractor;
