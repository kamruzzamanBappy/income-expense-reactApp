import React from 'react';

function HeaderForm({totalIncome}) {
  return (
    <header>
      <h1>Income Tracker</h1>
      <div className="total-income">${totalIncome}</div>
    </header>
  );
}

export default HeaderForm;