document.getElementById('form-loan').addEventListener('submit',calculate);


function calculate(e){

	let amount = document.getElementById('amount');
	let interest = document.getElementById('interest');
	let years = document.getElementById('years');
	let monthly = document.getElementById('monthly');
	let yearly = document.getElementById('yearly');
	let total = document.getElementById('total');



	let principal = parseFloat(amount.value);
	let calculatedInterest=parseFloat(interest.value)/100/12;
	let calculatedPayment=parseFloat(years.value)*12;


	let x = Math.pow(1 + calculatedInterest,calculatedPayment);
	let month=(principal*x*calculatedInterest)/(x-1);

    if(isFinite(month)){
      monthly.value=month.toFixed(2);
      yearly.value=(month*calculatedPayment).toFixed(2);
      total.value=((month*calculatedPayment)-principal).toFixed(2);
      
    } else{

    	showError('Please check your numbers');

    }

	e.preventDefault();
}

function showError(error){

	const errorDiv=document.createElement('div');

	const card=document.querySelector('.card');
	const heading=document.querySelector('.heading');
	

	errorDiv.className='alert alert-danger';

	errorDiv.appendChild(document.createTextNode(error));

	card.insertBefore(errorDiv,heading);

	setTimeout(clearerror,3000);

}


function clearerror(){
	document.querySelector('.alert').remove();
}