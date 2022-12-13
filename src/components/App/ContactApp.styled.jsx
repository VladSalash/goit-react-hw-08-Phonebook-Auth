import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: aqua;

  padding: 50px 25px 0 25px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 40px 40px 40px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.2s ease-in-out;
`;
export const Item = styled.li`
  list-style: none;
  font-size: 20px;
`;
export const Button = styled.button`
  margin-left: 20px;
  font-size: 18px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 5px;
  cursor: pointer;
`;
