import { DiffDay } from "./dates";

export function getStatusSession(debut , fin) {
  let ne = 'en cours'



  const today = new Date();
const formattedDate = today.toISOString().split('T')[0]; 
 let diff =DiffDay(formattedDate ,fin)


 let diffdebut =DiffDay(formattedDate ,debut)

 if( diffdebut > 0  ){
  ne = 'a venir'
 }

 if( diff < 0  ){
  ne = 'expirée'
 }

 
  return ne;
}
 