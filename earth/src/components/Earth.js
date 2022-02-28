import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Earth = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y += 0.001));
  const [colorMap, displacementMap, normalMap] = useLoader(TextureLoader, [
    '8081_earthmap10k.jpg',
    '8081_earthbump10k.jpg',
    'earth_normalmap.jpg',
    '8081_earthspec10k.jpg'
  ]);

  return (
    <mesh ref={mesh} position={[0,0,0]}>
      <sphereBufferGeometry args={[1, 300, 300]} />
      <meshStandardMaterial
        displacementScale={0.015}
        normalScale={0.7}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}/>
    </mesh>
  )
}

export default Earth;
