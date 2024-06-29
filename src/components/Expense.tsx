import { useState } from "react";
import { Ierror, Iexpense } from "../types";

const Expense = ({
  setExpenses,
}: {
  setExpenses: React.Dispatch<React.SetStateAction<Iexpense[]>>;
}) => {
  const [expense, setExpense] = useState<Iexpense>({
    id: "",
    title: "",
    category: "",
    amount: 0,
  });
  const [error, setError] = useState<{ [key: string]: string | null }>({
    title: "",
    category: "",
    amount: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setExpense((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const errorList: Ierror = {
    title: [
      {
        required: true,
        message: "Title is required",
      },
      {
        minLength: 3,
        message: "Title must have atlease 3 characters",
      },
      {
        maxLength: 30,
        message: "Title must not exceed 30 characters",
      },
    ],
    category: [
      {
        required: true,
        message: "Please Select a category",
      },
    ],
    amount: [
      {
        required: true,
        message: "Amount is required",
      },
    ],
  };

  function validation(data: Iexpense) {
    const errorMessage: { [key: string]: string | null } = {};
    Object.entries(data).forEach(([key, value]) => {
      errorList[key]?.forEach((rule) => {
        if (rule.required && !value) {
          errorMessage[key] = rule.message;
        } else if (rule.minLength && value && value.length < 3) {
          errorMessage[key] = rule.message;
        } else if (rule.maxLength && value && value.length > 30) {
          errorMessage[key] = rule.message;
        }
      });
    });
    return errorMessage;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validate = validation(expense);
    console.log(validate);
    if (Object.values(validate).length !== 0) {
      setError(validate);
      return;
    } else {
      setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
      setExpense({ id: "", title: "", category: "", amount: 0 });
    }
  };
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="mb-3 text-2xl font-semibold">Track Your Expense</h2>

      <div className="flex flex-col relative">
        <label htmlFor="title">Title</label>
        <input
          value={expense.title}
          onChange={(e) => handleChange(e)}
          className="w-[80%] p-2 rounded-md outline-none border border-orange-300 "
          type="text"
          id="title"
          name="title"
          placeholder="Enter title.."
        />
        <p className="text-xs text-red-400 absolute top-16">{error.title}</p>
      </div>
      <div className="flex flex-col relative">
        <label htmlFor="category">Category</label>
        <select
          value={expense.category}
          onChange={(e) => handleChange(e)}
          className="w-[80%] p-2 rounded-md outline-none border border-orange-300 "
          id="category"
          name="category"
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="grocery">Clothes</option>
          <option value="grocery">Bills</option>
        </select>
        <p className="text-xs text-red-400 absolute top-16">{error.category}</p>
      </div>
      <div className="flex flex-col relative">
        <label htmlFor="amount">Amount</label>
        <input
          value={expense.amount}
          onChange={(e) => handleChange(e)}
          className="w-[80%] p-2 rounded-md outline-none border border-orange-300 "
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter Amount"
        />
        <p className="text-xs text-red-400 absolute top-16">{error.amount}</p>
      </div>
      <button className="w-[80%] p-2 my-4 rounded-md border border-orange-300 bg-orange-100 transition-all hover:bg-orange-200 active:scale-95">
        Add
      </button>
    </form>
  );
};

export default Expense;
