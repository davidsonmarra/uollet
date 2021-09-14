import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 50px 0 0;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wellcome = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PhotoContainer = styled.View`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFPercentage(50)}px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-right: 10px;
`;

export const Photo = styled.Image`
  flex: 1;
  border-radius: ${RFPercentage(50)}px;
`;

export const WellcomeText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const IconLogout = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${RFValue(20)}px;
`;

export const ContainerUserTransactions = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  padding: 0px 0 20px;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`; 

export const TransactionList = styled.FlatList`
  margin-top: ${RFPercentage(35)}px;
  padding: 0 25px;
`;