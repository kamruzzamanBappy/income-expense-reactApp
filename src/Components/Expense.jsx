import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import HeaderFormE from './HeaderFormE';
function App() {
	const [expense, setExpense] = useState([]);
	const [totalExpense, setTotalExpense] = useState(0);

	useEffect(() => {
		let temp = 0;
		for(let i = 0; i < expense.length; i++) {
			temp += parseInt(expense[i].price);
		}

		setTotalExpense(temp);
	}, [expense]);
	

	return (
        <Layout>
		<div className="App">
			<HeaderFormE totalExpense={totalExpense} />
			<ExpenseForm expense={expense} setExpense={setExpense} />
			<ExpenseList expense={expense} setExpense={setExpense} />
		</div>
        </Layout>
	);
}
export default App;