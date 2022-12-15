import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
export const Item = styled.li`
  text-align: center;
  margin-right: 20px;

  border-radius: 10px;
  transition: transform 150ms linear;

  :nth-child(3) {
    margin-left: auto;
  }

  :last-child {
    margin: 0;
  }
`;

export const Link = styled(NavLink)`
  opacity: 0.6;
  font-size: 20px;
  transition: opacity 150ms linear;

  :hover {
    opacity: 1;
  }

  :active {
    opacity: 1;
  }
`;
