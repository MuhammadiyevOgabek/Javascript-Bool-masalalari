let a=40;
let b=-20;
let c=23;
if(a>b&&b>c){
  console.log(b);
} else if(a<b&&b<c){
  console.log(b)
} else if(a>b&a<c){
  console.log(a)
}else if(a<b&a>c){
  console.log(a)
}else if(c>b&a>c){
  console.log(c)
}else if(c<b&a<c){
  console.log(c)
}