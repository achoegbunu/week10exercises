// create three objects with four properties(one must be an image path) using object literal notation
var soccerTeam = 
{
	name: "arsenal",
	division: "premiership",
	worth: 950,
	image: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fpaininthearsenal.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F03%2F52523055-fussball-cl-0304-arsenal-london-celta-de-vigo.jpg.jpg&c=sc&w=850&h=560",
	personValue: function() {
		return this.worth * 90
	}
}


var rapper =
{
	name: "Jay-z",
	division: "rap",
	worth: 500,
	image: "https://a3-images.myspacecdn.com/images03/35/a03b92e0338b4b229ae5e3cb379a2907/600x600.jpg",
	personValue: function() {
		return this.worth * 90
	}
}


var politician = 
{
	name: "obama",
	division: "democrat",
	worth: 10,
	image: "https://obamascholars.oxy.edu/sites/default/files/images/hero-banners/obama.jpg",
	personValue: function() {
		return this.worth * 90
	}
}

console.log(soccerTeam, rapper, politician);

// Create the same three objects, with the same four properties, using constructor notation

function person(name, division, worth, image) {
	this.name = name;
	this.division = division;
	this.worth = worth;
	this.image = image;
}
var myTeam = new person("arsenal", "premiership", "950", "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fpaininthearsenal.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F03%2F52523055-fussball-cl-0304-arsenal-london-celta-de-vigo.jpg.jpg&c=sc&w=850&h=560");
var myRapper = new person("Jay-z", "rap", "500", "https://a3-images.myspacecdn.com/images03/35/a03b92e0338b4b229ae5e3cb379a2907/600x600.jpg");
var coolPolitician = new person("obama", "democrat", "10", "https://obamascholars.oxy.edu/sites/default/files/images/hero-banners/obama.jpg");
console.log(myTeam, myRapper, coolPolitician);

//  Add to a method to each literal object. The method should tmultiply two numbers and return the product


console.log(soccerTeam.personValue(), rapper.personValue(), politician.personValue());

// Add the same method to your constructor function

function person(name, division, worth, image, personValue) {
	this.name = name;
	this.division = division;
	this.worth = worth;
	this.image = image;
	this.personValue = function() {
		return this.worth * 90
	}
}
var myTeam = new person("arsenal", "premiership", "950", "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fpaininthearsenal.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F03%2F52523055-fussball-cl-0304-arsenal-london-celta-de-vigo.jpg.jpg&c=sc&w=850&h=560", 85500);
var myRapper = new person("Jay-z", "rap", "500", "https://a3-images.myspacecdn.com/images03/35/a03b92e0338b4b229ae5e3cb379a2907/600x600.jpg", 45000);
var coolPolitician = new person("obama", "democrat", "10", "https://obamascholars.oxy.edu/sites/default/files/images/hero-banners/obama.jpg", 900);

// Add each object created by the constructor function to an array

var personArray = [myTeam, myRapper, coolPolitician];
// loop through the array of objects

for (var i = 0; i < personArray.length; i++) {

	// Create an element for each property so you have a place to display each piece of information.
	var newItem = document.createElement("div");
	var newDiv = document.createElement("div");
	var newImage = document.createElement("img");
	var newH1 = document.createElement("h1");
	var newH2 = document.createElement("h2");
	var newP = document.createElement("p");
	var newSpan = document.createElement("span");
	console.log(newDiv, newImage, newH1, newH2, newP, newSpan);

	//  create individual text nodes for each piece of information

	newH1Text = document.createTextNode(personArray[i].name);
	newH2Text = document.createTextNode(personArray[i].division);
	newPText = document.createTextNode(personArray[i].worth);
	newSpanText = document.createTextNode(personArray[i].personValue());

	// Add these text nodes to the elements you created.

	newH1.appendChild(newH1Text);
	newH2.appendChild(newH2Text);
	newP.appendChild(newPText);
	newSpan.appendChild(newSpanText);

	// update the source and alt attributes of the image

	newImage.src = personArray[i].image;
	newImage.alt = personArray[i].name + "" + personArray[i].division;
	newDiv.appendChild(newImage);
	newDiv.appendChild(newH1);
	newDiv.appendChild(newH2);
	newDiv.appendChild(newP);
	newDiv.appendChild(newSpan);
	// add new div to new item
	newItem.appendChild(newDiv);
	// add new item to element with id = display
	document.getElementById("display").appendChild(newDiv);
}


