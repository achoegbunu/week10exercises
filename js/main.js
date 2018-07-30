// create three objects with four properties(one must be an image path) using object literal notation
var soccerTeam = [
{
	name: "arsenal",
	division: "premiership",
	worth: "950M",
	img: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fpaininthearsenal.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F03%2F52523055-fussball-cl-0304-arsenal-london-celta-de-vigo.jpg.jpg&c=sc&w=850&h=560"
}
];

var rapper = [
{
	name: "Jay-z",
	division: "rap",
	worth: "500M",
	img: "https://a3-images.myspacecdn.com/images03/35/a03b92e0338b4b229ae5e3cb379a2907/600x600.jpg"
}
];

var politician = [
{
	name: "obama",
	division: "democrat",
	worth: "10M",
	img: "https://obamascholars.oxy.edu/sites/default/files/images/hero-banners/obama.jpg"
}
];
console.log(soccerTeam, rapper, politician);

function person(name, division, worth, img) {
	this.name = name;
	this.division = division;
	this.worth = worth;
	this.img = img;
}
var myTeam = new person("arsenal", "premiership", "950M", "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fpaininthearsenal.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F03%2F52523055-fussball-cl-0304-arsenal-london-celta-de-vigo.jpg.jpg&c=sc&w=850&h=560");
var myRapper = new person("Jay-z", "rap", "500M", "https://a3-images.myspacecdn.com/images03/35/a03b92e0338b4b229ae5e3cb379a2907/600x600.jpg");
var coolPolitician = new person("obama", "democrat", "10M", "https://obamascholars.oxy.edu/sites/default/files/images/hero-banners/obama.jpg");
console.log(myTeam, myRapper, coolPolitician);
//  Add to a method to each literal object. The method should tmultiply two numbers and return the product
var soccerTeam = 
{
	name: "arsenal",
	division: "premiership",
	worth: 950,
	img: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fpaininthearsenal.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F03%2F52523055-fussball-cl-0304-arsenal-london-celta-de-vigo.jpg.jpg&c=sc&w=850&h=560",
	personValue: function() {
		return this.worth * 90
	}
}

var rapper = 
{
	name: "Jay-z",
	division: "rap",
	worth: 500,
	img: "https://a3-images.myspacecdn.com/images03/35/a03b92e0338b4b229ae5e3cb379a2907/600x600.jpg",
	personValue: function() {
		return this.worth * 90
	}
}

var politician = 
{
	name: "obama",
	division: "democrat",
	worth: 10,
	img: "https://obamascholars.oxy.edu/sites/default/files/images/hero-banners/obama.jpg",
	personValue: function() {
		return this.worth * 90
	}
}

console.log(soccerTeam.personValue(), rapper.personValue(), politician.personValue());

