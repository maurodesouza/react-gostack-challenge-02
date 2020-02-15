import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ error }) => (error ? 'red' : '#7159c1')};

  small {
    font-size: 14px;
    color: #222;
  }
`;
