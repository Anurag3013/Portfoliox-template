const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

const {v4: uuidv4} = require('uuid');

// Routes
app.get("/", (req, res) => {
    res.render("home.ejs", { path: "/" });
});

app.get("/about", (req, res) => {
    res.render("about.ejs", { path: "/about" });
});

app.get("/projects", (req, res) => {
    res.render("projects.ejs", { path: "/projects" });
});

app.get("/skills", (req, res) => {
    res.render("skills.ejs", { path: "/skills" });
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs", { path: "/contact" });
});

app.get("/certificates", (req, res) => {
    res.render("certificates.ejs", { path: "/certificates" });
});

app.listen(port , ()=>{
    console.log("listening to port:8080");
});