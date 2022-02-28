const degrees_to_radians = (deg) => {
  return deg * Math.PI/180;
}

const cartesianToSphere = (long, lat) => {
  let x = Math.cos(degrees_to_radians(lat)) * Math.cos(degrees_to_radians(long));
  let y = Math.sin(degrees_to_radians(lat)) * Math.sin(degrees_to_radians(long));
  let z = Math.sin(degrees_to_radians(lat)) * Math.cos(degrees_to_radians(long));
  return [x, y, z];
}

export {
  cartesianToSphere,
};
