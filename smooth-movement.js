/*

SmoothMovement.js

Facilitates smooth movement effects

Created by Kate Morley - http://code.iamkate.com/ - and released under the terms
of the CC0 1.0 Universal legal code:

http://creativecommons.org/publicdomain/zero/1.0/legalcode

*/

function SmoothMovement(_1,_2){
this.position=(_1==undefined?0:_1);
this.target=(_2==undefined?this.position:_2);
this.velocity=0;
this.animationInterval=null;
};
SmoothMovement.prototype.update=function(){
if(this.velocity<0){
if(this.target>this.position-this.velocity*(this.velocity-1)/2){
this.velocity++;
}else{
if(this.target<=this.position-(this.velocity-1)*(this.velocity-2)/2){
this.velocity--;
}
}
}else{
if(this.target<this.position+this.velocity*(this.velocity+1)/2){
this.velocity--;
}else{
if(this.target>=this.position+(this.velocity+1)*(this.velocity+2)/2){
this.velocity++;
}
}
}
this.position+=this.velocity;
return this.position;
};
SmoothMovement.prototype.hasStopped=function(){
return (Math.abs(this.position==this.target)<3&&this.velocity==0);
};
SmoothMovement.prototype.animate=function(_3,_4,_5){
if(this.animationInterval){
window.clearInterval(this.animationInterval);
}
this.animationInterval=window.setInterval(this.createAnimationClosure(_4,_5),_3);
};
SmoothMovement.prototype.createAnimationClosure=function(_6,_7){
var _8=this;
return function(){
_8.update();
_6(_8.position,_8);
if(_8.hasStopped()){
window.clearInterval(_8.animationInterval);
_8.animationInterval=null;
if(_7){
_7(_8);
}
}
};
};
