// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    
    const distanceInBlocks = Math.abs(pickupLocation - 42);
    return distanceInBlocks;
  }
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation); 
    const feetPerBlock = 264; 
    const distanceInFeet = blocks * feetPerBlock; 
    return distanceInFeet;
  }
  function distanceTravelledInFeet(pickupLocation, destinationLocation) { 

    const distanceInBlocks = Math.abs(pickupLocation - destinationLocation);
    const feetPerBlock = 264; 
    const distanceInFeet = distanceInBlocks * feetPerBlock; 
    return distanceInFeet;
  }
  function calculatesFarePrice(startingBlock, endingBlock) {
    const distanceInFeet = Math.abs(endingBlock - startingBlock) * 264;
  

    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; 
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25;
    } else if (distanceInFeet >= 2500) {
      return 'cannot travel that far'; 
    }
  }