const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [],
    income: 1000,
    countActionPerfomed: 0
  },
  reducers: {
    addExpense(state, action) {
      state.expenseList.push(action.payload);
    },
    setIncomeAction(state, action) {
      state.income = action.payload;
    },
    incrementActionPerfomed(state) {
      state.countActionPerfomed++;
    },
  },
});

export const { addExpense, setIncomeAction, incrementActionPerfomed } =
  expenseSlice.actions;
