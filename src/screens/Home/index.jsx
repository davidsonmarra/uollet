import React, { useState, useEffect } from 'react';
import TransactionsCard from '../../components/TransactionsCard';
import SingleTransactionCard from '../../components/SingleTransactionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import { StatusBar } from 'react-native';


export default function Home({ navigation }) {
  const transactions = useSelector((state) => state.transactions);
  const [financial, setFinancial] = useState(0);
  const [sell, setSell] = useState(0);
  const [purchases, setPurchases] = useState(0);
  const user = useSelector((state) => state.user)  
  const [type, setType] = useState('total');
  const dispatch = useDispatch();

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
      try {
        console.log("ID: ", String(user.id));
        const value = await AsyncStorage.getItem(KEY);
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
          <StatusBar barStyle="light-content"/>
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
              isActive={'total' === type}
              setType={setType}
            />
            <TransactionsCard 
              financial={financial}
              type="purchase"
              icon="trending-down"  
              amount={purchases.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })} 
              isActive={'purchase' === type}
              setType={setType}
            />
              <TransactionsCard 
                financial={financial}
                type="sell"
                icon="trending-up" 
                amount={sell.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
                isActive={'sell' === type}
                setType={setType}
              />
          </ContainerUserTransactions>
          <TransactionList 
            data={type === 'total' ? transactions : 
            transactions.filter(transaction => transaction.type === type)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <SingleTransactionCard item={item} />}
            keyExtractor={(item) => item.priceCrypto}
          />
        </>
    </Container>
  );
}