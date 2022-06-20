import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [];

const App = () => {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    fetch('http://localhost/sample-api/api/read.php').then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            console.log(data)
            setExpenses(data);
        }
    )

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense)
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}
export default App;