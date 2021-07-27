
function station()
{   
   console.log("functioncalled1");
   fetch('http://52.203.100.234:5010/files/stops.txt')
  .then(response => response.json())
  .then(data => {
    const stations= data;
    var myJSON= JSON.stringify(stations,null,4);
    document.getElementById('myStation').innerHTML=myJSON; 
      
  })

}
function price()
{
   console.log("functioncalled2");
   fetch('http://52.203.100.234:5010/files/fare_attributes.txt')
  .then(response => response.json())
  .then(data => {
    const fare= data;
    var myJSON= JSON.stringify(fare,null,4);
    document.getElementById('myPrice').innerHTML=myJSON; 
      
  })
}






