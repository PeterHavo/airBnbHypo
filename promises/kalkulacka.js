var test = () => {
    return new Promise ((res, rej) => {
        res(4)
    })
} 

var tempo = 0
var nasobenie = (val) => {
    
    return val * 8;
}

function testPromisesetter (callback){
  
   
    var myPromise = Promise.resolve(4)
    myPromise.then(callback)

}

function callback (val) {
    this.tempo = val
    console.log(this.tempo)
}

// console.log(testPromisesetter( callback))


//////////////////////////////////////////////////////// setup 

module.exports = {
    kalkulacka:kalkulacka
}

// pomocna fukcia 
function ZiskMinusNaklady  ( zdanenyZisk , callback)  {
    
        console.log(`zdaneny zisk: ${zdanenyZisk} naklady:${this.naklady}`)
        console.log(`cisty zisk minus naklady: `, zdanenyZisk-this.naklady)
        this.mesiacZisk += zdanenyZisk-this.naklady;

        console.log(`zdaneny akumulovany cisty zisk: ${this.mesiacZisk} pre ${this.name}`)
        return zdanenyZisk-this.naklady;
        
        
       
    }


// pomocna fukcia 

function zdanenyZisk (val) {
    var tmpTax = 100 - this.dan
    return  val * tmpTax/100
}

//construktor
 function kalkulacka ( naklady, name ){
    this.dniRok = 365,
    this.name = name,
    this.dniMesiac = 0 
    this.dan = 20,
    this.naklady = naklady || 700
    this.ratioCena =  [[0.8, 70], [0.05, 75], [0.15, 90]]
    this.mesiacZisk = 0
    

}
    kalkulacka.prototype.cistyziskMesiac = function(){

        
        var vypocetzisku = new Promise((res, rej) => {
            console.log('obsadenost dni v mesiaci priemernom: ' , this.dniMesiac)
            res(this.dniMesiac)
        })
        vypocetzisku
        .then((pocetdniVmesiaci) => {
           
            var hrubyZisk = 0
            for(var i = 0 ; i < this.ratioCena.length; i++){
            hrubyZisk += Math.floor((pocetdniVmesiaci * this.ratioCena[i][0])) * this.ratioCena[i][1]
            }
            return  Promise.resolve(hrubyZisk)  
        })
        .then(zdanenyZisk.bind(this))
        .then(ZiskMinusNaklady.bind(this))
    }
    
    kalkulacka.prototype.percenDni = function (ratio) {
        var vyuziteDniRok = Math.floor(365 * (ratio/100))
        this.dniMesiac = Math.floor(+this.dniRok/12 * (ratio/100))
        console.log(`pocet dni vyzuzitych pocas roka ${ vyuziteDniRok}`)
        
        
    }

    kalkulacka.prototype.readInfo = function() {
        console.log(`Pocet obsadenych dni na mesiac: ${this.dniMesiac}, dan: ${this.dan}, naklady: ${this.naklady} , ratio cena: ${JSON.stringify(this.ratioCena)} zisk: ${this.mesiacZisk}`)
    }
    kalkulacka.prototype.vymazZisk = function (){
        this.mesiacZisk = 0
    }







   