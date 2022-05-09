import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { gql, useQuery } from '@apollo/client';
import Customer from './components/customer';
import CustomerForm from './components/cCustomer'
import CreateOrder from './components/createOrders';
/**Peticion graphql*/
const customers = gql`
query {
    customers {
      _id
      Name
      Phonenumber
      Email
      password
    }
  }
`
function App() {
  const { data, error, loading } = useQuery(customers)

  if (error) return <spam style='color: red'>{error}</spam>

  return (
    <div className="App">
      <CreateOrder />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          loading ? <p>Loading...</p>
            : <Customer custom={data?.customers} />
        }
      </header>
    </div>
  )
}

export default App
