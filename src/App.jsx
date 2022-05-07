import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { gql, useQuery } from '@apollo/client';

/**Peticion graphql*/
const findCustomer = gql`
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
  const { data, error, loading } = useQuery(findCustomer)

  if (error) return <samp style='color: red'>{error}</samp>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Graphql + React!</p>
      </header>
    </div>
  )
}

export default App
