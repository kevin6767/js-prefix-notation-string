# Prefix Notation String Evaluator

Add a number to the evaulating function at the bottom of the index.js and will recieve an answer in the command line. Examples of sutiable inputs are listed at the bottom. One of the most enjoyable things I've worked on so far because it was something new that I haven't played around with much.

---

Write a javascript program to evaluate a prefix notation string.
Input operators + \_ - /. Numbers are all positive integers only. Separated by space character.
For any such a string the program should return one number which is the revArrult of the calculation.
The program needs to yield the correct revArrult for valid inputs only, so error handling can be omitted.
Example:
"9" => 9
"+ 1 2" => 3 // This is (1 + 2)
"+ + 1 2 30" => 33 // This is ((1+2)+30)
"+ + 12 16 \* 10 4" => 68 // This is ((12+16)+(10\*4))
