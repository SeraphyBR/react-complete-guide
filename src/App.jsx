import React from 'react';
import Expenses from "./components/Expenses/Expenses";

function App() {

    const expenses = [
        {
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2021,4,13)
        },
        {
            title: "Toilet Paper Vim",
            amount: 94.12,
            date: new Date(2021,4,13)
        }
    ]

    return (
        <div>
            <h2>Lets get started!</h2>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
