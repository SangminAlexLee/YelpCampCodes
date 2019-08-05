var express = require("express");
var app = express();
var bodyParser =  require("body-parser"); 


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var campgrounds = [
	{name: "Salmon Creek", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732b7edc9644cc5a_340.jpg"},
	{name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732b7edc9644cc5a_340.jpg"},
	{name: "Mountain Goat's ", image: "https://pixabay.com/get/54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c732b7edc9644cc5a_340.jpg"},
	{name: "Salmon Creek", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732b7edc9644cc5a_340.jpg"},
	{name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732b7edc9644cc5a_340.jpg"},
	{name: "Mountain Goat's ", image: "https://pixabay.com/get/54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c732b7edc9644cc5a_340.jpg"}

];

app.get("/", function(req, res){
	// res.send("this will be the landing page soon!");
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campground", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	// get data from form and add to campgrounds array
	// redirect back to campground page
	// res.send("You hit the post rout");
	// res.render("campground");
	
	console.log("Post campgrounds called");
	
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){ 
	// get data from form and add to campgrounds array
	// redirect back to campground page
	// res.send("You hit the post rout");
	console.log("news ejs will be called");
	res.render("news.ejs");
});

app.listen(3000, function(){
	console.log("The YelpCamp Server Has Started");
});