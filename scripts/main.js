/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function mapping(s){
    if ((s=="J")||(s=="Q")||(s=="K")){
        return (10);
    }else if (s=="A"){
        return (11);
    }else{
        return (parseInt(s));
    }
}
function handValue (hand){
  let array=[];
  let total=0;
  for (let i=0; i<hand.length; i++){
    var num= mapping(hand[i]);
    array.push(num);
  }
  let checkAce=false;
  for (let i =0; i<array.length; i++){
      if (array[i]==11){
          checkAce=true;
      }
      total+=array[i]
      if (total>21 && checkAce===true) {
          total-=10;

      }
  }
  return(total)
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
