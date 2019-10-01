import React from 'react';

import { Container, Title, Button, Input, TextButton, Link, LinkText } from './styles';

function goToSignUp() {
  navigation.navigate('SignUp');
}

export default function Login( { navigation } ) {
  return (
    <Container>
      <Title>Meus Serviços</Title>
      <Input placeholder="Seu e-mail" />
      <Input placeholder="Sua senha" />
      <Button>
        <TextButton>Entrar</TextButton>
      </Button>
      <Button onPress={goToSignUp}>/
        <TextButton>Criar Conta</TextButton>
      </Button>
    </Container>
  );
}
