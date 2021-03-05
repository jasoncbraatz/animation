<?php

echo "hey - "; # heyya


function turd() {
    //initialize
 $numText = "";
 $diceNumber = mt_rand(1, 6);
//calling switch statement
  switch ($diceNumber) 
  {
  case 1:
    $numText = "One";
    break;
  case 2:
    $numText = "Two";
    break;
  case 3:
  case 4:
    // case 3 and 4 will go to this line
    $numText = "Three or Four";
    break;
  case 5:
    $numText = "Five";
    // echo $numText;
     break; //without specify break or return it will continue execute to next case.
  case 6:
   // $numText = "Six";
     $numText = "Six";
    break;
  default:
    $numText = "unknown";
  }
  echo 'Dice show number '.$numText.'.';
}

 turd();

  //display result
  

?>