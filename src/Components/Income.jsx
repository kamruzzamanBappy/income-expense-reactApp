import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import HeaderForm from './HeaderForm';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function App() {
	const [income, setIncome] = useState([]);
	const [totalIncome, setTotalIncome] = useState(0);

	useEffect(() => {
		let temp = 0;
		for(let i = 0; i < income.length; i++) {
			temp += parseInt(income[i].price);
		}

		setTotalIncome(temp);
	}, [income]);
	

	return (
		<Layout>
		<div className="App">
			<HeaderForm totalIncome={totalIncome} />
			<IncomeForm income={income} setIncome={setIncome} />
			<IncomeList income={income} setIncome={setIncome} />
		</div>
		</Layout>
	);
}
export default App;