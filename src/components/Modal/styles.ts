import styled from 'styled-components';

export const Modal = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCenter = styled.div``;

export const Form = styled.form`
  width: 95vw;
  max-width: 500px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.25rem;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.5rem;
  color: #202040;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  color: #555555;
  border-radius: 0.5rem;
  border-width: 0.15rem;
  outline-offset: 0.1rem;
  outline-width: 0.15rem;
  outline-color: transparent;
  margin-bottom: 1rem;

  &:focus {
    outline-color: #80ed99;
    border-color: transparent;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: none;
  border: none;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  color: #c52b2b;
  cursor: pointer;

  &:hover {
    color: #a52b2b;
  }
`;
