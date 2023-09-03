import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isAllCompany,
  process,
  selectCompany,
  selectDisabledCompany,
  setAllCompany,
  setCompany,
} from "../../store/reducer";

function AviaCompany({ data }) {
  const dispatch = useDispatch();
  const [changeAll, setChangeAll] = useState(true);
  const isAll = useSelector(isAllCompany);
  const company = useSelector(selectCompany);
  const disabledCompany = useSelector(selectDisabledCompany);

  const uniqCaptopns = [
    ...new Set(data.map((item) => item.flight.carrier.uid)),
  ];

  return (
    <div>
      <h4>Авиакомпании</h4>
      {uniqCaptopns.map((item, i) => {
        const caption = data.find((el) => el.flight.carrier.uid === item).flight
          .carrier.caption;
        return (
          <div key={item}>
            <input
              checked={isAll ? true : company[item]}
              type="checkbox"
              id={item}
              name={item}
              disabled={disabledCompany.find((el) => el === item)}
              onChange={() => {
                setChangeAll(false);
                isAll && dispatch(setAllCompany(false));
                dispatch(setCompany(item));
                dispatch(process());
              }}
            />
            <label htmlFor={item}>- {caption}</label>
          </div>
        );
      })}
      <br />
      <input
        type="checkbox"
        id="all"
        name="all"
        checked={changeAll}
        onChange={() => {
          dispatch(setAllCompany(!changeAll));
          dispatch(process());
          setChangeAll(!changeAll);
        }}
      />
      <label htmlFor="all"> выбрать все</label>
    </div>
  );
}

export default AviaCompany;
