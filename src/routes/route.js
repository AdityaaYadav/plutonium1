const express = require("express");
const router = express.Router();

router.get("/students/:name", function (req, res) {
  let studentName = req.params.name;
  console.log(studentName);
  res.send(studentName);
});

router.get("/random", function (req, res) {
  res.send("hi there");
});

router.get("/test-api", function (req, res) {
  res.send("hi FunctionUp");
});

router.get("/test-api-2", function (req, res) {
  res.send("hi FunctionUp. This is another cool API");
});

router.get("/test-api-3", function (req, res) {
  res.send(
    "hi FunctionUp. This is another cool API. And NOw i am bored of creating API's "
  );
});

router.get("/test-api-4", function (req, res) {
  res.send(
    "hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s "
  );
});

router.get("/test-api-5", function (req, res) {
  res.send(
    "hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s "
  );
});

router.get("/test-api-6", function (req, res) {
  res.send({ a: 56, b: 45 });
});

router.post("/test-post", function (req, res) {
  res.send([23, 45, 6]);
});

router.post("/test-post-2", function (req, res) {
  res.send({ msg: "hi", status: true });
});

router.post("/test-post-3", function (req, res) {
  // let id = req.body.user
  // let pwd= req.body.password

  // console.log( id , pwd)

  console.log(req.body);

  res.send({ msg: "hi", status: true });
});

router.post("/test-post-4", function (req, res) {
  let arr = [12, "functionup"];
  let ele = req.body.element;
  arr.push(ele);
  res.send({ msg: arr, status: true });
});

router.post("/test-post-5", function (req, res) {
  let arr = [
    { name: "aditya ", dob: "25-08-99", gender: "male", city: "Akola" },
    ["swimming"],
  ];
  //  let arr2 = [{sport:"swimming"}]
  let ele = req.body.element;
  arr.push(ele);
  res.send({ msg: arr });
});

router.post("/test-post-6", function (req, res) {
  let person = [
    { name: "Gohan ", age: 10, votingStatus: false },
    { name: "Goku", age: 30, votingStatus: true },
    { name: "Veheta", age: 35, votingStatus: true },
    { name: "Trunks", age: 25, votingStatus: true },
    { name: "Broly", age: 28, votingStatus: true },
  ];
  let ele = req.body.element;
  person.push(ele);
  res.send({ msg: person });
});
module.exports = router;
