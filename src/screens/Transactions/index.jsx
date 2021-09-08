import React, { useState } from 'react';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import ButtonTypeTransaction from '../../components/Forms/ButtonTypeTransaction';
import {
  Container,
  Title,
  Form,
  ContainerType
} from './styles';

export default function Transactions() {
  const [selectTypeButton, setSelectTypeButton] = useState('');
  return (
    <Container>
      <Title>Transação</Title>
      <Form>
        <ContainerType>
          <ButtonTypeTransaction 
            type="sell"
            title="Vender"
            isSelectted={selectTypeButton === 'sell'}
            setSelectTypeButton={setSelectTypeButton}
          />
          <ButtonTypeTransaction 
            type="purchase"
            title="Comprar"
            isSelectted={selectTypeButton === 'purchase'}
            setSelectTypeButton={setSelectTypeButton}
          />
        </ContainerType>
        <Input 
          placeholder="Preço"
        />
        <Button title="Finalizar" />
      </Form>
    </Container>
  );
}