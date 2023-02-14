import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;
export const Input = styled.input`
  margin-top: 10px;
  background: transparent;
  width: 300px;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  outline: none;

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;
