import styled from 'styled-components';

export const Countersection = styled.section`
  padding: 50px 0;
`;
export const CounterContainer = styled.div`
  padding: 0 30px;
  text-align: center;
`;
export const CounterIncrement = styled.button`
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  padding: 10px 20px;
  margin-right: 20px;
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: red;
  }
`;
export const CounterDecrement = styled.button`
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  padding: 10px 20px;
  margin-right: 20px;
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: red;
  }
`;
export const CounterValue = styled.p`
  font-size: 28px;
  font-weight: 600;
`;
export const CounterReset = styled.button`
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  padding: 10px 20px;
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: red;
  }
`;
