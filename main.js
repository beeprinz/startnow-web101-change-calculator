// Write your JavaScript here
// function calculateWeight(weight, planetName) {
//     for(var i = 0; i < planets.length; i++) {
//      const gravity = planets[i][1];
//       currentPlanet = planets[i][0]; 
//    if(currentPlanet === planetName) { 
//      return (gravity * weight);
//    } 
//    }
//    }
   
   
//    function handleClickEvent() {
//    let userWeight = document.getElementById("user-weight").value;
//    let sel = document.getElementById("planets");
//    var planetName = sel.options[sel.selectedIndex].value;
//    let result = calculateWeight(userWeight, planetName);
//    document.getElementById("output").innerHTML="If you were on " + planetName + ", you would weigh " + result + "lbs!";
//    }

  // function coins(amount) {
    //     return [25, 10, 5, 1].map(function (coin) {
    //         return [~~ (amount / coin), amount %= coin][0];
    //     });
    // }

    //how to plug in calculate change function into exactChange function
    //const change = exactChange(calculate Change(10,5));

    //or const calculateChange = calculateChange(10,5);
    //const change = exactChange(caclulatedChange);
   

//    function calculateChange(customerPayment,salePrice) { 
//        var resultChangeDue = (customerPayment - salePrice).toFixed(2) * 100;
//         //return changeTotal; //should i put anything for return?
//    }

//    function handleClickEvent(){
//     var salePrice = document.getElementById("amount-due").value;
//     var customerPayment = document.getElementById("amount-received").value;
//     var changeDue = calculateChange(customerPayment,salePrice);
//     console.log(changeDue);

//     function exactChange(changeDue){ //Do I use changeDue or changeTotal variable?
//         return [100, 25, 10 , 5, 1].map(function (exactChangeDue){
//           return [Math.floor(changeDue / exactChangeDue), 
//             changeDue %= exactChangeDue][0];
//         });
//       }    
//     // make a variable here equal to the calculate change function 
//    }
 
function calculateChange(amountReceived, amountDue) {
    let res = (amountReceived - amountDue)* 100;
    console.log(res);
    return Math.round(res);
}

function exactChange(loggedAmount) {
    var res = {};
    [100, 25, 10, 5, 1].forEach(function (coin) {
        res[coin] = Math.floor(loggedAmount / coin);
        loggedAmount = loggedAmount % coin;
    });
    return res;
}
function handleClickEvent(e) {
    let amountDue = document.getElementById("amount-due").value;
    let amountReceived = document.getElementById("amount-received").value;
    let change = calculateChange(amountReceived, amountDue); 
    console.log(change);
    let result = exactChange(change);
    console.log(result);
    document.getElementById("dollars-output").innerHTML=result["100"];
    document.getElementById("quarters-output").innerHTML=result["25"];
    document.getElementById("dimes-output").innerHTML=result["10"];
    document.getElementById("nickels-output").innerHTML=result["5"];
    document.getElementById("pennies-output").innerHTML=result["1"];

    return false;
}

    
   

