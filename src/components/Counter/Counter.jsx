import {
  CounterContainer,
  Countersection,
  CounterIncrement,
  CounterDecrement,
  CounterValue,
  CounterReset,
} from './Counter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from 'redux/store';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter);
  const handleIncrement = () => {
    dispatch(increment(1));
  };
  const handleDecrement = () => {
    dispatch(decrement(1));
  };
  const handleReset = () => {
    dispatch(reset(0));
  };
  return (
    <Countersection>
      <CounterContainer>
        <CounterValue>{value}</CounterValue>
        <CounterIncrement onClick={handleIncrement}>Increment</CounterIncrement>
        <CounterDecrement onClick={handleDecrement}>Decrement</CounterDecrement>
        <CounterReset onClick={handleReset}>Reset</CounterReset>
      </CounterContainer>
    </Countersection>
  );
};
export default Counter;
