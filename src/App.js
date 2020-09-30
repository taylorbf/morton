import React from 'react';
import Editor from './components/Editor';
import Score from './components/Score';
import styled from 'styled-components';

const Structure = styled.div`
  > * {
    margin: 20px;
  }
`;


function App() {
  return (
    <Structure>
      <Editor />
      <Score />
    </Structure>
  );
}

export default App;
