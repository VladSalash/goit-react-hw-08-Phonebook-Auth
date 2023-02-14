import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 550px;
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  margin-top: 3px;
  background: transparent;
  width: 500px;
  padding: 1em;
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

  &:focus,
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    font-size: 15px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-top: 15px;
  cursor: pointer;
  background: transparent;
  width: 150px;
  padding: 1em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgb(0 0 0 / 20%);
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 20%);

  &:focus,
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;
