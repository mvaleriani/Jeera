import React from 'react';
import styled from 'styled-components';
import { SignUpPage } from './pages/SignUpPage';

const StyledApp = styled.main`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <SignUpPage></SignUpPage>
    </StyledApp>
  );
}

export default App;