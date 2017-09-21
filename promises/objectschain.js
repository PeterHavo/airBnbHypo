var Kitten = function() {
    this.name = 'Garfield';
    this.color = 'brown';
    this.gender = 'male';
  };
  
  Kitten.prototype.setName = function(name) {
    this.name = name;
    return this
  };
  
  Kitten.prototype.setColor = function(color) {
    this.color = color;
    return this
  };
  
  Kitten.prototype.setGender = function(gender) {
    this.gender = gender;
    return this
  };
  
  Kitten.prototype.save = function() {
    console.log(
      'saving ' + this.name + ', the ' +
      this.color + ' ' + this.gender + ' kitten...'
    );
  
    // save to database here...
    return this
  };

  var bob = new Kitten();

bob.setName('Bob');
bob.setColor('black');
bob.setGender('male');

bob.save();
console.log('Kitten has own property', Kitten.prototype)
console.log('Object keys are ', Object.keys(bob))
console.log('boob has own property', bob.hasOwnProperty('name'))
console.log('bob has this proto', bob.__proto__ === Kitten.prototype)
var tmp = bob.setName('fero')

console.log(tmp)
bob.hasOwnProperty('setName')
//-----------------------------------------------------------------FLAT---------------------

let flats2Buy = []

function Flat (area, location, monthlycost){
    this.area = area
    this.location = location
    this.monthlycost = monthlycost
}

Flat.prototype.calc = function(x){
    this.monthlycost += x
    return this
}

Flat.prototype.info = function (){
    console.log(`flat area is : ${this.area}, in location: ${this.location} with cost ${this.monthlycost}`)
}

let wilsonka = new Flat (50, "Ba1", 400);
let heidukova = new Flat (50, "Ba1", 280);





wilsonka.calc(100).calc(200)

wilsonka.info();

function rating (){
   console.log(this.location)
   if (this.location == "Ba1"){
       console.log('ratting 1')
   }
}

flats2Buy.push(wilsonka, heidukova)
flats2Buy.forEach((flat)=>{
    rating.call(flat)
})




// rating.call(wilsonka)
// let rattting = rating.bind(wilsonka)
// rattting()
// rating.bind(wilsonka)()

var flatPromise = new Promise (function(res, rej){
    flats2Buy.push(wilsonka, heidukova)
    res(flats2Buy)
})

flatPromise.then((objects) => {
    objects.forEach((flat, index)=>{
       rating.call(flat)
    })
})
