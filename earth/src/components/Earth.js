import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Earth = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y += 0.001));
  const [colorMap, displacementMap, normalMap] = useLoader(TextureLoader, [
    '8081_earthmap10k.jpg',
    'earth_displacement.jpg',
    'earth_normalmap.jpg'
  ]);

  return (
    <mesh ref={mesh} position={[0,0,0]}>
      <sphereBufferGeometry args={[1, 100, 100]} />
      <meshStandardMaterial
        displacementScale={0.01}
        normalScale={0.7}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}/>
    </mesh>
  )
}

export default Earth;
