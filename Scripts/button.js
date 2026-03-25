// interview button
const interviewButtons = document.querySelectorAll('.interview-btn');

for(let i = 0; i < interviewButtons.length; i++){
    interviewButtons[i].addEventListener('click', function(){

        // get current card 
        const card = this.closest('.card');

        //  card er APPLIED button
        const statusBtn = card.querySelector('.status-btn');

        //  already interview ar barbe na 
        if(statusBtn.innerText === "INTERVIEW"){
            return;
        }

        // NOT APPLIED → INTERVIEW
        statusBtn.innerText = "INTERVIEW";
        statusBtn.classList.add('bg-green-100','text-green-600');

        //  upore interview count update  cal;culator
        const currentInterview = getJob('interview');
        const newInterview = currentInterview + 1;

        setJob('interview', newInterview);
    });
}

// grt container 
const container = document.getElementById('job-container');

// sob card berkoro[]
const cards = container.getElementsByClassName('card');


//  Interview filter
document.getElementById('filter-interview').addEventListener('click', function(){

    for(let i = 0; i < cards.length; i++){

        const statusBtn = cards[i].getElementsByClassName('status-btn')[0];

        if(statusBtn && statusBtn.innerText === "INTERVIEW"){
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
});


//  Rejected filter
document.getElementById('filter-rejected').addEventListener('click', function(){

    for(let i = 0; i < cards.length; i++){

        const statusBtn = cards[i].getElementsByClassName('status-btn')[0];

        if(statusBtn && statusBtn.innerText === "REJECTED"){
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
});


// All show
document.getElementById('all-btn').addEventListener('click', function(){

    for(let i = 0; i < cards.length; i++){
        cards[i].style.display = "block";
    }
});