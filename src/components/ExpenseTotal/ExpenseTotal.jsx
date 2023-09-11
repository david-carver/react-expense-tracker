import s from "./style.module.css";
import { useSelector } from "react-redux";

export function ExpenseTotal(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const totalExpense = expenseList.reduce(
    (acc, expense) => acc + expense.price,
    0
  );
  const reaminingMondey = income - totalExpense;

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>${totalExpense}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>${reaminingMondey}</div>
      </div>
    </div>
  );
}
