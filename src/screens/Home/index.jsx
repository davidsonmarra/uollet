import React, { useState, useEffect } from 'react';
import TransactionsCard from '../../components/TransactionsCard';
import SingleTransactionCard from '../../components/SingleTransactionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';
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

export default function Home() {
  const transactions = useSelector((state) => state.transactions)
  const [financial, setFinancial] = useState(0);
  const [sell, setSell] = useState(0);
  const [purchases, setPurchases] = useState(0);
  
  const dispatch = useDispatch();
  // const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function storeTransactions() {
      if(transactions.length > 0) {
        try {
          await AsyncStorage.setItem('@uollet:transactions', JSON.stringify(transactions));
          console.log("ENTROU: ", JSON.stringify(transactions))
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
        const value = await AsyncStorage.getItem('@uollet:transactions')
        console.log("VALUE: ", value)
        if(value !== null) {
          dispatch({ type: 'GET_TRANSACTION_INITIAL', payload: JSON.parse(value)})
        }
      } catch(e) {
        console.log(e);
      }
    }
    getTransactions();
  }, [])


  // useEffect(() => {
  //   async function fetchData() {
  //     await apiCoinGecko.get('/coins/markets/', {
  //       params: {
  //         vs_currency: 'brl',
  //         ids: criptos
  //       }
  //     }).then(res => {
  //       setCoins(res.data)
  //       console.log(coins);
  //     })
  //     .catch(err => console.log(err))
  //   }
  //   fetchData();
    
  // }, []);

  return (
    <Container>
      <Header>
        <Wellcome>
          <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/80720221?v=4' }}/>
          <WellcomeText>
            Davidson
          </WellcomeText>
        </Wellcome>
        <LogoutButton>
          <IconLogout name="logout" />
        </LogoutButton>
      </Header>
      <ContainerUserTransactions>
        <TransactionsCard 
          type="total" 
          icon="balance-scale"
          amount={financial.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        />
        <TransactionsCard 
          type="sales"
          icon="trending-up" 
          amount={sell.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        />
        <TransactionsCard 
          type="purchases"
          icon="trending-down"  
          amount={purchases.toLocaleString('pt-BR', {
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
    </Container>
  );
}