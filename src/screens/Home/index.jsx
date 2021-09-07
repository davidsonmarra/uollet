import React, { useState, useEffect } from 'react';
import TransactionsCard from '../../components/TransactionsCard';
// import TransactionCriptoCard from '../../components/TransactionCriptoCard';
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
// import apiCoinGecko from '../../services/coinGecko';
// import criptos from '../../utils/criptos';
// import { FlatList } from 'react-native';

export default function Home() {
  // const [coins, setCoins] = useState([]);


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
          icon="coins"
          amount="R$ 15.000,00"
        />
        <TransactionsCard 
          type="sales"
          icon="trending-up" 
          amount="R$ 18.000,00"
        />
        <TransactionsCard 
          type="purchases" 
          icon="trending-down"  
          amount="R$ 3.000,00"
        />
      </ContainerUserTransactions>
      {/* {
        coins.length > 0 &&
        <TransactionList 
          data={coins}
          renderItem={({ item }) => <TransactionCriptoCard data={item} />}
        />  
      } */}
    </Container>
  );
}