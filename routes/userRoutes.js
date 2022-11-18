import express from "express";
const router = express.Router();
import fs from "fs";

const users = [
  {
    Name: "Serine",
    Surname: "Sardaryan",
    AccountNumber: "123",
    Balance: 0,
  },
];

router.get("/", (req, res) => {
  // res.send(users);

  fs.readFileSync("../text.txt", "utf8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

router.post("/", (req, res) => {
  // res.send(users);
  console.log("req body  :", req.body);

  fs.mkdirSync("./file", () => {});
  console.log("sarqeci papken");

  fs.readFile("./users2.txt", "utf8", (err, data1) => {
    let data = JSON.stringify(req.body);
    fs.writeFileSync("./file/text.txt", `sa nor text e ${data}`, (error) => {
      error ? console.log(error) : null;
    });
    console.log("sarqeci filen u text@ avelacreci mej@");
    // if (err) throw err;
    res.send(data);
  });
});

export default router;
