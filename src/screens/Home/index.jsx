import React, { useState, useEffect } from 'react';
import TransactionsCard from '../../components/TransactionsCard';
import SingleTransactionCard from '../../components/SingleTransactionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  Wellcome,
  Photo,
  WellcomeText,
  LogoutButton,
  IconLogout,
  ContainerUserTransactions,
  TransactionList
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import apiCoinGecko from '../../services/coinGecko';
import criptos from '../../utils/criptos';

export default function Home({ navigation }) {
  const transactions = useSelector((state) => state.transactions);
  const coins = useSelector((state) => state.criptos);
  const [financial, setFinancial] = useState(0);
  const [sell, setSell] = useState(0);
  const [purchases, setPurchases] = useState(0);
  const [isLoadingCriptosInfo, setIsLoadingCriptosInfo] = useState(true);

  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    
    async function fetchData() {
      await apiCoinGecko.get('/coins/markets/', {
        params: {
          vs_currency: 'brl',
          ids: criptos
        }
      }).then(res => {
        // console.log(res.data)
        dispatch({type: 'SET_INFOS', payload: res.data})
        setIsLoadingCriptosInfo(false);
      })
      .catch(err => console.log(err))
    }
    fetchData();
  }, []);



  useEffect(() => {
    async function storeTransactions() {
      if(transactions.length > 0) {
        try {
          await AsyncStorage.setItem('@uollet:transactions', JSON.stringify(transactions));
        } catch(e) {
          console.log(e);
        }
      } 
    }
    storeTransactions();
    let buy = 0;
    let seller = 0;
    transactions.map(tr => {
      if(tr.type === 'purchase')
        buy += Number(tr.priceBrl);
      else 
        seller += Number(tr.priceBrl);
    });
    setPurchases(buy);
    setSell(seller);
    setFinancial(seller - buy);
  }, [transactions])

  useEffect(() => {
    async function getTransactions() {
      try {
        const value = await AsyncStorage.getItem('@uollet:transactions');
        if(value !== null) {
          dispatch({ type: 'GET_TRANSACTION_INITIAL', payload: JSON.parse(value)})
        }
      } catch(e) {
        console.log(e);
      }
    }
    getTransactions();
  }, [])


  return (
    <Container>
      {
        isLoadingCriptosInfo ?
        <ActivityIndicator size="large" color={theme.colors.primary} /> :
        <>
          <Header>
            <Wellcome>
              <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/80720221?v=4' }}/>
              <WellcomeText>
                Davidson
              </WellcomeText>
            </Wellcome>
            <LogoutButton onPress={() => navigation.navigate('Login')}>
              <IconLogout name="logout" />
            </LogoutButton>
          </Header>
          <ContainerUserTransactions>
            <TransactionsCard 
              financial={financial}
              type="total" 
              icon="balance-scale"
              amount={financial.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            />
            <TransactionsCard 
              financial={financial}
              type="purchases"
              icon="trending-down"  
              amount={purchases.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })} 
            />
              <TransactionsCard 
                financial={financial}
                type="sales"
                icon="trending-up" 
                amount={sell.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              />
          </ContainerUserTransactions>
          <TransactionList 
            data={transactions}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <SingleTransactionCard item={item} />}
            keyExtractor={(item) => item.priceCrypto}
          />
        </>
      }
    </Container>
  );
}