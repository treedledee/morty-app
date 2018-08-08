import React from 'react';
import { LOAN_TYPES } from '../../constants/index';

function Table({
  data,
  bankFilter,
  isLoaded,
  sortAscending,
  sortDescending,
}) {
  /* because we're dealing with a smaller amount of data, we can filter
     in the render method - we should consider including a debounce and
     filtering from the back-end depending on the size of the data set */
  const filtered = data.filter((item) => {
    const itemLenderName = item.lender.name.toLowerCase();
    const lowerCaseBankFilter = bankFilter.toLowerCase();
    return itemLenderName.includes(lowerCaseBankFilter);
  });
  const dataArray = bankFilter.length > 0 ? filtered : data;

  let status;
  if (!isLoaded) {
    status = 'Loading...';
  } else if (data.length === 0) {
    status = 'There are no loans of that amount available.';
  } else if (filtered.length === 0) {
    status = 'There are no lenders with that name.';
  }

  return [
    <table className="table" key={0}>
      <thead>
        <tr>
          <th>Lender</th>
          <th>
            Monthly Payment
            <button onClick={e => sortAscending(e, 'monthly_payment')}>&uarr;</button>
            <button onClick={e => sortDescending(e, 'monthly_payment')}>&darr;</button>
          </th>
          <th>
            Loan Term (years)
            <button onClick={e => sortAscending(e, 'loan_term')}>&uarr;</button>
            <button onClick={e => sortDescending(e, 'loan_term')}>&darr;</button>
          </th>
          <th>
            Interest Rate
            <button onClick={e => sortAscending(e, 'interest_rate')}>&uarr;</button>
            <button onClick={e => sortDescending(e, 'interest_rate')}>&darr;</button>
          </th>
          <th>Rate Type</th>
          <th>Loan Product</th>
        </tr>
      </thead>
      <tbody>
        {isLoaded && dataArray.map((item, index) => (
          // eslint-disable-next-line
          <tr key={index} data-item={item}>
            <td data-title="Lender">{item.lender.name}</td>
            <td data-title="Monthly Payment">{item.monthly_payment}</td>
            <td data-title="Loan Term (years)">{item.loan_term}</td>
            <td data-title="Interest Rate">{item.interest_rate}</td>
            <td data-title="Rate Type">{item.rate_type}</td>
            <td data-title="Loan Product">{LOAN_TYPES[item.loan_product]}</td>
          </tr>
        ))}
      </tbody>
    </table>,
    <div className="table__status" key={1}>{status}</div>,
  ];
}

export default Table;
