import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 4rem 0;
`;

export const Heading = styled.h1`
  text-align: center;
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 750px) {
    font-size: 2.5rem;
  }
`;

export const Subheading = styled.strong`
  text-align: center;
  display: block;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  font-size: 0.875rem;

  @media (min-width: 750px) {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
`;

export const Section = styled.section`
  height: 100%;
  width: 100%;
  margin-top: 3rem;

  @media (min-width: 750px) {
    margin-top: 5rem;
  }
`;

export const SectionCenter = styled.div`
  width: 95vw;
  max-width: 900px;
  margin: 0 auto;
`;

export const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  background-color: #202040;
  /* padding: 1rem; */
`;

export const HeaderText = styled.span`
  color: #d2d2d3;
  font-size: 1rem;

  @media (min-width: 750px) {
    font-size: 1.75rem;
  }
`;

export const CounterAmount = styled.strong`
  color: #d2d2d3;
  font-size: 1rem;

  @media (min-width: 750px) {
    font-size: 1.75rem;
  }
`;

export const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CounterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export const AddCounterButton = styled.button`
  font-size: 1rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  border: 0.1rem solid #80ed99;
  border-radius: 0.25rem;
  background-color: #80ed99;
  color: #1d1d20;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1d1d20;
    color: #80ed99;
  }
`;
//202040
//80ED99
//57CC99
//C7F9CC
//38A3A5
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
