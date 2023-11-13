import "./adviceGenr.css";
import CasinoIcon from "@mui/icons-material/Casino";
import { useEffect, useState } from "react";

export const AdviceGenr = () => {
  const [data, setData] = useState();

  const fetchNewAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchNewAdvice();
  }, []);
  return (
    <div className="advice-body">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="card-body p-3">
            <div className="card-title text-center p-2">
              ADVICE # {data?.slip.id}
            </div>
            <div className="card-text text-white"> "{data?.slip.advice}"</div>
          </div>
          <div className="card-img mt-2 mb-5">
            <img
              className="card-img-top"
              src="https://raw.githubusercontent.com/gbopola/advice-generator-app/ca5445cf4ba19604fabac1a854f915065071175c/src/images/pattern-divider-desktop.svg"
              alt="divider"
            />
          </div>
        </div>
        <div className="diceDiv" onClick={fetchNewAdvice}>
          <CasinoIcon />
        </div>
      </div>
    </div>
  );
};
