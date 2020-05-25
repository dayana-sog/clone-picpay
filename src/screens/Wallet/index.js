import React, { useState } from 'react';
import { 
  Feather, 
  MaterialCommunityIcons, 
  FontAwesome,
  AntDesign
} from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddContainerButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel
} from './styles';

import creditCard from '../../assets/credit-card.png';

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState)
  }

  return (
    <Wrapper>
      <Header 
        colors={
          useBalance
          ? ['#52e78c', '#1ab563'] 
          : ['#d3d3d3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>R$ <Bold>{isVisible ? '132.350,00' : '----'}</Bold></Value>

            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={26} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar Saldo ao pagar</UseBalanceTitle>
        <Switch 
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre o seu cartão de crédito</CardTitle>
              <CardInfo>Cadastre o seu cartão de crédito para fazer pagamentos mesmo quando não tiver saldo no seu PicPay</CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <AddContainerButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddContainerButton>
        </Card>

        <UseTicketButton>
          <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
          <UseTicketLabel>Usar código promocial</UseTicketLabel>
        </UseTicketButton>
      </PaymentMethods>
    </Wrapper>
  );
}

export default Wallet;