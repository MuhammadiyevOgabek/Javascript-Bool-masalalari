let a=12;
let b=5;
let c=7;
let j;
if(a<b&&b<c || a<c&&b<c ){
  j=c;
}else if(a<c&&c<b || a<b&&c<b){
  j=b;
}else if(b<c&&c<a ||b<a&&c<a){
  j=a;
}

console.log(j)