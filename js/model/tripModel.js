const urlApi = 'https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/alimentos';

export async function fetchTrips(){
    const res = await fetch (urlApi);
    return res.json();
}

export async function addTrip(trip){
    const res = await fetch (urlApi, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            driver : trip.motorist,
            passenger : trip.passenger,
            oringin_address : trip.origin,
            destination_addres : trip.destination,
            fee : trip.fare
        })
    });
    return res.json();
}

export async function removeTrip(id) {
    await fetch(`${urlApi}/${id}`, {method: 'DELETE'});
}