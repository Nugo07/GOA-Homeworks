// 1)
console.log(5>2 && 10>2)
console.log(10<20 && 5>6)
console.log(100<15 && 450<100)
console.log(5>2 || 10>2)
console.log(10<2 || 5>1)
console.log(10<15 || 45<100)

// 2)

let age = Number('10')
let name1 = String(12)
let kg = String(prompt('Enter Your Weight: ')) 
console.log(typeof age)
console.log(typeof name1)
console.log(typeof kg)

// 3_
const MobilePhone = {
    brand : "Samsung",
    model: "S24 Ultra",
    color: "Black",
    battery: 100,
    makeCall: function (number) {
      console.log("Calling " + number);
      
    
    },
    
  };
  
  MobilePhone.makeCall("1234567890");
  console.log("brand:" + MobilePhone.brand)
  

