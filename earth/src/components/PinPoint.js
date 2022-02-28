import React, { useRef } from 'react';
import { cartesianToSphere } from '../utils/coordinateUtils';

const PinPoint = ({cord}) => {
  const mesh = useRef(null);
  return (
    <mesh ref={mesh} position={cartesianToSphere(cord[0],cord[1])}>
      <sphereBufferGeometry args={[0.007, 15, 15]} />
      <meshStandardMaterial color={'black'}/>
    </mesh>
  )
}

export default PinPoint;
