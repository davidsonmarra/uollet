import React from 'react';
import {
  Container,
  Header,
  Wellcome,
  Photo,
  WellcomeText,
  LogoutButton,
  IconLogout
} from './styles';

export default function Home() {
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
    </Container>
  );
}