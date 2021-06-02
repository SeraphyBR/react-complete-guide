import React from 'react';
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

function ExpensesList(props) {
    let expensesContent = props.items
        .map(e =>
            <ExpenseItem
                // Always set a key when working with map list
                // Otherwise, you will have performance and bugs issues
                key={e.id}
                title={e.title}
                amount={e.amount}
                date={e.date}
            />
        );

    if(expensesContent.length === 0) {
        return (
            <h2 className="expenses-list__fallback">
                No expenses found.
            </h2>
        );
    }

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    );
}

export default ExpensesList;