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
`;

export const Modal = styled.div``;

export const ModalCenter = styled.div``;

export const Form = styled.form``;

export const Label = styled.label``;

export const Input = styled.input``;

export const ButtonsWrapper = styled.div``;

export const ResetButton = styled.button``;

export const DeleteButton = styled.button``;

export const CreateButton = styled.button``;
