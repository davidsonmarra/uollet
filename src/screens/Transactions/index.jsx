import React, { useState, useEffect } from 'react';
import CriptoSelect from '../../components/Forms/CriptoSelect';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import ButtonTypeTransaction from '../../components/Forms/ButtonTypeTransaction';
import Toast from 'react-native-toast-message';
import { useForm } from 'react-hook-form';
import {
  Container,
  Title,
  Select,
  Form,
  ContainerType,
  Fields,
  ModalCoin,
  ListCoins,
  ContainerModal
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import ListCripto from '../../components/ListCripto';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function Transactions() {
  const [selectTypeButton, setSelectTypeButton] = useState('');
  const {control, handleSubmit} = useForm();
  const [price, setPrice] = useState('');
  const [criptoPrice, setCriptoPrice] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const coins = useSelector((state) => state.criptos);
  const [selectedCrypto, setSelectedCrypto] = useState({
    image: 'https://www.iconpacks.net/icons/2/free-dollar-coin-icon-2149-thumb.png',
    id: 'Moeda',
    current_price: 'Preço Atual'
  });

  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function resetForm() {
    setSelectedCrypto({
      image: 'https://www.iconpacks.net/icons/2/free-dollar-coin-icon-2149-thumb.png',
      id: 'Moeda',
      current_price: 'Preço Atual'
    });
    setPrice('');
    setCriptoPrice('');
    setSelectTypeButton('');
  }

  async function handleTransaction(form) {
    if(selectedCrypto.id !== 'Moeda' && 
      selectTypeButton !== '' && 
      price !== '' &&
      criptoPrice !== ''
    ) {
      const data = {
        cryptoName: selectedCrypto.name,
        img: selectedCrypto.image,
        cryptoId: selectedCrypto.id, 
        cryptoSymbol: selectedCrypto.symbol,
        priceCrypto: criptoPrice,
        priceBrl: price,
        type: selectTypeButton,
        date: Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit'
        }).format(new Date)
      }
      await dispatch({ type: 'ADD_TRANSACTION', payload: data})
      resetForm();
      Toast.show({
        type: 'success',
        text1: 'Transação efetuada!',
        text2: 'A transação foi efetuada com sucesso ✔',
        position: 'bottom'
      });
      navigation.navigate('Início');
    }
    else {
      Toast.show({
        type: 'error',
        text1: 'Algo deu errado!',
        text2: 'A transação não pôde ser realizada com sucesso.',
        position: 'bottom',
      });
    }
  }

  useEffect(() => {
    if(String(selectedCrypto.current_price) !== 'undefined' && 
    (String(Number(price) / selectedCrypto.current_price)) !== 'Infinity' &&
    (String(Number(price) / selectedCrypto.current_price)) !== 'NaN')
      setCriptoPrice(String((Number(price) / selectedCrypto.current_price).toFixed(8)));
    setIsModalVisible(false);
  }, [selectedCrypto]);

  useEffect(() => {
    if(criptoPrice === 'undefined')
      setCriptoPrice('');
  }, [criptoPrice]);

  useEffect(() => {
    if(String(selectedCrypto.current_price) !== 'undefined' && 
    (String(Number(price) / selectedCrypto.current_price)) !== 'Infinity' &&
    (String(Number(price) / selectedCrypto.current_price)) !== 'NaN')
      setCriptoPrice(String((Number(price) / selectedCrypto.current_price).toFixed(8)));
  }, [price])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Form>
          <Title>Transação</Title>
          <Select>
            <CriptoSelect coin={selectedCrypto} setIsModalVisible={setIsModalVisible} />
          </Select>
          <ContainerType>
            <ButtonTypeTransaction 
                type="purchase"
                title="Comprar"
                isSelectted={selectTypeButton === 'purchase'}
                setSelectTypeButton={setSelectTypeButton}
              />
            <ButtonTypeTransaction 
              type="sell"
              title="Vender"
              isSelectted={selectTypeButton === 'sell'}
              setSelectTypeButton={setSelectTypeButton}
            />
          </ContainerType>
          <Fields>
            <Input
              name="price"
              control={control}
              placeholder="R$"
              placeholderTextColor='#FFFFFF88'
              autoCorrect={false}
              keyboardType="numeric"
              prefix="R$"
              delimiter="."
              separator=","
              precision={2}
              value={price}
              onChangeValue={setPrice}
            />
            <Input 
              name="criptoPrice"
              placeholder={String(selectedCrypto.current_price)}
              placeholderTextColor='#FFFFFF88'
              autoCorrect={false}
              keyboardType="numeric"
              editable={false} 
              selectTextOnFocus={false}
              value={selectedCrypto.symbol ? `${criptoPrice} ${selectedCrypto.symbol}` : criptoPrice}
              
            />
          </Fields>
        </Form>
        <Button 
          title="Finalizar"
          onPress={handleSubmit(handleTransaction)} 
        />
        <ModalCoin
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          scrollOffset={500}
        >
          {
            coins.length > 0 &&
            <ContainerModal>
            <ListCoins 
              data={coins}
              renderItem={({ item }) => 
                <ListCripto setSelectedCrypto={setSelectedCrypto} item={item}/>
              }
            />
            </ContainerModal>
              
          }
        </ModalCoin>
      </Container>
    </TouchableWithoutFeedback>
  );
}