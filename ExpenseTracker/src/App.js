import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {
    let expenses = [
        {
            id: 'e1',
            title: 'School fees',
            amount: 100,
            date: new Date('2020-01-01')

        },
        {
            id: 'e2',
            title: 'Books',
            amount: 200,
            date: new Date('2020-05-01')

        },
        {
            id: 'e3',
            title: 'football',
            amount: 300,
            date: new Date('2020-01-11')

        },
        {
            id: 'e4',
            title: 'bat',
            amount: 400,
            date: new Date('2020-06-08')

        }
    ];

    return (
        <div>
            <h2>Let's Get Started</h2>
            <Expenses items={expenses} />
        </div>
    );
}
export default App;