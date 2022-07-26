import styled from 'styled-components';

export const Container = styled.div<{ isModalOpen: boolean }>`
  min-height: 100vh;
  width: 100%;
  padding: 4rem 0;
  height: ${({ isModalOpen }) => (isModalOpen ? '100vh' : '')};
  overflow-y: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : '')};
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
  padding: 1rem;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
