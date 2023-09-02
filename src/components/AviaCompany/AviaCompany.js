import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { process, setCompany } from "../../store/reducer";

function AviaCompany({ data }) {
  // const [checkedCompany, setCheckedCompany] = useState(null);

  const dispatch = useDispatch();
  // data.map((item) => checkedCompany[item.flight.carrier.uid] = false);

  // console.log(checkedCompany);
  const uniqCaptopns = [
    ...new Set(data.map((item) => item.flight.carrier.uid)),
  ];

  
  return (
    <div>
      <h4>Авиакомпании</h4>
      {uniqCaptopns.map((item, i) => {
        const caption = data.find(el => el.flight.carrier.uid===item).flight.carrier.caption
        return(
          <div key={item}>
            <input
              type="checkbox"
              id={item}
              name={item}
              onChange={() => {
                // const arr = checkedCompany
                // arr[item] =  !arr[item]
                // setCheckedCompany(item)
                dispatch(setCompany(item));
                dispatch(process());
              }}
            />
            <label htmlFor={item}>- {caption}</label>
          </div>
        )
      })}
    </div>
  );
}

export default AviaCompany;
