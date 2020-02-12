var startDate, endDate, meteors;
var x,y,z;
var dateArray, dateArraySize;
var meteorArray, meteorArraySize;
var epochApproach;
var epochApproachArray = [];
var sortedEpochApproachArray = [];
var sortedMeteorArray = [];

startDate = '2020-01-01';
endDate = '2020-01-07';
function setup(){
	createCanvas(windowWidth,windowHeight);
	loadJSON('https://api.nasa.gov/neo/rest/v1/feed?start_date='+startDate+'&end_date='+endDate+'&api_key=XCwfaiBZBeLcUErNU0XHGRUyc7mmqu1LhzIxNt0Q',visualization)
	textSize(32);
}

function visualization(data){
	//background(222);
	meteors = data;

	dateArray = Object.values(meteors["near_earth_objects"]);//Turning the dates from an object into an array
	dateArraySize = dateArray.length;//number of dates

	console.log("There are " + dateArraySize + " dates");


	meteorArray = meteors["near_earth_objects"][startDate];
	meteorArraySize = meteorArray.length;//number of meteors

	console.log("There are " + meteorArraySize + " meteors");
	
	
	for(i = 0; i < meteorArraySize; i++){
		epochApproach = meteors["near_earth_objects"][startDate][i]["close_approach_data"]["0"]["epoch_date_close_approach"];
		epochApproachArray.push(epochApproach);
	}//puts all epoch aproach dates into an array that we can sort

	console.log(epochApproachArray.length);
	console.log(epochApproachArray[0]);//used to see what the first epoch approach date on the list is
	sortedEpochApproachArray = epochApproachArray;
	sortedEpochApproachArray.sort();//for some reason, this sorts both sortedEpochApproachArray and epochApproachArray, so epochApproachArray can no longer be used for testing
	
	console.log(epochApproachArray[0]);
	console.log(sortedEpochApproachArray[0]);//just comparing the two values now

	for(i = 0; i < meteorArraySize; i ++){//iterates through the sortedEpochApproachArray
		for(j=0; j < meteorArraySize; j++){//iterates through the actual API Data
			if(sortedEpochApproachArray[i] == meteors["near_earth_objects"][startDate][j]["close_approach_data"]["0"]["epoch_date_close_approach"]){//compares the epoch approach date from the sorted array with the one from the API
				sortedMeteorArray.push(meteors["near_earth_objects"][startDate][j])//if they are equal, pushes that API object into a new array
				console.log("equal");
				
			}
			else{
				console.log("not equal");//and uf they're not, nothing happens
			}

		}

	}
	console.log(sortedMeteorArray);

	//console.log(epochApproachArray);
	//console.log(array.sort());
	//json['first']['second']['third']['comment']
	//have them travel in an arc with radius from earth center
}

function draw(){
	background(100);
	
	
}