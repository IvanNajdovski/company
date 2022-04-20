import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    planning: { planingOption1: "4", planingOption2: "5" },
    delivering: { deliveringOption1: "2", deliveringOption2: "5", deliveringOption3: "4" },
    lorem: { loremOption1: "4", loremOption2: "2", loremOption3: "5" },
  },
  reducers: {
    updateFormField: (state, action) => {
      state[action.payload.fieldset][action.payload.key] = action.payload.value;
    },
  },
});
export const { updateFormField } = formSlice.actions;

export default formSlice.reducer;
