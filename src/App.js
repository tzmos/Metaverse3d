import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Earth } from './components/Earth';
// import './App.css';


const CanvasContainer = styled.div`
  width:100%;
  height:100%;
`;

function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
