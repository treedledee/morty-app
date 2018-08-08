import React, { Component } from 'react';
import Table from '../../components/Table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false,
      loanAmount: '250000',
      bankFilter: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchLoanOptions = this.fetchLoanOptions.bind(this);
  }

  componentDidMount() {
    this.fetchLoanOptions(this.state.loanAmount);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoaded: false }, () => {
      this.fetchLoanOptions(this.state.loanAmount);
    });
  }

  fetchLoanOptions(loanAmount) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`http://morty.mockable.io/quotes?loan_amount=${loanAmount}`, options)
      .then(response => response.json())
      .then((responseJSON) => {
        this.setState({ data: responseJSON, isLoaded: true });
      })
      .catch((error) => {
        this.setState({ error, isLoaded: false });
        console.log('Error: ', this.state.error); //eslint-disable-line
      });
  }

  sortAscending(event, sortKey) {
    const { data } = this.state;
    data.sort((a, b) => (a[sortKey].localeCompare(b[sortKey])));
    this.setState({ data });
  }

  sortDescending(event, sortKey) {
    const { data } = this.state;
    data.sort((a, b) => (b[sortKey].localeCompare(a[sortKey])));
    this.setState({ data });
  }

  render() {
    const {
      data,
      loanAmount,
      bankFilter,
      isLoaded,
    } = this.state;
    return (
      <div className="app">
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="loanAmount">Loan Amount:
            <input
              type="number"
              name="loanAmount"
              value={loanAmount}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Find my mortgage options!</button>
        </form>
        <label htmlFor="bankFilter">Filter by Bank Name:
          <input
            type="text"
            name="bankFilter"
            value={bankFilter}
            onChange={this.handleChange}
          />
        </label>
        <Table
          data={data}
          isLoaded={isLoaded}
          bankFilter={bankFilter}
          sortAscending={(e, sortKey) => this.sortAscending(e, sortKey)}
          sortDescending={(e, sortKey) => this.sortDescending(e, sortKey)}
        />
      </div>
    );
  }
}

export default App;
