import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

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