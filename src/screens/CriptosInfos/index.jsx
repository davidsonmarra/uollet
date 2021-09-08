import React, { useState, useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import { useTheme } from 'styled-components';
import ButtonCriptoCard from '../../components/ButtonCriptoCard';
import LogoSvg from '../../assets/logo.svg';
import {
  Container,
  Icon,
  ChartContainer,
  Title,
  TitleText,
  ContainerList,
  TransactionList,
} from './styles';
import apiCoinGecko from '../../services/coinGecko';
import criptos from '../../utils/criptos';

export default function CriptosInfos() {
  const theme = useTheme();
  const [coins, setCoins] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState({});
  const [dataChart, setDataChart] = useState([]);

  function formattedDataChart(data) {
    const formattedData = data.map((dt) => {
      return (
        {
          x: dt[0],
          y: dt[1]
        }
      );
    });
    return formattedData;
  }

  useEffect(() => {
    async function fetchData() {
      await apiCoinGecko.get('/coins/markets/', {
        params: {
          vs_currency: 'brl',
          ids: criptos
        }
      }).then(res => {
        setCoins(res.data);
        setSelectedCrypto(res.data[0]);
        console.log(res.data[0]);
      })
      .catch(err => console.log(err))
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCrypto === {}) 
      return;
    async function fetchDataChart() {
      await apiCoinGecko.get(`coins/${selectedCrypto.id}/market_chart`, {
        params: {
          id: selectedCrypto.id,
          vs_currency: 'brl',
          days: '7',
          interval: 'daily'
        }
      }).then(res => setDataChart(formattedDataChart(res.data.prices)))
      .catch(err => console.log(err))
    }
    fetchDataChart();
  }, [selectedCrypto])

  return (
    <Container>
        <ChartContainer>
          {
            coins.length > 0 && 
            <Title>
              <Icon source={{ uri: selectedCrypto.image }}/>
              <TitleText>{
                  selectedCrypto.current_price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })
              }</TitleText>
            </Title>
          }
          <VictoryChart
            theme={VictoryTheme.material}
          > 
            <VictoryLine
              style={{
                data: { 
                  stroke: selectedCrypto.market_cap_change_percentage_24h >= 0 ? 
                  theme.colors.green : 
                  theme.colors.red, 
                  strokeWidth: 5, 
                },
                parent: { border: "1px solid #ccc"}
              }}
              data={dataChart}
            />
          </VictoryChart>
        </ChartContainer>
        <ContainerList>
          {
            coins.length > 0 &&
            <TransactionList 
              data={coins}
              renderItem={({ item }) => 
              <ButtonCriptoCard 
                data={item}
                select={item.id === selectedCrypto.id} 
                setSelectedCrypto={setSelectedCrypto}
              />}
            />  
          }
        </ContainerList>
      </Container>
  );
}