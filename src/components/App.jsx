import styled from 'styled-components';
import { Button } from './Button/Button.jsx';
import { Box } from './Box/Box';
import React from 'react';

const Title = styled.h1`
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.monospace};
  padding: ${props => props.theme.space[5]}px;
  text-align: center;
`;
const Text = styled.p`
  color: ${props => props.theme.colors.nice};
  width: 900px;
  margin: 30px auto;
  padding: ${props => props.theme.space[3]}px;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m}px;
  line-height: ${props => props.theme.lineHeights.heading};
`;
class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  hadleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <div>
          <button onClick={this.handleIncrement}>Увеличить</button>
          <button onClick={this.hadleDecrement}>Уменьшить</button>
        </div>
      </div>
    );
  }
}

export const App = () => {
  return (
    <>
      <Box as="section">
        <Title>
          Lorem inposum abrakadabra olalala rosem in developer me okey very good
        </Title>
        <Text>
          Punto Switcher — программа для автоматического переключения между
          различными раскладками клавиатуры в операционных системах семейства
          Microsoft Windows и macOS. Программа бесплатна для некоммерческого
          использования. С 2008 года программа принадлежит «Яндексу». Версия
          Punto Switcher 1.0 была опубликована 14 сентября 2001 года. Основное
          назначение программы — увеличение продуктивности и удобства при работе
          с компьютером. Работая в фоновом режиме, Punto Switcher проводит
          статистический анализ последовательностей вводимых символов слова, и,
          если сочетание букв оказывается нетипичным для языка, на котором
          вводятся символы, Punto Switcher переключает язык ввода, стирает
          напечатанное, эмулируя нажатие клавиши ← Backspace, и повторно вводит
          текст уже с правильной раскладкой клавиатуры.
        </Text>
        <Box display="flex" justifyContent="center">
          <Button>Search</Button>
          <Button>Click me</Button>
          <Button>Follow me</Button>
          <Button>Add more</Button>
          <Button>Detailes</Button>
          <Button type="submit" disabled>
            Log In
          </Button>
        </Box>
        <Counter initialValue={0} />
      </Box>
    </>
  );
};
