import React from 'react';
import { Dimensions } from 'react-native';
import {
  Container,
  Button,
  PhotoCoin,
  Title,
  PriceContainer,
  Price,
  CurentValue,
  IconCaret,
  Div
} from './styles';

export default function ButtonCriptoCard({ data, select, setSelectedCrypto, setIsLoading, selectedCrypto }) {
  let deviceWidth = Dimensions.get('window').width;

  function handleChangeSelectedCripto() {
    if(selectedCrypto === data)
      return;
    setSelectedCrypto(data);
    setIsLoading(true);
  }

  return (
    <Container>
      <Button select={select} onPress={handleChangeSelectedCripto} >
        <PhotoCoin source={{ uri: data.image }}/>
        <Title>{data.name}</Title>
        <CurentValue >
          {
            Number(data.current_price).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })
          }
        </CurentValue>
        <PriceContainer>
          <IconCaret 
            value={data.market_cap_change_percentage_24h}
            name={data.market_cap_change_percentage_24h >= 0 ? "caret-up" : "caret-down"}
          />
          <Price 
            value={data.market_cap_change_percentage_24h}>
            {data.market_cap_change_percentage_24h.toFixed(2)} %
          </Price>
        </PriceContainer>
      </Button>
      <Div select={select} deviceWidth={deviceWidth} />
    </Container>
  );
}