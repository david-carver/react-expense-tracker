import { List } from "components/List/List";
import { useSelector } from "react-redux";

export default function ExpenseList() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  return (
    <div>
      <List items={expenseList} />
    </div>
  );
}
