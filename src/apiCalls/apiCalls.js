export const fetchHouses = async () => {
  const url = 'http://localhost:3001/api/v1/houses';
  const response = await fetch(url);
  const houseData = await response.json();

  return houseData; 
};

// export const fetchThen = () => {
//   fetch('http://localhost:3001/api/v1/houses')
//     .then(houseData => houseData.json())
//     .then(houseData => console.log(houseData));
// };