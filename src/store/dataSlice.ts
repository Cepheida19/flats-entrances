import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type EntrancesType = {
  number: string | undefined;
  flats: string[] | undefined;
};

type houseActionType = {
  id: string | undefined;
  data: EntrancesType;
};
type HousesType = {
  id: string | undefined;
  entrances: EntrancesType[];
};
type HousesState = {
  houses: HousesType[];
};

const initialState: HousesState = {
  houses: [
    { id: "1", entrances: [] },
    { id: "2", entrances: [] },
    { id: "3", entrances: [] },
    { id: "4", entrances: [] },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addEntrance(state, action: PayloadAction<houseActionType>) {
      state.houses.map(
        (house) =>
          house.id === action.payload.id &&
          house.entrances.push(action.payload.data)
      );
    },
    removeEntrance(
      state,
      action: PayloadAction<Omit<houseActionType, "data">>
    ) {
      state.houses.map((house) =>
        house.id === action.payload.id ? (house.entrances.length = 0) : null
      );
    },
  },
});

export const { addEntrance, removeEntrance } = dataSlice.actions;

export default dataSlice.reducer;
