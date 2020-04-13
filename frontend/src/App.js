import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.main`
  width: 100vw;
  height: 100vh;
  background: red;
  text-align: center;
`;

function App() {
  return (
    <StyledApp>Frontend App</StyledApp>
  );
}

export default App;