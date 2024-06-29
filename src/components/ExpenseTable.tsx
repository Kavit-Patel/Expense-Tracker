// import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Iexpense } from "../types";

const ExpenseTable = ({ expenses }: { expenses: Iexpense[] }) => {
  return (
    <table className="min-w-full border ">
      <thead>
        <tr>
          <th className="text-left px-4 py-2 border flex justify-between items-center">
            <span>Title</span>
            <span className="flex text-xs font-normal gap-0.5">
              <span className="transition-all cursor-pointer active:scale-90">
                <FaArrowUp />
              </span>
              <span className="transition-all cursor-pointer active:scale-90">
                <FaArrowDown />
              </span>
            </span>
          </th>
          <th className="text-left px-4 py-2 border-2">All </th>
          <th className="text-left px-4 py-2 border-2 flex justify-between items-center">
            <span>Amount</span>
            <span className="flex text-xs font-normal gap-0.5">
              <span className="transition-all cursor-pointer active:scale-90">
                <FaArrowUp />
              </span>
              <span className="transition-all cursor-pointer active:scale-90">
                <FaArrowDown />
              </span>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses?.map((expense) => (
          <tr key={expense.id}>
            <td className=" px-4 py-2 border-2">{expense.title}</td>
            <td className=" px-4 py-2 border-2">{expense.category}</td>
            <td className=" px-4 py-2 border-2">${expense.amount}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className=" px-4 py-2 border-2 font-semibold">Total</td>
          <td className=" px-4 py-2 border-2"></td>
          <td className=" px-4 py-2 border-2 font-semibold">$1000</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseTable;
