import React, { useState } from 'react';
import {
  Container,
  HeaderTransaction,
  Type,
  IconTransaction,
  IconTransactionTotal,
  Amount
} from './styles';

const text = {
  total: 'Balanço',
  purchases: 'Compras',
  sales: 'Vendas'
}

export default function TransactionsCard({ type, icon, amount }) {
  return (
    <Container>
      <HeaderTransaction>
        <Type>{text[type]}</Type>
        {type === 'total' ? 
          <IconTransactionTotal type={type} name={icon} /> : 
          <IconTransaction type={type} name={icon} />
        }
      </HeaderTransaction>
      <Amount>{amount < 0 ? `-${amount}` : `${amount}`}</Amount>
    </Container>
  );
}