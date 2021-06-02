import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {

    const [expenses, setExpenses] = useState([
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2021,4,13)
        },
        {
            id: "e2",
            title: "Toilet Paper Vim",
            amount: 94.12,
            date: new Date(2021,4,13)
        },
        {
            id: "e3",
            title: "Curso de react",
            amount: 10.12,
            date: new Date(2021,4,13)
        }
    ]);

    function addExpenseHandler(expense) {
        setExpenses((prev) => [expense, ...prev]);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
