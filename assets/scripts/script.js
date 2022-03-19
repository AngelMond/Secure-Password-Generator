





// Assignment Code
var generateBtn = document.querySelector("#generate");



// FUNCTION THAT STORES 
function writePassword() {
  
  //THIS VARIABLE CONTAINS MY MAIN FUNCTION TO GENERATE THE PASSWORD
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



//MY EVENT THAT WILL CALL MY  WRITEPASSWORD FUNCTION WHEN I CLICK THE BUTTON TO GENERATE MY PASSWORD
generateBtn.addEventListener("click", writePassword);




/******************* MAIN FUNCTION *****************************/
function generatePassword(){

  //JUST AN ALERT THAT SAYS TO SELECT A CRITERIA FOR GENERATE THE PASSWORD
  alert("Please choose the following criteria to generate your password.");

 //CONTAINERS FOR MY CHARACTERS
 var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
 var upperCaseLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
 var numbers = "0123456789";
 var symbols = "!#$%&*+/:;<>=?@-_~|^[](){}";

//THIS VARIABLE WILL STORE MY GENERATED PASSWORD AND WILL BE THE RETURN FOR THIS FUNCTION
 var base = [];

 // CHOOSE THE LENGTH OF THE PASSWORD
 var passwordLength = parseInt(prompt("Select the length for your password." + "\n" + "\n" + "From 8 to 128 characters."));


 //CONDITION, VALIDATES THE LENGHT OF THE PASSWORD. IF PUT A WRONG OPTION GOES TO THE ELSE, IF ITS TRUE, THEN RUNS THE CRITERIA FOR THE PASSWORD
  if (passwordLength >= 8 && passwordLength <= 128){

     /***************** CRITERIA FOR THE PASSWORD   ***************/

      //DO YOU WANT LOWERCASE LETTERS?
    var confirmLowerLetters = confirm("Do you want Lower Case letters?");
    var lowerLetters = confirmLowerLetters;


    //DO YOU WANT UPPERCASE LETTERS?
    var confirmUpperLetters = confirm("Do you want Upper Case letters?");
    var upperLetters = confirmUpperLetters;
    
    
    

    //DOU YOU WANT NUMBERS?
    var confirmNumbers = confirm("Do you want to include numbers?");
    var numbersRecieve = confirmNumbers;
    



    //DOU YOU WANT SYMBOLS?
    var confirmSymbols = confirm("Do you want to include symbols?");
    var symbolsRecieve = confirmSymbols;
  
   
   //FOR LOOP. WILL VERIFY THE LENGHT FOR THE PASSWORD ENTERED BY THE USER AND THEN WILL JUMP TO THE CONDITIONS TO VERIFY TRUE OR FALSE FOR EVERY PROMPT
   for(i = 0; i < passwordLength; i++){

      //THIS WILL ADD MY LOWERCASE LATTERS
      if(lowerLetters){           
        base += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
      }
      //THIS WILL ADD MY UPPERCASE LATTERS
      if(upperLetters){
         base += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
      }
      //THIS WILL ADD MY NUMBERS
      if(numbersRecieve){
         base += numbers[Math.floor(Math.random() * numbers.length)];
      }
      //THIS WILL ADD MY SYMBOLS
      if(symbolsRecieve){
         base += symbols[Math.floor(Math.random() * symbols.length)];
      }

      //IF USER DON'T SELECT ANY OPTION WILL ASK IF WANT TO SELECT AGAIN, OTHERWISE THE PROGRAM WILL END
      if(!lowerLetters && !upperLetters && !numbersRecieve && !symbolsRecieve){
        var selectAgain = confirm("Please select at least one option to add to your password. \n" + "\n" + " Would you like to select again?");

        if(selectAgain){
          generatePassword();

        }else{
          alert("See you!");
          break;
        }
      }
      
    }

    //IF USER ENTERED AN INVALID OPTION WILL TELL TO THE USER AND WILL ASK IF WANT TO CHOOSE AGAIN THE LENGHT OF THE PASSWORD 
   } else{
     alert("Invalid option." + "\n" + "\n" + "Please enter a number from 8 to 128")
     var chooseAgain = confirm("Do you want to choose again?")

       if(chooseAgain){
         generatePassword()

       } else{
         alert("See you!")
       }
  
   }

   //RETURN THAT COLLECTS THE VALUE OF THE GENERATED PASSWORD
 return base.slice(0, i);

}
//END OF MY GENERATEPASSWORD FUNCTION









































/*



  //GENERATE AUTOMATIC PASSWORD
  var passwordLength = (base, length) =>{
    var password = "";
    for(var i = 0; i < length; i++){
      var random = Math.floor(Math.random() * base.length);
      password += base.charAt(random);
    }
    return password
  }

*/