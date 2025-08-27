let c=58;
let x;
if(c<0){
  x='Freezing'
}else if(1<c&&c<10){
  x='Very Cold'
}else if(11<c&&c<20){
   x='Cold'
}else if(21<c&&c<30){
  x='Normal'
}else if(31<c&&c<40){
  x='Hot'
}else if(c>40){
  x='Very Hot'
}
console.log(x)