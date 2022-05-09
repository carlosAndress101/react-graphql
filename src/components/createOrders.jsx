import { gql, Mutation } from "@apollo/client";
import { useState } from 'react';

const CREATE_ORDER = gql`
mutation Mutation($order: CreateOrder) {
  createOrder(order: $order) {
    _id
    NumberOfClient
    dataOfOrder
  }
}
`;


export default formOrder;