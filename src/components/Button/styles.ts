import styled from 'styled-components';

export const ButtonComponent = styled.button<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  width: 6.5rem;
  border: 0.2rem solid transparent;
  border-radius: 0.25rem;
  outline-color: #80ed99;
  outline-offset: 0.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ bgColor }) => bgColor};
    border-color: ${({ bgColor }) => bgColor};
    background-color: #fff;
  }
`;
