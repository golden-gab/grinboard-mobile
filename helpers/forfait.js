

export function getPercentConsumed(nbr,limit) {
	
  var res = nbr/limit*100;  

 res = parseFloat(res.toFixed(1)) ;
 
  return res;
} 
 