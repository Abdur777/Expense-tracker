import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import Card from '../UI/Card'
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {
const [filteredYear, setFilteredYear] = useState('2020');
    function saveSelectFilter(selectedYear){
    setFilteredYear(selectedYear);
};
const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
})
    return (
    <div>
    <Card className="expenses">
    <ExpensesFilter onSelectFilter={saveSelectFilter} />
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
   </Card>
    </div>
);
}

export default Expenses; 