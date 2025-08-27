let n=88;
let p=n.toString();
let p1=p[0];
let p2=p[1];
let p3=p[2];
let p4=p[3];
let c;
if(9<n&&n<100){
  c=Number(p1)+Number(p2)
}else if(99<n&&n<1000){
   c=Number(p1)+Number(p2)+Number(p3)
}else if(999<n&&n<10000){
   c=Number(p1)+Number(p2)+Number(p3)+Number(p4)
}else if(0==n){
  c='Bu son: '+n
} else if(0<n&&n<10){
  c='Bu son 1 xonali son: '+n
} else if(n<0){
  c='Bu son Manfiy son: '+n
}

console.log(c)