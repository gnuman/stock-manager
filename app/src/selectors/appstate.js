import { createSelector } from "reselect";

export const selectAppState = state => state.appState.get("appState");
