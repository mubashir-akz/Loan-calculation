document.querySelector('#loan-form').addEventListener('submit', function(e){

    document.querySelector('#results').style.display = 'none'
    document.querySelector('#loading').style.display = 'block'

    setTimeout(submit,2000);

    e.preventDefault();
})

function submit() {
    const amount = parseFloat(document.querySelector('#amount').value);
    const rate = parseFloat(document.querySelector('#interest').value);
    const months = parseFloat(document.querySelector('#years').value)

    const monthly = document.querySelector('#monthly-payment')
    const totalPayment = document.querySelector('#total-payment')
    const totalInterest = document.querySelector('#total-interest')

    const interest = parseFloat((amount * rate * months) / 100)
    console.log(isFinite(interest))

    if (isFinite(interest)) {
        const x = parseFloat((interest * (months * 12)).toFixed(2))
        totalInterest.value = x.toFixed(2);
        console.log(typeof (amount + x))
        totalPayment.value = (amount + x).toFixed(2)
        monthly.value = (totalPayment.value / (months * 12)).toFixed(2)

        document.querySelector('#results').style.display = 'block'
        document.querySelector('#loading').style.display = 'none'
    } else {
        CallError();

    }

    // calculation

}

function CallError() {
    document.querySelector('#results').style.display = 'none'
    document.querySelector('#loading').style.display = 'none'

    const errorDiv = document.createElement('div')
    errorDiv.className = 'alert alert-danger';

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.innerText = 'check the input values'

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000)
}

function clearError() {
    document.querySelector('.alert').remove();
}

document.querySelector('#res-forms').addEventListener('submit',function(e){


    document.querySelector('#results').style.display = 'none'

    e.preventDefault();
})
