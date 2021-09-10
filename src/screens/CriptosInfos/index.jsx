import React, { useState, useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import ButtonCriptoCard from '../../components/ButtonCriptoCard';
import {
  Container,
  Icon,
  ChartContainer,
  Title,
  TitleText,
  ContainerList,
  ContainerChartPadding,
  LoadingContainer,
  TransactionList,
} from './styles';
import apiCoinGecko from '../../services/coinGecko';
import criptos from '../../utils/criptos';
import { useSelector, useDispatch } from 'react-redux';

export default function CriptosInfos() {
  const theme = useTheme();
  // const [coins, setCoins] = useState([]);
  const coins = useSelector((state) => state.criptos);
  const dispatch = useDispatch();

  const [selectedCrypto, setSelectedCrypto] = useState({});
  const [dataChart, setDataChart] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  function formattedDataChart(data) {
    const formattedData = data.map((dt) => {
      return (
        {
          x: Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit'
          }).format(dt[0]),
          y: dt[1]
        }
      );
    });
    return formattedData;
  }

  useEffect(() => { setSelectedCrypto(coins[0]) },[])

  // useEffect(() => {
    
  //   async function fetchData() {
  //     await apiCoinGecko.get('/coins/markets/', {
  //       params: {
  //         vs_currency: 'brl',
  //         ids: criptos
  //       }
  //     }).then(res => {
  //       // setCoins(res.data);
  //       console.log(res.data)
  //       dispatch({type: 'SET_INFOS', payload: res.data})
  //       setSelectedCrypto(res.data[0]);
  //       setIsLoading(false);
  //     })
  //     .catch(err => console.log(err))
  //   }
  //   fetchData();
    
    
  // }, []);

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
      }).then(res => {
        setDataChart(formattedDataChart(res.data.prices))
        setIsLoading(false);
      })
      .catch(err => console.log(err))
    }
    fetchDataChart();
  }, [selectedCrypto])

  return (
    <Container>
      <ContainerList>
        <ChartContainer>
          {
            coins.length > 0 && selectedCrypto.current_price !== undefined &&
            <Title>
              <Icon source={{ uri: selectedCrypto.image }}/>
              <TitleText>{
                  Number(selectedCrypto.current_price).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })
              }</TitleText>
            </Title> 
          }
          {
            !isLoading ?
            <ContainerChartPadding>
              <VictoryChart
                height={350}
                width={350}
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
                    parent: { border: "1px solid #ccc"},
                  }}
                  data={dataChart}
                />
              </VictoryChart>
            </ContainerChartPadding> :
            <LoadingContainer>
              <ActivityIndicator size="large" color={theme.colors.primary}/>
            </LoadingContainer>
          }
        </ChartContainer>
          
          {
            coins.length > 0 &&
            <TransactionList 
              data={coins}
              renderItem={({ item }) => 
              <ButtonCriptoCard 
                data={item}
                select={item.id === selectedCrypto.id} 
                setSelectedCrypto={setSelectedCrypto}
                setIsLoading={setIsLoading}
                selectedCrypto={selectedCrypto}
              />}
            />  
          }
        </ContainerList>
      </Container>
  );
}