// console.log('i love this game');

const selectedSeat = document.getElementById('selected-seat');
const totalBooked = document.getElementById('total-booked');
const availableSeat = document.getElementById('available-seat');
const totalPriceTk = document.getElementById('total-price');
const copuneInput = document.getElementById('coupne-input');
const copuneBtn = document.getElementById('copune-btn');
const defaultText = document.getElementById('default-text');
const grantTotal = document.getElementById('grand-total');






let selectSeat = [];
let totalPrice = 0;




function handleSelectSeat(event) {
    // console.log(event);

    const value = event.innerText;
    if (selectSeat.includes(value)) {
        alert('Already Booked');
    }

    else if (selectSeat.length < 4) {
        event.classList.add('bg-green-500');
        event.classList.add('text-white');

        selectSeat.push(event.innerText);
        // console.log(selectSeat);

        totalBooked.innerText = selectSeat.length;

        const availableSeatValue = availableSeat.innerText;
        // console.log(availableSeatValue);
        const newSeatValue = availableSeatValue - 1;
        availableSeat.innerText = newSeatValue;


        defaultText.classList.add('hidden');



        totalPrice += 550;
        totalPriceTk.innerText = totalPrice.toFixed(2);




        if (selectSeat.length > 3) {
            copuneInput.removeAttribute('disabled');
            copuneBtn.removeAttribute('disabled');
        }


        selectedSeat.innerHTML += `<li class="text-black font-normal flex justify-between">
                <span>${event.innerText}</span>
                <span>Economy</span>
                <span>550</span>
            </li>`;
    }
    else {
        alert('You have Maximum Seat Booked');
    }



};




document.getElementById('coupne-input').addEventListener('click', function () {
    const copuneValue = copuneInput.value;
    let copuneSave = 0;

    if (copuneValue !== 'SB15') {
        copuneSave = totalPrice * .15;
    }
    else if (copuneValue == 'SB26') {
        copuneSave = totalPrice * .30;
    }
    else (
        alert('Apply valid Copune Code!!')
    )



    const showPrice = document.getElementById('show-price');
    showPrice.innerHTML = `<p>Discount:</p>
                           <p>
                               <span>-BDT:</span>
                               <span>${copuneSave.toFixed(2)}</span>
                            </p>`



    const grantTotalValue = totalPrice - copuneSave;
    grantTotal.innerText = grantTotalValue.toFixed(2);


})