function actuate(num) {

  if(num%1===0){
    console.log('?');
    var ret = num.toString();
    ret+='.00'
  }
  else{
    console.log(num);
    return '$'+num.toString()
  }
  return num
}
console.log(actuate(.45));
