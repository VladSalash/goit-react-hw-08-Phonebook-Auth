import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    margin-bottom: 0;
    border: 0;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  margin-left: 10px;
  background: transparent;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  font-size: 11px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;
