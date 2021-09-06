import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 50px 25px 0;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wellcome = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const WellcomeText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
`;

export const LogoutButton = styled(BorderlessButton)`
  
`;

export const IconLogout = styled(AntDesign)`
  color: #fff;
  font-size: ${RFValue(20)}px;
`;