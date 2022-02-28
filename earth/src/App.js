import React, { useRef, useState, Suspense } from 'react';
import './App.scss'

import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader' 
import { OrbitControls, Stars } from '@react-three/drei';
import Earth from './components/Earth';


const App = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stars 
            factor={1}
            attach="background" />
          <color attach="background" args={["black"]} /> 
          <ambientLight intensity={0.001}/>
          <directionalLight
            position={[10, 0, 0]}
            intensity={0.6} />
          <group>
            <Earth />
          </group>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
