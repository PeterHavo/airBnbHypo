







//pocet dni rok
var dniRok = 365

// pocet dni za mesiac
var dniMesiac = 365/12

//dan
var dan = 20

//naklady hypo mesiac plus fond plus plyn elektrina

var naklady = 840

// nasobit pocet dni ratiom obsadenych dni za mesiac
function ratioDniMesiac (ratio, dnimesiac)  {
    
    return Promise.resolve(Math.floor(dnimesiac * ratio/100))
       
       
   
}



//nasobit cenu za noc ratiom ceny za 1,2,3,4 osoby
var ratioCena = [[0.80, 60], [0.15, 72], [0.5, 80]]
function ratioZiskByt  (ratiodnimesiac)  {
    var ratioCena = [[0.80, 60], [0.15, 72], [0.5, 80]]
    var hrubyZisk = 0
    for(var i = 0 ; i < ratioCena.length; i++){
    hrubyZisk += Math.floor((ratiodnimesiac * ratioCena[i][0])) * ratioCena[i][1]
    }
    return  Promise.resolve(hrubyZisk)
}

//zisk minus dan
var cistyZisk = (sdanouZisk) =>{
   
     return    Promise.resolve(sdanouZisk * 0.8)
    
}

var ZiskNaklady = (naklady, zdanenyZisk ) => {

    console.log(`zdnaneny zisk ${zdanenyZisk} naklady:${naklady}`)
    console.log(`cisty zisk minus naklady `, zdanenyZisk-naklady)
    return {naklady, zdanenyZisk}
    
   
}
//hruby zisk

// pozriet preco bind null prvy argument https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind 
// var vysledok = ratioDniMesiac(50, dniMesiac)
//     .then(ratioZiskByt)
//     .then(cistyZisk)
//     .then(ZiskNaklady.bind(null, naklady))
//     .then(val => (val))
//     .catch(err => console.log)


console.log(ratioDniMesiac(70, dniMesiac)
.then(ratioZiskByt)
.then(cistyZisk)
.then(ZiskNaklady.bind(null, naklady))
.then(val => console.log(val))
)


var allpromises = Promise.all([ratioDniMesiac(70, dniMesiac)])
console.log(allpromises)





