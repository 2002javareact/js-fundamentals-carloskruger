/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let lineStr = ''
  switch(shape){
    case "Triangle":
      for(let i = 0; i <= height; i++){
        for(let j = 0; j < i; j++){
          lineStr = lineStr + character
        }
        console.log(lineStr)
        lineStr = ''
      }
      break;
    case "Square":
      for(let i = 0; i < height; i++){
        lineStr = lineStr + character
      }
      for(let i = 0; i< height; i++){
        console.log(lineStr)
      }
      lineStr = ''
      break;
    case "Diamond":
{
      let lines = (height - 1 )/2
      let spaces = (height - 1 )/2
      let lineStr = ''
      let no_characters = 1
      for (let i = 0; i < lines; i++){
          //create the spaces portion of the line
          for(let s = 0; s < spaces; s++){
              lineStr = lineStr + " ";
          };
          for(let c = 0; c < no_characters; c++){
              lineStr = lineStr + character;
           }
           console.log(lineStr)
           lineStr = ''
           no_characters+=2;
           spaces--;      
      }
  
      // mid line
      for(let x= 0; x < height; x++){
          lineStr = lineStr + character
      }
      console.log(lineStr)
      lineStr = ''
      //above writes the midline
      spaces = 1;
      no_characters = height - 2;
      for (let i = 0; i < lines; i++){
          //create the spaces portion of the line
          for(let s = 0; s < spaces; s++){
              lineStr = lineStr + " ";
          };
          for(let c = 0; c < no_characters; c++){
              lineStr = lineStr + character;
           }
           console.log(lineStr)
           lineStr = ''
           no_characters-=2;
           spaces++;     
  
          }
        }
        break;
      default:
            console.log("Wrong shape was entered");
      break;
        
  }
  
}

printShape("Triangle", 3, "$");
printShape("Square", 3, "%");
printShape("Diamond", 9, "*");