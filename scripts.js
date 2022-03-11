console.log(
  "javascript codes = & & var & & alert & & var array & & var object"
);
/*javascript codes = var= Examble
    var yhaya = "test";
    document.getElementById("id").innerHTML = الحاجه الي عايز اكتبها;
              Array Examble = var id10 = ["yahya", "25", "egypt"] ; alert(id10[0] + id10[1] + id10[2]
      
          Object  Examble = var rase = {first:"yahya", second:"mohamed" , third: "fatah" }; and 
            
                    object examble :
                    var rase = {};

    rase.first = 'yahya';
    console.log(rase.first)

if Examble  = 
var yahya = 10,
    mohamed = 7,
    omar = 3;



if (omar >= 4) {
    console.log("ناجح")
} 
else {
    console.log("راسب")
}
switch Examble =  
var myName = "yahya";
switch (myName) {
    case "yahya":
        alert("True")
}


While Loop Example = 
var a = 1;
while (a <= 10) {
    document.getElementById("nouvil").innerHTML += a;
    a++
}
Function Example = 
function test() {
    var yahya = 1;
    alert("yahya");
}
test()
  
Function Example 2 = 

function names(number, number2, number3, number4) {

    console.log("yyyy " +
        number, number2, number3, number4)

}
names("Amiraa", "yasien", "omar", "yahya")
Function Example 3 = 
function employees(Officer, Officer2, Officer3, Officer4, Officer5, Officer6, Officer7, Officer8, Officer9, Officer10) {
    console.log(Officer, Officer2, Officer3, Officer4, Officer5, Officer6, Officer7, Officer8, Officer9, Officer10)

}
employees('abdelrahman', 'gamal', 'ahmed',
    'mohamed', 'yahya', 'omar', 'yasien', 'hamza', 'mahmoud', 'yousef')
function Return Examble=


function test(age){                                            
    var x = 365 * 24;
    return age * x                                                                  
}                                          
var y = prompt('calculate age in hours');                                                                                
document.getElementById("nouvil").innerHTML = test(y) + "hours";   



function test (salary){
    var x =  300;
    return salary-x;
}

document.getElementById("nouvil").innerHTML = test(7000) + "$";                     
              

محرر اكواد  

   <style>
    #textarea{
        width: 100%;
height: 300px;
background: black;
color: white;
    }
    #button{
        width: 100%;
margin-bottom: 6px;
    }
    #output{
        width: 100%;
height: 300px;
background: black;
color: white;
        
    }
</style>
<textarea id="textarea"></textarea>
<button type="button" id="button" onclick="input()">تحويل</button>
<div id="output"></div>


function input(){
    var name1 = document.getElementById("textarea").value
    document.getElementById("output").innerHTML = name1;
}

on click = 
window.ondblclick = function test(){

document.getElementById("nouvil").innerHTML = "welcome to klamatastore.com"
    
}



events = 
var myButton = document.getElementById("button"),
myText = document.getElementById("text"),
mySite = document.getElementById("nouvil");
onkeyup or onkeydown or onkeypress=  function calculate(){
mySite.innerHTML = myText.value * 365;

}



window.alert("Welcome To Klamaata Store")






document.write("<h1>Hello Page</h1>")


 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


console.log("yahya");
console.log(typeof "yahya");
console.log(typeof 5000);
console.log(typeof [10, 15, 20]);
console.log(typeof {name: "yahya", age: 12, country: "EG"});
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);










let aabb = 2;
   console.log(aabb);

   
const aabb = 2;
   console.log(aabb);


   var a = "We Love";
var b = "JavaScript";
var c = "And";
var d = "Programing";
console.log(a + " " + b + "\n" + c + " " + d);





let a = "10";
let b = 20;
let c = true;

console.log(+a + b + c);




let a = 10;
a = a + 20;
a = a + 70;
a += 100;
a -= 100;
a /= 2;
console.log(a)






console.log((100).toString());
console.log(100..toString());
console.log(100.55555.toFixed(2));
console.log(parseInt("100 yahya"));
console.log(parseFloat("100.55 yahya"));
console.log(Number.isInteger("100"));
console.log(Number.isInteger(200.100));
console.log(Number.isInteger(100));
console.log(Number.isNaN("yahya" / 20));



console.log(Math.round(95.2));
console.log(Math.round(93.5));

console.log(Math.ceil(99.5));
console.log(Math.floor(98.5));

console.log(Math.min(10,20,50,100));
console.log(Math.max(10,20,50,100));

console.log(Math.random(10, 20, 50, 100));

console.log(Math.trunc(120.20));


let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
console.log(Math.min(Math.trunc;


    let theName = "  yahya  ";
    console.log(theName);
    console.log(theName[1]);
    
    
    console.log(theName.charAt(1));
    console.log(theName.charAt(5));//بتبدا من 0
    
    
    
    console.log(theName.length) ;//بتبدا من واحد
    console.log(theName.trim()) ;
    
    console.log(theName.toUpperCase());
    console.log(theName.toLowerCase());
    
    console.log(theName.trim().charAt(0).toUpperCase());


    let a = "Elzero Web School";
console.log(a.indexOf("Web"));
// من المين
console.log(a.indexOf("Web", 8));


console.log(a.indexOf("Web"));
console.log(a.lastIndexOf("Web", 8));
// من الشمال
console.log(a.slice(2, 6));
console.log(a.slice(-5, -3));

console.log(a.repeat(2));

console.log(a.split(" ", 6));








let a = "Elzero Web School";
console.log(a.substring(2, 6));
console.log(a.substring(6, 2));
console.log(a.substring(-10));
console.log(a.substring(a.length - 5, a.length - 3));

console.log(a.length)

console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));


console.log(a.startsWith("E", 2));
console.log(a.startsWith("z", 2));


console.log(a.endsWith("o", 6));




let a = "Elzero Web School";
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
console.log(a.charAt(13).repeat(8).toUpperCase());
console.log(a.split(" ", 1));
console.log(`${a.substr(0,6)}${a.substr(-6)}`);
console.log(a.slice(0, 1).toLowerCase() + a.slice(1, -1).toUpperCase() + a.slice(-1).toLowerCase());




console.log(10 == "10"); // compare vaule only
console.log(10 != "10"); // compare vaule only


console.log(10 === "10"); // compare vaule +type
console.log(10 !== "10"); // compare vaule +type

console.log(typeof "yuhya" === typeof "mohamed");




OR = || Shift And \ next to enter
And = &&
Not = !

console.log(true);
console.log(!true);

console.log(!10 == "10");
console.log(10 == "10" && 10 > 8 && 10 >= 10);

console.log(10 == "10" || 10 > 8 || 10 >= 10);



let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
if (discount=== true) {
    price -= discountAmount
}
else if (country === "Egypt"){
price -= 40;
}
else if (country === "Syria"){
price -= 50;
}
else{
    price -= 10;
}
console.log(price);


let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;


if (discount=== true) {
    price -= discountAmount
}


else if (country === "Egypt"){
if(student=== true){
    price-=discountAmount +30;
  
}
else{
    price-=discountAmount + 10;
}
}


else if (country === "Syria"){
price -= 50;
}
else{
    price -= 10;
}
console.log(price);






let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  
    console.log("Mr");
} else {
  console.log("Mrs");
}
//  ? if True : if False
theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("unkwon");


  
  let price = 0;
  console.log(`The Price Is ${price ||  200 }`);
  console.log(`The Price Is ${price ??  0 }`);

    */



// var counter = 1;

// function increment() {
//   counter++;
//   document.getElementById("nouvil").innerHTML = counter;
// }

  




// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor
    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count);
      cart.push(item);4
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for(var i in cartArray) {
      output += "<tr>"
        + "<td>" + cartArray[i].name + "</td>" 
        + "<td>(" + cartArray[i].price + ")</td>"
        + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
        + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
        + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = " 
        + "<td>" + cartArray[i].total + "</td>" 
        +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();

  mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
