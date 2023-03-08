// const getPosition = (latitude, longitude) => ({
//     latitude: latitude,
//     longitude: longitude,
//   }); -> sem object property shorthand
  
//   console.log(getPosition(-19.8157, -43.9542));

  const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
  }); // -> com object property shorthand (mesmo resultado)

  console.log(getPosition(-19.8157, -43.9542));