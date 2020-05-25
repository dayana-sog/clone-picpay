import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Option = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  ${props => props.isClick ?
   css`
    color: #10c86e;` 
    :
   css`color: #fff;`
  }
  margin-left: 15px;
  font-size: 12px;
`;

export const Card = styled.View`
  background: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 15px;
`;


export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 2px;
  height: 13px;
  background: rgba(255, 255, 255, 0.6 );
  margin: 0 10px;
`;

export const Date = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const Action = styled.View`
  flex-direction: row;
`;

export const Options = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
`;

export const OptionLabel = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;
