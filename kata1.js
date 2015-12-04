var newStr = "";

function splitter(str) {
str = str.split(""); 
  for(var i = 0; i < str.length; i++) {
    if(i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else
      newStr += str[i].toLowerCase();
  }
  return newStr;  
}

function splitter2(str) {
  str = str.split(""); 
  for(var i = 0; i < str.length; i++) {
    i % 2 === 0 ? newStr += str[i].toUpperCase() : newStr += str[i].toLowerCase(); 
  }
  return newStr;
}