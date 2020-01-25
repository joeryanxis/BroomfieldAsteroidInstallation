var startDate, endDate, meteors;

startDate = '2019-10-22';
endDate = '2019-10-28';
function setup(){
	createCanvas(windowWidth,windowHeight);
	loadJSON('https://api.nasa.gov/neo/rest/v1/feed?start_date='+startDate+'&end_date='+endDate+'&api_key=XCwfaiBZBeLcUErNU0XHGRUyc7mmqu1LhzIxNt0Q',visualization)
	textSize(32);
}

function visualization(data){
	//background(222);
	meteors = data
	console.log(meteors);
	console.log(meteors.near_earth_objects);
}

function draw(){
	background(100);
	
	
}