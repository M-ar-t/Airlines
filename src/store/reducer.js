import { createSlice } from "@reduxjs/toolkit";
import initialData from "../flights.json";

const initialState = {
  data: initialData.result.flights,
  processData: [],
  sort: "increase",
  filter: { chekDirect: true, chekOneConnection: true },
  minPrice: 0,
  maxPrice: 1000000,
  company: {
    AF: false,
    AY: false,
    AZ: false,
    BT: false,
    KL: false,
    LO: false,
    PC: false,
    SN: false,
    SU1:false,
    TK: false,
  },
};

export const mainReducer = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    setSort(state, { payload }) {
      state.sort = payload.sort;
    },
    setFilter(state, { payload }) {
      state.filter = {
        chekDirect: payload.chekDirect,
        chekOneConnection: payload.chekOneConnection,
      };
    },
    setMinPrice(state, { payload }) {
      state.minPrice = payload ? payload : 0;
    },
    setMaxPrice(state, { payload }) {
      state.maxPrice = payload ? payload : 100000;
    },
    setCompany(state, { payload }) {
      console.log('payload = ', state.company[payload]);
      state.company[payload] = !state.company[payload] ;
    },

    process(state, actions) {
      let filteredData;
      if (state.filter.chekDirect && !state.filter.chekOneConnection) {
        filteredData = state.data.filter(
          (item) =>
            item.flight.legs[0].segments.length === 1 &&
            item.flight.legs[1].segments.length === 1
        );
      } else if (state.filter.chekOneConnection && !state.filter.chekDirect) {
        filteredData = state.data.filter(
          (item) =>
            item.flight.legs[0].segments.length === 2 &&
            item.flight.legs[1].segments.length === 2
        );
      } else {
        filteredData = state.data;
      }

      filteredData = filteredData.filter(
        (item) =>
          Number(item.flight.price.total.amount) > state.minPrice &&
          Number(item.flight.price.total.amount) < state.maxPrice
      );

      filteredData = filteredData.filter(
        (item) => state.company[item.flight.carrier.uid] === true
      );

      state.processData = filteredData;
    },
  },
});

export const {
  setSort,
  setFilter,
  setMinPrice,
  setMaxPrice,
  setCompany,
  process,
} = mainReducer.actions;

export default mainReducer.reducer;

export const selectAllFlights = (store) => store.mainReducer.data;
export const selectProcessFlights = (store) => store.mainReducer.processData;
