 import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export function formatNombre(nbr) {

		var nombre = ''+nbr;
		var retour = '';
		var count=0;
		for(var i=nombre.length-1 ; i>=0 ; i--)
		{
			if(count!==0 && count % 3 === 0)
				retour = nombre[i]+' '+retour ;
			else
				retour = nombre[i]+retour ;
			count++;
		} 
		return retour;
} 


export function tarif(nbr) {
	
  var res = formatNombre(nbr) + " Xaf";  
 
  return res;
} 
 
 


export function tarifPeriode(nbr,jour) {

	let resultat = tarifReduced(nbr,jour) * jour


	
  var res = formatNombre(resultat) + " Xaf";  
 
  return res;
} 

export function descriMini(descr , size = 75) {


  let res = 'pas description disponible';

  if(descr){

   res = descr.substring(0, size);
      res += '...'
  }


  return res;
} 


export function percent(nbr,total) {
	
  var res = nbr*100/total; 
   
 res = parseFloat(res.toFixed(2));
 
  return res;
} 


export function kFormatter(num,digits=1) {


  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup.findLast(item => num >= item.value);
  return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
 
}

export function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&_?';
  let password = '';
  
  for (let i = 0; i < 8 ; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
  }
  
  return password;
}
 
 