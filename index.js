function scuberGreetingForFeet(someValue){
  // Gives customer free sample if ride is less than or equal to 400 feet;
  if (someValue <= 400){
    let messageforFunction = 'This one is on me!';
    return messageforFunction;
  }

  //charges 20 dollars for a distance between 400 and 2000 feet
  else if (someValue >400 && someValue <=2000){
    let messageforFunction = 'That will be twenty bucks.';
    return messageforFunction;
  }

  //charges 30 dollars for a distance over 2000 feet
  else if (2000 < someValue && someValue < 2500){
    let messageforFunction = 'I will gladly take your thirty bucks.';
    return messageforFunction;
  }

  //does not allow rides over 2500 feet
  else if (2500 < someValue){
    let messageforFunction = 'No can do.';
    return messageforFunction;
  }
  return messageforFunction;
}

function ternaryCheckCity(city){
  // returns "ok sounds good" if NYC and no go for anyother destination
  if (city == "NYC")
  {
    let message = 'Ok, sounds good.';
    return message;
  }
  let message = 'No go.';
  return message;
}

function switchOnCharmFromTip(amount){

  switch (amount){
    case 'generous' :
      return 'Thank you so much.';
      break;
    case 'not as generous' :
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      
  }
}
 