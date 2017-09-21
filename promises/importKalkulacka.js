var projekt = require('./kalkulacka')

var byty = []
var heidukova = new projekt.kalkulacka(null, 'heidukova')
console.log(heidukova.__proto__)
console.log(Object.entries(heidukova))


var wilsonka = new projekt.kalkulacka(480,'wilsonka')
var kozia = new projekt.kalkulacka(350, 'kozia')

byty.push(heidukova, wilsonka, kozia)
byty.forEach((byt, i) => {
    console.log('byt index:', i )
    byt.percenDni(75)
    byt.cistyziskMesiac()
    byt.cistyziskMesiac()
    byt.cistyziskMesiac()
    byt.cistyziskMesiac()
    byt.percenDni(85)
    byt.cistyziskMesiac()
    byt.cistyziskMesiac()
    byt.cistyziskMesiac()
    byt.percenDni(25)
    byt.cistyziskMesiac()
    byt.cistyziskMesiac()


})

