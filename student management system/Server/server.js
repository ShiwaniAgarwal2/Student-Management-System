const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();
const json2csv = require("json2csv").parse;
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

(async () => {
  try {
    await client.connect();
    db = client.db(process.env.DB_DATABASE);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
})();

router.use(express.json());

router.post("/addStudent", async (req, res) => {
  const { rollNo, name, age, marks, image_url } = req.body;

  try {
    const collection = db.collection(process.env.DB_COLLECTION);
    const result = await collection.insertOne({ roll_no: rollNo, name, age, marks, image_url });
    res.send("Student added successfully");
  } catch (err) {
    console.error("Error adding student:", err);
    res.status(500).send("Error adding student");
  }
});

router.get("/studdetails", async (req, res) => {
  try {
    const collection = db.collection(process.env.DB_COLLECTION);
    const students = await collection.find().toArray();
    res.json(students);
  } catch (err) {
    console.error("Error getting students:", err);
    res.status(500).send("Error getting students");
  }
});

router.get("/student/:rollNo", async (req, res) => {
  const { rollNo } = req.params;

  try {
    const collection = db.collection(process.env.DB_COLLECTION);
    const student = await collection.findOne({ roll_no: rollNo });
    if (!student) {
      res.status(404).send("Student not found");
      return;
    }
    res.json(student);
  } catch (err) {
    console.error("Error getting student details:", err);
    res.status(500).send("Error getting student details");
  }
});

router.put("/editStudent/:rollNo", async (req, res) => {
  const { rollNo } = req.params;
  const { name, age, marks, image_url } = req.body;

  try {
    const collection = db.collection(process.env.DB_COLLECTION);
    const result = await collection.updateOne(
      { roll_no: rollNo },
      { $set: { name, age, marks, image_url } }
    );
    res.send("Student details updated successfully");
  } catch (err) {
    console.error("Error editing student details:", err);
    res.status(500).send("Error editing student details");
  }
});

router.delete("/deleteStudent/:rollNo", async (req, res) => {
  const { rollNo } = req.params;

  try {
    const collection = db.collection(process.env.DB_COLLECTION);
    const result = await collection.deleteOne({ roll_no: rollNo });
    res.send("Student deleted successfully");
  } catch (err) {
    console.error("Error deleting student:", err);
    res.status(500).send("Error deleting student");
  }
});

router.get("/downloadAllStudents", async (req, res) => {
  try {
    const collection = db.collection(process.env.DB_COLLECTION);
    const students = await collection.find().toArray();

    const csvData = json2csv(students, {
      fields: ["name", "roll_no", "age", "marks", "image_url"],
    });

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=all_students.csv"
    );

    res.send(csvData);
  } catch (error) {
    console.error("Error generating CSV file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router; // Export the router
