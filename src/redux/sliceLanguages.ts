import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILanguages {
  name: string;
  favorite: boolean;
}
const INITIAL_STATE: ILanguages[] = [
  { name: "javascript", favorite: false },
  { name: "javascript", favorite: false },
];

const sliceLanguages = createSlice({
  name: "languages",
  initialState: INITIAL_STATE,
  reducers: {
    addLanguage(state, { payload }: PayloadAction<string>) {
      return [...state, { name: payload, favorite: false }];
    },
    changeLanguage(state, { payload }: PayloadAction<string>) {
      return state.map((st) =>
        st.name === payload ? { ...st, favorite: !st.favorite } : st
      );
    },
  },
});

export default sliceLanguages.reducer;
export const { addLanguage, changeLanguage } = sliceLanguages.actions;
export const useLanguage = (state: any) => {
  return state.languages as ILanguages[];
};
export const useFavoriteLanguage = (state: any) => {
  return state.favorite as ILanguages[];
};
