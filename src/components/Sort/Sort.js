import React from "react";

function Sort(props) {
  return (
    <div>
      <h4>Сортировать</h4>
      <div>
        <div>
          <input type="radio" id="ascending " name="drone" value="ascending "  />
          <label htmlFor="ascending">- по возрастанию цены</label>
        </div>

        <div>
          <input type="radio" id="descending" name="drone" value="descending" />
          <label htmlFor="descending">- по убыванию цены</label>
        </div>

        <div>
          <input type="radio" id="duration" name="drone" value="duration" />
          <label htmlFor="duration">- по времени в пути</label>
        </div>
      </div>
    </div>
  );
}

export default Sort;
