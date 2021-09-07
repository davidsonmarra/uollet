import React, { useState, useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import TransactionCriptoCard from '../../components/TransactionCriptoCard';

import {
  Container,
  ChartContainer,
  Title,
  ContainerList,
  TransactionList  
} from './styles';
import apiCoinGecko from '../../services/coinGecko';
import criptos from '../../utils/criptos';



export default function CriptosInfos() {
  const [coins, setCoins] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState({});

  useEffect(() => {
    async function fetchData() {
      await apiCoinGecko.get('/coins/markets/', {
        params: {
          vs_currency: 'brl',
          ids: criptos
        }
      }).then(res => {
        setCoins(res.data)
        console.log(coins);
      })
      .catch(err => console.log(err))
    }
    fetchData();
    if(coins.length > 0)
      setSelectedCrypto(coins[0]);
  }, []);

  return (
    <Container>
        <ChartContainer>
          {coins.length > 0 && <Title>bitcoin</Title>}
          <VictoryChart
            theme={VictoryTheme.material}
          > 
            <VictoryLine
              style={{
                data: { stroke: "#8605ff", strokeWidth: 5, },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
              ]}
            />
          </VictoryChart>
        </ChartContainer>
        <ContainerList>
          {
            coins.length > 0 &&
            <TransactionList 
              data={coins}
              renderItem={({ item }) => 
              <TransactionCriptoCard 
                data={item}
                select={item.id === selectedCrypto.id} 
              />}
            />  
          }
        </ContainerList>
      </Container>
  );
}