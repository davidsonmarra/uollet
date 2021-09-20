import React from 'react';
import {
  Background,
  Container,
  HeaderTransaction,
  Type,
  IconTransaction,
  IconTransactionTotal,
  Amount
} from './styles';

const text = {
  total: 'Financeiro',
  purchase: 'Compras',
  sell: 'Vendas'
}

export default function TransactionsCard({ type, icon, amount, financial, setType, isActive }) {
  return (
    <Background onPress={() => setType(type)} activeOpacity={0.3}>
      <Container isActive={isActive}>
        <HeaderTransaction>
          <Type>{text[type]}</Type>
          {type === 'total' ? 
            <IconTransactionTotal type={type} name={icon} /> : 
            <IconTransaction type={type} name={icon} />
          }
        </HeaderTransaction>
        <Amount amount={financial} type={type}>{amount < 0 ? `-${amount}` : `${amount}`}</Amount>
      </Container>
    </Background>
  );
}