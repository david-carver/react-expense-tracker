import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  setIncomeAction,
  addExpense,
  incrementActionPerfomed,
} from "store/expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  matcher: isAnyOf(setIncomeAction, addExpense),
  effect: async (action, listenerAPI) => {
    console.log("action", action);
    listenerAPI.dispatch(incrementActionPerfomed());
    console.log("state", listenerAPI.getState());
  },
});
