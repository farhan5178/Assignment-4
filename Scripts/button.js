const container = document.getElementById('job-container');
const cards = container.getElementsByClassName('card');


const interviewButtons = document.querySelectorAll('.interview-btn');

for(let i = 0; i < interviewButtons.length; i++){
    interviewButtons[i].addEventListener('click', function(){

        const card = this.closest('.card');
        const statusBtn = card.querySelector('.status-btn');

        if(statusBtn.innerText === "INTERVIEW"){
            return;
        }

        if(statusBtn.innerText === "REJECTED"){
            let currentRejected = getJob('rejected');
            setJob('rejected', currentRejected - 1);
        }
        statusBtn.innerText = "INTERVIEW";
        statusBtn.classList.remove('bg-red-100','text-red-600');
        statusBtn.classList.add('bg-green-100','text-green-600');
        let currentInterview = getJob('interview');
        setJob('interview', currentInterview + 1);
    });
}


const rejectedButtons = document.getElementsByClassName('rejected-btn');

for(let i = 0; i < rejectedButtons.length; i++){
    rejectedButtons[i].addEventListener('click', function(){

        const card = this.closest('.card');
        const statusBtn = card.getElementsByClassName('status-btn')[0];

        if(statusBtn.innerText === "REJECTED"){
            return;
        }

        if(statusBtn.innerText === "INTERVIEW"){
            let currentInterview = getJob('interview');
            setJob('interview', currentInterview - 1);
        }

        // status change
        statusBtn.innerText = "REJECTED";
        statusBtn.classList.remove('bg-green-100','text-green-600');
        statusBtn.classList.add('bg-red-100','text-red-600');

        // rejected count update
        let currentRejected = getJob('rejected');
        setJob('rejected', currentRejected + 1);
    });
}



document.getElementById('filter-interview').addEventListener('click', function(){

    for(let i = 0; i < cards.length; i++){
        const statusBtn = cards[i].getElementsByClassName('status-btn')[0];

        cards[i].style.display = (statusBtn.innerText === "INTERVIEW") ? "block" : "none";
    }

    checkEmptyState();
});


document.getElementById('filter-rejected').addEventListener('click', function(){

    for(let i = 0; i < cards.length; i++){
        const statusBtn = cards[i].getElementsByClassName('status-btn')[0];

        cards[i].style.display = (statusBtn.innerText === "REJECTED") ? "block" : "none";
    }

    checkEmptyState();
});


document.getElementById('all-btn').addEventListener('click', function(){

    for(let i = 0; i < cards.length; i++){
        cards[i].style.display = "block";
    }

    checkEmptyState();
});


function checkEmptyState(){
    const emptyState = document.getElementById('empty-state');
    const jobCountText = document.getElementById('job-count');

    let visibleCount = 0;

    for(let i = 0; i < cards.length; i++){
        if(cards[i].style.display !== "none"){
            visibleCount++;
        }
    }

    if(visibleCount === 0){
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }

    jobCountText.innerText = visibleCount + (visibleCount === 1 ? " job" : " jobs");
}


function setJob(id, value){
    document.getElementById(id).innerText = value;
}

checkEmptyState();