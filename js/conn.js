
function station()
{   
   console.log("functioncalled1");
   fetch('http://52.203.100.234:5010/files/stops.txt')
  .then(response => response.json())
  .then(data => {
          
           let {stop_id,stop_name, wheelchair_boarding,stop_lat,stop_long}= data;
           console.log("data");
            let stations = data.map((data) =>({ station_id:data.stop_id ,
                                                station_name:data.stop_name ,
                                                location: {
                                                  longitude: data.stop_lon,
                                                  latitude: data.stop_lat },
                                                 wheelchairSuitable: data.wheelchair_boarding  
                                              }));
          let myJSON= JSON.stringify(stations,null,4);
          document.getElementById('myStation').innerHTML=myJSON;
           })
        }
    
function price()
{
   console.log("functioncalled2");
   fetch('http://52.203.100.234:5010/files/fare_attributes.txt')
  .then(response => response.json())
  .then(data => {

    let fares =data.filter (function(datas) {
      return  datas.price;
    })
    .map((datas)=>({price: datas.price}));
  
  
     let myJSON= JSON.stringify(fares,null,4);
    document.getElementById('myPrice').innerHTML= myJSON; 
})
  
}


            




