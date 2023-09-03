import { createSlice } from "@reduxjs/toolkit";
import initialData from "../flights.json";

const initialState = {
  data: initialData.result.flights,
  processData: [],
  sort: "ascending",
  filter: { chekDirect: true, chekOneConnection: true },
  minPrice: 0,
  maxPrice: Infinity,
  company: {
    AF: true,
    AY: true,
    AZ: true,
    BT: true,
    KL: true,
    LO: true,
    PC: true,
    SN: true,
    SU1: true,
    TK: true,
  },
  allCompany: true,
  disabledCompany: [],
};

export const mainReducer = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    setSort(state, { payload }) {
      state.sort = payload;
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
      state.maxPrice = payload ? payload : Infinity;
    },
    setCompany(state, { payload }) {
      state.company[payload] = !state.company[payload];
    },
    setAllCompany(state, { payload }) {
      for (let key in state.company) {
        state.company[key] = payload;
      }
      state.allCompany = payload;
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

      switch (state.sort) {
        case "descending":
          filteredData.sort(
            (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
          );
          break;
        case "duration":
          filteredData.sort(
            (a, b) =>
              a.flight.legs[0].duration +
              a.flight.legs[1].duration -
              (b.flight.legs[0].duration + b.flight.legs[1].duration)
          );
          break;

        default:
          filteredData.sort(
            (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
          );
          break;
      }
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
  setAllCompany,
} = mainReducer.actions;

export default mainReducer.reducer;

export const selectAllFlights = (store) => store.mainReducer.data;
export const selectProcessFlights = (store) => store.mainReducer.processData;
export const isAllCompany = (store) => store.mainReducer.allCompany;
export const selectCompany = (store) => store.mainReducer.company;
export const selectSort = (store) => store.mainReducer.sort;
