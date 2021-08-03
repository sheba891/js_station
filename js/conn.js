function station() {
  console.log("functioncalled1");
  fetch("http://52.203.100.234:5010/files/stops.txt")
    .then((response) => response.json())
    .then((data) => {
      let { stop_id, stop_name, wheelchair_boarding, stop_lat, stop_long } =
        data;
      console.log("data");
      let stations = data.map((data) => ({
        station_id: data.stop_id,
        station_name: data.stop_name,
        location: {
          longitude: data.stop_lon,
          latitude: data.stop_lat,
        },
        wheelchairSuitable: data.wheelchair_boarding,
      }));
      let myJSON = JSON.stringify(stations, null, 4);
      document.getElementById("myStation").innerHTML = myJSON;
    });
}

function price() {
  fetch("http://52.203.100.234:5010/files/fare_rules.txt")
    .then((response) => response.json())
    .then((data) => {
      let { fare_id, origin_id, destination_id } = data;
      let fare = data.map((data) => ({
        fare_id: data.fare_id,
        origin_id: data.origin_id,
        destid: data.destination_id,
      }));
      console.log("yes");
      fetch("http://52.203.100.234:5010/files/fare_attributes.txt")
        .then((response) => response.json())
        .then((value) => {
          let { fare_id, price } = value;
          let arr = {};
          let fare_1 = value.filter(function (values) {
            if (fare.fare_id == value.fare_id) {
              arr = {
                originid: fare.origin_id,
                destinationid: fare.destination_id,
                price: values.price,
              };
            }

            return arr;
          });
          let myJSON = JSON.stringify(fare_1, null, 4);
          document.getElementById("myPrice").innerHTML = myJSON;
        });
    });
}

