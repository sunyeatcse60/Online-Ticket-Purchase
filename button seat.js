// console.log('i love this game');

const selectedSeat = document.getElementById('selected-seat');
const totalBooked = document.getElementById('total-booked');
let selectSeat = [];




function handleSelectSeat(event) {
    // console.log(event);

    event.classList.add('bg-green-500');
    event.classList.add('text-white');

    selectSeat.push(event.innerText);
    // console.log(selectSeat);

    totalBooked.innerText = selectSeat.length;

    // selectedSeat.innerHTML = `<li class="text-black font-normal flex justify-between">
    //     <span>${event.innerText}</span>
    //     <span>Economy</span>
    //     <span>550</span>
    // </li>`;
}
