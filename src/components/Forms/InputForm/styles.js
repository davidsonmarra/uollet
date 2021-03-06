import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 20px;
  background-color: #00000011;
  color: #333333;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const ViewBtn = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})` 
  flex: 1;
  position: absolute;
  right: 0;
  padding-right: 20px;
`;

export const Button = styled(BorderlessButton)``;

export const Eye = styled(FontAwesome)``;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: 7px 0;
`;