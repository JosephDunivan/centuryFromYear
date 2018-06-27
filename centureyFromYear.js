function centuryFromYear(year) {
  if(year%100==0){
    var centuryFromYearResult = parseInt(year/100);}
  else{
    var centuryFromYearResult = parseInt(year/100)+1;}
  return (centuryFromYearResult);
};
