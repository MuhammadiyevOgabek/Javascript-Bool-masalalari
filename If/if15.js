let n=-3;
let c;
if(9<n&&n<100){
  c=2;
} else if(99<n&&n<1000){
  c=3;
}else if(999<n&&n<10000){
  c=4;
}else if(9999<n&&n<100000){
  c=5;
} else if(0<n&&n<10){
   c=1;
} else if(0==n) {
  c='Bu son: '+n 
} else{
  c='bu son manfiy son: '+n
}

console.log(c)