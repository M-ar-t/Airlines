import React, { useEffect, useState } from "react";
import s from "./Price.module.css";
import { useDispatch } from "react-redux";
import { process, setMaxPrice, setMinPrice } from "../../store/reducer";

function Price(props) {
  const dispatch = useDispatch();

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(Infinity);

  useEffect(() => {
    dispatch(setMinPrice(min));
   dispatch(setMaxPrice(max));
    dispatch(process());
  }, [dispatch, max, min]);

  return (
    <div>
      <h4>Цена</h4>
      <div className={s.startPrice}>
        <label>
          От{" "}
          <input
            placeholder="0"
            type="text"
            onChange={(e) => setMin(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          До{" "}
          <input
            type="text"
            placeholder="1000000"
            onChange={(e) => setMax(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default Price;
