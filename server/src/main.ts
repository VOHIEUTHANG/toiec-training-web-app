import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("Nodejs + Typescript ");
});

app.listen(3000, () => {
  console.log(`Server is listening on URL: http://localhost:${3000}`);
});

const sayHi = (name: string) => console.log(`HI ${name}, nice to meet you !`);
sayHi("Devostack 25/12/2000");
