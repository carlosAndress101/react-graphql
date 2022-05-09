import { gql, useMutation } from "@apollo/client";
import { useState } from 'react';

const CREATECUSTOMER = gql`
mutation CreateCustomer($Name:String!, $Lastname:String!, $Age:Int!, $Phonenumber:String!, $Email:String!,$password:String!, $city:String!){
  createCustomer(Name: $Name Lastname: $Lastname Age: $Age Phonenumber: $Phonenumber Email: $Email password: $password city: $city
    ){
    _id
    Name
    Lastname
    Age
    Phonenumber
    Email
    password
    city
  }
}
`

const formCustomer = () => {
  const [Name, setName] = useState('')
  const [Lastname, setLastname] = useState('')
  const [Age, setAge] = useState('')
  const [Phonenumber, setPhonenumber] = useState('')
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')

  const [createCustomer] = useMutation( CREATECUSTOMER)

  const handleSubmit = e => {

    e.preventDefault()

    createCustomer({variables: {Name, Lastname, Age, Phonenumber, Email, password, city}})

    setName('')
    setLastname('')
    setAge('')
    setPhonenumber('')
    setEmail('')
    setPassword('')
    setCity('')

  }

  return (
    <div>
      <h2> Create Customer </h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={Name} onChange={evt => setName(evt.target.value)} />
        <input placeholder="LastName" value={Lastname} onChange={evt => setLastname(evt.target.value)} />
        <input placeholder="Age" value={Age} onChange={event => setAge(event.target.value)} />
        <input placeholder="PhoneNumber" value={Phonenumber} onChange={evt => setPhonenumber(evt.target.value)} />
        <input placeholder="Email" value={Email} onChange={evt => setEmail(evt.target.value)} />
        <input placeholder="Password" value={password} onChange={evt => setPassword(evt.target.value)} />
        <input placeholder="City" value={city} onChange={evt => setCity(evt.target.value)} />
        <button> Create Customer</button>
      </form>
    </div>
  )
}

export default formCustomer;