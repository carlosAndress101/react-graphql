import { gql, useMutation } from "@apollo/client";
import { useState } from 'react';

const CREATE_ORDER = gql`
mutation CreateOrder($order: CreateOrder) {
  createOrder(order: $order) {
    _id
    NumberOfClient
    dataOfOrder
  }
}
`;

const formOrder = () => {

  try {
    const [NumberOfClient, setNumeroCliente] = useState('')
    const [dataOfOrder, setInfOrden] = useState('')

    const [createOrder] = useMutation(CREATE_ORDER)

    const handleSubmit = e => {
      e.preventDefault()
      createOrder({ variables: { order: { NumberOfClient, dataOfOrder } } })

      setNumeroCliente('')
      setInfOrden('')
    }
    return (
      <div>
        <h1>ordenes</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="numero del cliente" value={NumberOfClient} onChange={(evt) => setNumeroCliente(evt.target.value)} />
          <input placeholder="descripcion de orden" value={dataOfOrder} onChange={(evt) => setInfOrden(evt.target.value)} />
          <button>crear orden</button>
        </form>
      </div>
    )
  } catch (error) {
    console.log(error)
  }
}
export default formOrder;