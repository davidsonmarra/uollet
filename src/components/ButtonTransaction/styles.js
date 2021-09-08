import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme, colorCurent }) => 
    colorCurent  === theme.colors.inactive ? theme.colors.primary_light : theme.colors.primary
  };
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFPercentage(50)}px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(BaseButton)`
`;

export const Icon = styled(FontAwesome5).attrs({
  name: "exchange-alt",
})`
  color: ${({ theme, colorCurent }) => 
    colorCurent  === theme.colors.inactive ? colorCurent : theme.colors.title
  };
  transform: rotate(90deg);
  
`;