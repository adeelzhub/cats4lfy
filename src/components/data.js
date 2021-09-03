const cats = [
  ["Oliver", 100],
  ["Leo", 125],
  ["Milo", 135],
  ["Charlie", 145],
  ["Simba", 150],
  ["Max", 165],
  ["Jack", 170],
  ["Loki", 180],
  ["Tiger", 190],
  ["Jasper", 195],
  ["Ollie", 210],
  ["Oscar", 225],
];

class Data {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    // this.url = "";
  }
}

// const catUrl = async () => {
//   try {
//     const response = await fetch("https://api.thecatapi.com/v1/images/search");
//     if (response.status !== 200) {
//       throw new Error(`${response.status} Error`);
//     }
//     const data = await response.json();
//     const [cat] = data;
//     const url = cat.url;
//     return url;
//   } catch (error) {
//     console.log(error);
//   }
// };

const catsData = cats.map((el, i) => new Data(i, el[0], el[1]));

export default catsData;
