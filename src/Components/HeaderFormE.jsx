import React from 'react';

function HeaderFormE({totalExpense}) {
  return (
    <header>
      <h1>Expense Tracker</h1>
      <div className="total-expense">${totalExpense}</div>
    </header>
  );
}

export default HeaderFormE;