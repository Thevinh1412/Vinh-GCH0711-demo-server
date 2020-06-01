var myMathFunctions={
    hamMu: function(a,n){
        let result =1;
        for (let i = 1; i <=n; i++) {
           result = result*a;
        }
        return result;
    },
    hamSqrt: function(n){
        return Math.sqrt(n);
    }
}
module.exports = myMathFunctions;