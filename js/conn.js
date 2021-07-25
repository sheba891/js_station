function station()
{
  let x= document.getElementsByClassName("b1").value;
  document.getElementsByClassName("b1").innerHTML= station_1 ;

}
function price()
{
  let y= document.getElementsByClassName("b2").value;
  document.getElementsByClassName("b2").innerHTML= fare;

}

let fares = [
    {id_1: 20, id_2: 10, price: 'rs200'},
    {id_1: 30, id_2: 20, price: 'rs300'},
     {id_1: 40, id_2: 30, price: 'rs400'}
];
  let fare = fares.map((fares) =>({ origin_id:fares.id_1 , destint_id:fares.id_2 ,price: fares.price}));
  
let stations =[
    {stationId: 20, stationName:'trivandrum'},
    {stationId: 30, stationName:'kottayam'},
    {stationId: 40, stationName:'kollam'}
];
 let station_1 = stations.map((stations) =>({ stationid:stations.stationId , station_name:stations.sy}));