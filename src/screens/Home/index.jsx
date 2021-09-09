import React, { useState, useEffect } from 'react';
import TransactionsCard from '../../components/TransactionsCard';
import SingleTransactionCard from '../../components/SingleTransactionCard';
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
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const transactions = useSelector((state) => state.transactions)
  const dispatch = useDispatch();
  const [teste, setTeste] = useState([
    {
      cryptoId: "ripple",
      cryptoName: 'Ripple',
      cryptoSymbol: "xrp",
      date: "09/09",
      img: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
      priceBrl: "200",
      priceCrypto: "33.44481605",
      type: "purchase"
    },
    {
      cryptoId: "litecoin",
      cryptoName: 'Litecoin',
      cryptoSymbol: "ltc",
      date: "09/09",
      img: "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
      priceBrl: "350",
      priceCrypto: "0.35195688",
      type: "sell"
    },
    {
      cryptoId: "chiliz",
      cryptoName: 'chiliz',
      cryptoSymbol: "chz",
      date: "09/09",
      img: "https://assets.coingecko.com/coins/images/8834/large/Chiliz.png?1561970540",
      priceBrl: "100",
      priceCrypto: "53.76344086",
      type: "sell",
    }
  ]);

  useEffect(() => {
    console.log(transactions)
  }, [transactions])
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
      <TransactionList 
        data={transactions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <SingleTransactionCard item={item} />}
        keyExtractor={(item) => item.priceCrypto}
      />
    </Container>
  );
}