import React, { useState, useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryLabel, VictoryAxis } from "victory-native";
import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import SelectedInterval from '../../components/Forms/SelectedInterval';
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
  ModalTime,
  ContainerModal,
  ContainerButton,
  ButtonTime,
  TextButtonTime
} from './styles';
import apiCoinGecko from '../../services/coinGecko';
import criptos from '../../utils/criptos';
import { useSelector, useDispatch } from 'react-redux';

export default function CriptosInfos({ navigation }) {
  const theme = useTheme();
  // const [coins, setCoins] = useState([]);
  const coins = useSelector((state) => state.criptos);
  const dispatch = useDispatch();

  const [selectedCrypto, setSelectedCrypto] = useState({});
  const [dataChart, setDataChart] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [interval, setInterval] = useState(7);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function formattedDataChart(data) {
    const formattedData = data.map((dt) => {
      return (
        interval === 7 ?
        {
          x: Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit'
          }).format(dt[0]),
          y: dt[1]
        } : 
        {
          x: Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
          }).format(dt[0]),
          y: dt[1]
        }
      );
    });
    return formattedData;
  }

  useEffect(() => { setSelectedCrypto(coins[0]) },[]);



  useEffect(() => {
    if (selectedCrypto === {}) 
      return;
    async function fetchDataChart() {
      await apiCoinGecko.get(`coins/${selectedCrypto.id}/market_chart`, {
        params: {
          id: selectedCrypto.id,
          vs_currency: 'brl',
          days: String(interval),
          interval: 'daily'
        }
      }).then(res => {
        setDataChart(formattedDataChart(res.data.prices))
        setIsLoading(false);
      })
      .catch(err => console.log(err))
    }
    fetchDataChart();
  }, [selectedCrypto, interval])

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
          <SelectedInterval interval={interval} setIsModalVisible={setIsModalVisible} />
          {
            !isLoading ?
            <ContainerChartPadding>
              <VictoryChart
                height={350}
                width={420}
                theme={VictoryTheme.material}
              > 
                <VictoryAxis independentAxis 
                  style={{ tickLabels: { angle: interval === 30 ? -90 : -60 } }}
                />
                 <VictoryAxis dependentAxis />
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
          <ModalTime
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          scrollOffset={500}
          >
            {
              <ContainerModal>
                <ContainerButton onPress={() => {
                  interval != 7 && setInterval(7);
                  setIsModalVisible(false);
                }}>
                  <ButtonTime>
                    <TextButtonTime>7 dias</TextButtonTime>
                  </ButtonTime>
                </ContainerButton>
                <ContainerButton onPress={() => {
                  interval != 14 && setInterval(14);
                  setIsModalVisible(false);
                }}>
                  <ButtonTime>
                    <TextButtonTime>14 dias</TextButtonTime>
                  </ButtonTime>
                </ContainerButton>
                <ContainerButton onPress={() => {
                  interval != 30 && setInterval(30);
                  setIsModalVisible(false);
                }}>
                  <ButtonTime>
                    <TextButtonTime>30 dias</TextButtonTime>
                  </ButtonTime>
                </ContainerButton>
              </ContainerModal>
            }
          </ModalTime>
        </ContainerList>
      </Container>
  );
}