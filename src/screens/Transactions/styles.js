import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import Modal from 'react-native-modal';

export const Container = styled.View`
  flex: 1;
  padding: 50px 15px 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
  position: relative;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  margin-bottom: 50px;
`;

export const Select = styled.View`
  width: 100%;
  margin-bottom: 25px;
  justify-content: center;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  margin-top: 15px;
`;

export const ContainerType = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 25px;
`;

export const Fields = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ModalCoin = styled(Modal)`
  flex: 1;
  align-items: center;
`;

export const ListCoins = styled.FlatList``;

export const ContainerModal = styled.View`
  height: ${RFPercentage(60)}px;
  justify-content: flex-end;
`;