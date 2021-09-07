import React from 'react';
import {
  Container,
  PhotoCoin,
  Title,
  PriceContainer,
  Price,
  IconCaret,
} from './styles';

export default function TransactionCriptoCard({ data, select }) {
  return (
    <Container select={select}>
      <PhotoCoin source={{ uri: data.image }}/>
      <Title>{data.name}</Title>
      <PriceContainer>
        <IconCaret 
        value={data.market_cap_change_percentage_24h}
          name={data.market_cap_change_percentage_24h >= 0 ? "caret-up" : "caret-down"}/>
        <Price 
        value={data.market_cap_change_percentage_24h}>
          {data.market_cap_change_percentage_24h.toFixed(2)} %
        </Price>
      </PriceContainer>
    </Container>
  );
}