import React, { useState } from 'react';
import {
  Background,
  Container,
  Header,
  TitleContainer,
  Img,
  Title,
  TypeImg,
  PriceContainer,
  Price,
  BRLPrice,
  DateContainer,
  Date
} from './styles';

export default function SingleTransactionCard({ item }) {
  
  return (
    <Background>
      <Container>
        <Header >
          <TitleContainer>
            <Img source={{ uri: item.img }} />
            <Title>{item.cryptoName}</Title>
          </TitleContainer>
            <TypeImg type={item.type} name={item.type === 'sell' ? "pluscircleo" : "minuscircleo"} />
        </Header>
        <PriceContainer>
          <Price>{item.priceCrypto + ' ' + item.cryptoSymbol}</Price>
          <DateContainer>
            <BRLPrice>
              {Number(item.priceBrl).toLocaleString('pt-BR', 
                {
                  style: 'currency',
                  currency: 'BRL'
                })}
            </BRLPrice>  
            <Date>{item.date}</Date>
          </DateContainer>
        </PriceContainer>
      </Container>
    </Background> 
  );
}