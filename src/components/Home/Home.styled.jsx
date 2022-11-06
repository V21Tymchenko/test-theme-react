import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListHome = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
export const LinkNone = styled(NavLink)`
  display: inline-block;

  padding: 15px 10px;
  border: 1px solid red;
  color: red;
  border-radius: 5px;
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: red;
    color: #ffffff;
  }
`;
export const HomeHeader = styled.header`
  padding: 15px 30px;
  border-bottom: 1px solid #312f2f;
  background-color: #312f2f;
`;
