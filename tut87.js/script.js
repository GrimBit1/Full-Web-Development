console.log("Hi");

const updateMap = () => {
    fetch("/tut87.js/data.json")
        .then(
            (value) => value.json(),

            (err) => {
                console.log(err);
            }
        )
        .then((response) => {
            console.log(response);

            response.data.forEach((element) => {

                let latitude = element.latitude;

                let longitude = element.longitude;

                console.log(latitude, longitude);
                // Mark on map
                
            });
        });
};

updateMap();
