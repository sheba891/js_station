

function price(fare)
{
let fares = [
    {id_1: 20, id_2: 10, price: 'rs200'},
    {id_1: 30, id_2: 20, price: 'rs300'},
     {id_1: 40, id_2: 30, price: 'rs400'}
];
  let fare = fares.map((fares) =>({ origin_id:fares.id_1 , destint_id:fares.id_2 ,price: fares.price}));
  console.log(fare);
}
  


// let stations = [
  
// ]