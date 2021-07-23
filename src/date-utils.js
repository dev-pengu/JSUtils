const dayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDayString = (date) => {
   return dayString[date.getDay()];
}

const getDayAbbr = (date) => {
   return dayString[date.getDay()].slice(0, 3);
}

const getMonthString = (date) => {
  return monthString[date.getMonth()];
}

const getMonthAbbr = (date) => {
 return monthString[date.getMonth()].slice(0, 3); 
}

export {
  getDayString,
  getDayAbbr,
  getMonthString,
  getMonthAbbr
}
