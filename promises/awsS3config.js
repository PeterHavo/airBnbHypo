credentials={
    "accessKeyId" : "AKIAIBUN2A245P72ZKAA",
    "secretAccessKey" :"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",
    "proxy":"localhost"
   }

   let testObj = {
    test : "name"
}

   module.exports.foo = testObj
   

   
  console.log('name of object is : ', testObj.test)
   console.log(Object.keys(testObj))
   console.log(testObj.prototype)