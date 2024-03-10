// const data = `{
//         "ticker": {
//         "base": "BTC",
//         "target": "IDR",
//         "price":"134124252.000000000",
//         "volume": "28.00000000",
//         "change": "-340000.00000000"
//          },
//         "timestamp": 1623360000,
//         "success": true,
//         "error": ""
// }`;
// const req = new XMLHttpRequest();
// let data;
// req.onload = function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// };

// req.oneerror = function () {
//   console.log("Error", this);
// };

// req.open("GET", "https://swapi.dev/api/people/1", true);
// myReq.setRequestHeader("Accept", "application/json");
// req.send();

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that re");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json", data);
//     return fetch("https://swapi.dev/api/people/2");
//   })
//   .then((res) => {
//     console.log("request 2");
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that re");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// const loadPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/peoplejkdge/1");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/peoplejkdge/2");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (err) {
//     console.log("error", err);
//   }
// };

// loadPeople();

// axios
//   .get("https://swapi.dev/api/peopleqwqqw/1")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     alert(err);
//     console.log(err);
//   });

const getPeople = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (erro) {
    console.log(error);
    console.log(error.message);
    console.log(error.response.status);
    console.log(error.response.data);
  }
};
