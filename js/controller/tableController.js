import {fetchTrips, removeTrip} from '../model/tripModel.js';

async function loadTable(){
    const trips = await fetchTrips();
    const tbody = document.querySelector('#table_trips tbody');
    tbody.innerHTML = '';

    trips.forEach(element => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${element.driver}</td>
            <td>${element.passenger}</td>
            <td>${element.oringin_address}</td>
            <td>${element.destination_addres}</td>
            <td>$${element.fee}</td>
            <td><button data-id=${element.id} class="btn_remove">Remove</button></td>
        `
        tbody.appendChild(tr);
    });

    document.querySelectorAll('.btn_remove').forEach(btn =>{
        btn.addEventListener('click', async (e) => {
            const id = e.target.dataset.id;
            await removeTrip(id);
            loadTable();
        });
    });
}

document.addEventListener('DOMContentLoaded', loadTable);