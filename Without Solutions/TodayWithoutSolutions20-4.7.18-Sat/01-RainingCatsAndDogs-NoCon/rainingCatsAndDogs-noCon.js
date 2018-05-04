var dogs = {
  raining:true,
  noise: "woof",
  makeNoise: function() {
    if(this.raining){
      console.log(this.noise);
    }
  }
};

var cats= {
  raining:false,
  noise: "meow",
  makeNoise: function() {
    if(this.raining){
      console.log(this.noise);
    }
  }
};

dogs.makeNoise();//this makes noise in console
cats.raining =true;
cats.makeNoise(); //this makes noise in console // but raining has to be set to true 
massHysteria(dogs, cats);


//Bonus//----------

function massHysteria(dogs, cats ){
if (dogs.raining === true && cats.raining === true ){
  console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!')
}
}