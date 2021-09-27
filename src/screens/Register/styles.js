import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import InputForm from '../../components/Forms/InputForm';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 50px 25px 30px;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};

`;

export const Form = styled.View`
  width: 100%;
`;

export const Input = styled(InputForm)`
  width: 100%;
  color: ${({ theme }) => theme.colors.shape}
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;

export const Button = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`;