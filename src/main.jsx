import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink
} from "@apollo/client";

/**Cliente de apollo*/
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://back-end-nodejs-production.up.railway.app/graphql'
  })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)


/**Cuando usamos el Apollo providers debemos pasarle, el cliente para que no me marque error
 * indispensable el uso de la memoria cache para que el servidor no este cargando los datos 
 * cada vez que se reinicia.
*/