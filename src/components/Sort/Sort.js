import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { process, selectSort, setSort } from "../../store/reducer";

function Sort(props) {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const handleChange = (val) => {
    dispatch(setSort(val));
    dispatch(process());
  };

  return (
    <div>
      <h4>Сортировать</h4>
      <div>
        <div>
          <input
            type="radio"
            id="ascending "
            name="drone"
            value="ascending"
            checked ={sort ==='ascending' ? true:false}
            onChange={(e) => handleChange(e.currentTarget.value)}
          />
          <label htmlFor="ascending">- по возрастанию цены</label>
        </div>

        <div>
          <input
            type="radio"
            id="descending"
            name="drone"
            value="descending"
            checked ={sort ==='descending' ? true:false}
            onChange={(e) => handleChange(e.currentTarget.value)}
          />
          <label htmlFor="descending">- по убыванию цены</label>
        </div>

        <div>
          <input
            type="radio"
            id="duration"
            name="drone"
            value="duration"
            checked ={sort ==='duration' ? true:false}
            onChange={(e) => handleChange(e.currentTarget.value)}
          />
          <label htmlFor="duration">- по времени в пути</label>
        </div>
      </div>
    </div>
  );
}

export default Sort;
