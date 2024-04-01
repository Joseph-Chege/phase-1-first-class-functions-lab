// Code your solution in this 

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    return [...drivers].slice(0, 2);

}

function returnLastTwoDrivers(){
    return [...drivers].slice(2);

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(multiplier){

    return function fareMultiplier(fare){
        return (fare * multiplier);
    } 
}
  

 const fareDoubler = createFareMultiplier(2);
 const fareTripler = createFareMultiplier(3);
    



function selectDifferentDrivers(drivers, selectingDrivers){
    if (selectingDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);

    }else if (selectingDrivers === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);

    }
}
