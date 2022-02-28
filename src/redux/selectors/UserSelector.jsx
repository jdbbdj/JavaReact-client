import { createSelector } from "reselect";
import { get } from "lodash";

import { AppState } from "../reducers";

const users = (state) => state.userReducers;

export const userLogsSelector = () =>
  createSelector(users, (data) => get(data, "logs", []));
