import React from 'react';
import styled from 'styled-components';
import { SignUpForm } from './SignUpForm';

const StyledApp = styled.main`
  width: 100vw;
  height: 100vh;
  background: red;
  text-align: center;
`;

function App() {
  return (
    <StyledApp>
      <SignUpForm></SignUpForm>
    </StyledApp>
  );
}

export default App;