import { useState } from "react";
import Expense from "./components/Expense";
import ExpenseTable from "./components/ExpenseTable";
import { Iexpense } from "./types";

const App = () => {
  const [expenses, setExpenses] = useState<Iexpense[]>([
    {
      id: "20395-w092309-2392309",
      title: "Milk",
      category: "Grocery",
      amount: 100,
    },
  ]);

  return (
    <div className="max-w-[1940px] min-h-screen p-12 bg-yellow-50 flex flex-col md:flex-row justify-center items-center md:items-start gap-4">
      <div className="w-full md:w-[45%]  ">
        <Expense setExpenses={setExpenses} />
      </div>
      <div className="w-full md:w-[45%] min-h-fit">
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
