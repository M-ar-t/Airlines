import React, { useEffect, useState } from "react";
import { process, setFilter } from "../../store/reducer";
import { useDispatch } from "react-redux";

function Filter() {
  const [chekDirect, setChekDirect] = useState(false);
  const [chekOneConnection, setChekOneConnection] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter({ chekDirect, chekOneConnection }));
    dispatch(process())
  }, [chekDirect, chekOneConnection, dispatch]);


  return (
    <div>
      <h4>Фильтровать</h4>
      <div>
        <input
          type="checkbox"
          id="oneConnection"
          name="oneConnection"
          checked={chekOneConnection}
          onChange={() => {
            setChekOneConnection(!chekOneConnection);
          }}
        />
        <label htmlFor="oneConnection">- 1 пересадка</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="direct"
          name="direct"
          checked={chekDirect}
          onChange={() => {
            setChekDirect(!chekDirect);
          }}
        />
        <label htmlFor="direct">- без пересадок</label>
      </div>
    </div>
  );
}

export default Filter;
