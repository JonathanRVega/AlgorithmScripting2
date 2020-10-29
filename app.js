// Make a person
console.log("Problem 1, Make a person");

var Person = function(firstAndLast) {
    var fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };

  var bob = new Person("Bob Ross");
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  console.log(bob.getFullName());

  //Steamroller

  console.log("Problem 2, Steamroller");

  function steamrollArray(arr) {
    
    var myArray = [];
    nesting (arr);
    function nesting(arr){
        arr.forEach(function(arr2){
            if(!Array.isArray(arr2)){
                myArray.push(arr2);
            }
            else{
                nesting(arr2);
            }
        });
    }
    return myArray;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([[["a"]], [["b"]]]));
  console.log(steamrollArray([1, {}, [3, [[4]]]]))

  // Drop it
  console.log("Problem 3, Drop it");

  function dropElements(arr, func) {
    
    for(i = 0; i <= arr.length; i++){
        if(func(arr[0])) {
            break;
        }
        else{
            arr.shift();
        }
    }
    
    return arr;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2}));
  console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3}));
  