import { addTrip } from "../model/tripModel.js";

document.querySelector('#tripForm').addEventListener('submit', async  (e) => {
    e.preventDefault();

    const data = {
        motorist : document.querySelector('#motorist').value,
        passenger : document.querySelector('#passenger').value,
        origin : document.querySelector('#origin').value,
        destination : document.querySelector('#destination').value,
        fare : document.querySelector('#fare').value
    }

    if (Object.values(data).some(v => !v)){
        alert('Preencha todos os campos!')
        return;
    }

    await addTrip(data);
    alert('Viagem Cadastrada!')
    e.target.reset();
})