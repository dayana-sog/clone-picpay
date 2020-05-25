import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  Title,
  Option,
  Label,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Action, 
  Options,
  OptionLabel
} from './styles';

import avatar from '../../assets/dayana.png';

function Activities () {
  const [isClick, setIsClick] = useState(false);
  const [like, setLike] = useState(0);
  const [message, setMessage] = useState(0);

  function handleClick() {
    setIsClick(!isClick);
  }


  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <TouchableWithoutFeedback>
          <Option>
            <Label
              isClick={isClick}
              onPress={handleClick}
            >Todas</Label>
            <Label
              onPress={handleClick}
            >Minhas</Label>
          </Option>
        </TouchableWithoutFeedback>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} resizeMode="contain" />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>Herbert Dantas</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Dayana Gonçalves</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$18,00</Value>

            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>há 2 anos</Date>
          </Details>

          <Action>
            <Options onPress={() => setLike(like + 1)}>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
              <OptionLabel>{like}</OptionLabel>
            </Options>
            <Options onPress={() => setMessage(message + 1)}>  
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>{message}</OptionLabel>
            </Options>
          </Action>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default Activities;