import React, { useState, useEffect } from 'react';
import TransactionsCard from '../../components/TransactionsCard';
import SingleTransactionCard from '../../components/SingleTransactionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  Wellcome,
  PhotoContainer,
  Photo,
  WellcomeText,
  LogoutButton,
  IconLogout,
  ContainerUserTransactions,
  TransactionList
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';


export default function Home({ navigation }) {
  const transactions = useSelector((state) => state.transactions);
  const coins = useSelector((state) => state.criptos);
  const [financial, setFinancial] = useState(0);
  const [sell, setSell] = useState(0);
  const [purchases, setPurchases] = useState(0);
  const isLogged = useSelector((state) => state.isLogged);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const theme = useTheme();

  const KEY = `@uollet:transactions_${String(user.id)}`;

  useEffect(() => {
    async function storeTransactions() {
      if(transactions.length > 0) {
        try {
          await AsyncStorage.setItem(KEY, JSON.stringify(transactions));
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
      // await AsyncStorage.clear();
      try {
        console.log("ID: ", String(user.id));
        const value = await AsyncStorage.getItem(KEY);
        // console.log("VALUE: ", value)
        if(value !== null) {
          dispatch({ type: 'GET_TRANSACTION_INITIAL', payload: JSON.parse(value)})
        }
        else
          dispatch({ type: 'GET_TRANSACTION_INITIAL', payload: []})
      } catch(e) {
        console.log(e);
      }
    }
    getTransactions();
  }, []);

  async function logout() {
    dispatch({ type: 'RESET_TRANSACTIONS' });
    dispatch({ type: 'USER_LOGOUT' });
    dispatch({ type: 'LOGOUT' });
    Toast.show({
      type: 'success',
      text1: 'Logout efetuado!',
      text2: 'O logout foi efetuado com sucesso ✔',
      position: 'bottom',
    })
    navigation.navigate('Login');
  }


  return (
    <Container>
        <>
          <Header>
            <Wellcome>
              <PhotoContainer><Photo source={{ uri: user.avatar }}/></PhotoContainer>
              <WellcomeText>
                {user.name}
              </WellcomeText>
            </Wellcome>
            <LogoutButton onPress={logout}>
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
      
    </Container>
  );
}