/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        
        // your code here

    });

})();*/


    
   

    function factorial(n){
        let result = n;
            if(Math.round(n)==n){
                if(n<0){
                    return null;
                }
                if(n===1||n===0){
                    return 1;
                } else {
                while(n>=2){
                    result = result * (n-1);
                    n--;
                }
                return result;
                }
            }
        }
        document.getElementById("run").addEventListener("click", function calculate(){
            let input = document.getElementById("number").value;
            if(!isNaN(input)&&input.trim().length){
                alert((factorial(parseInt(input, 10))));
            } 
        
        
    });