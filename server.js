const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)

    let result = num1 + num2;

    res.send(`Calculation is: ${result}`)
})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", (req, res) => {
    let weight = parseFloat(req.body.weight)

    let height = parseFloat(req.body.Height)
    let BMI = parseFloat(weight / (height * height));
    console.log(BMI)
    res.send("Your BMI is " + BMI)
})

app.listen(3000, () => {
    console.log("Server Started on 3000");
})