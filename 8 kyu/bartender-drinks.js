// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:
//
// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."
//
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

const getDrinkByProfession = param => {
  let text = param.toLowerCase();

  if (text === 'jabroni') {
    return 'Patron Tequila';
  } else if (text === 'school counselor') {
    return 'Anything with Alcohol';
  } else if (text === 'programmer') {
    return 'Hipster Craft Beer';
  } else if (text === 'biker gang memeber') {
    return 'Moonshine';
  } else if (text === 'politician') {
    return 'Your tax dollars';
  } else if (text === 'rapper') {
    return 'Cristal';
  } else {
    return 'Beer';
  }
};

////////// ANOTHER EXAMPLE \\\\\\\\\\
function getDrinkByProfession(param) {
  let map = new Map([
    ['jabroni', 'Patron Tequila'],
    ['school counselor', 'Anything with Alcohol'],
    ['programmer', 'Hipster Craft Beer'],
    ['bike gang member', 'Moonshine'],
    ['politician', 'Your tax dollars'],
    ['rapper', 'Cristal']
  ]);

  let normal = param.toLowerCase();
  return map.has(normal) ? map.get(normal) : 'Beer';
}

////////// ANOTHER EXAMPLE \\\\\\\\\\
function getDrinkByProfession(param) {
  param = param.toLowerCase();

  switch (param) {
    case 'jabroni':
      return 'Patron Tequila';
    case 'school counselor':
      return 'Anything with Alcohol';
    case 'programmer':
      return 'Hipster Craft Beer';
    case 'bike gang member':
      return 'Moonshine';
    case 'politician':
      return 'Your tax dollars';
    case 'rapper':
      return 'Cristal';
    default:
      return 'Beer';
  }
}
