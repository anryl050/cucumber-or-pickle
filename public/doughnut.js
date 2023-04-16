const agreeButton = document.querySelector('#agree-button');
const disagreeButton = document.querySelector('#disagree-button');
// import { displayPollResults, getPollData } from "./doughnut";

async function getPollData(pollId) {
    try {
        const response = await fetch(`/api/polls/${pollId}`);
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

async function displayPollResults(pollId, elementId) {
    const ctx = document.getElementById(elementId)
    const pollData = await getPollData(pollId);
    console.log(pollData);
    const agreeVotes = pollData.agree_votes;
    const disagreeVotes = pollData.disagree_votes;
    console.log(agreeVotes);
    console.log(disagreeVotes);

    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
        existingChart.destroy();
    }

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Agree', 'Disagree'],
            datasets: [
                {
                    label: 'Poll Results',
                    data: [agreeVotes, disagreeVotes],
                },
            ],
        },
        options: {
            responsive: true,
        },
    });
}

agreeButton.addEventListener('click', () => {
    console.log('agree button clicked');
    voteOnPoll('agree');
});

disagreeButton.addEventListener('click', () => {
    console.log('disagree button clicked');
    voteOnPoll('disagree');
});

async function voteOnPoll(choice) {
    try {
        const pollID = document.querySelector('#poll-id').value;
        console.log(pollID);
        const response = await fetch(`api/polls/${pollID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ vote: choice })
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
        displayPollResults(pollID, `${pollID}-chart`);
        // const chart = Chart.getChart(pollID + '-chart');
        // if (choice === 'agree') {
        //     chart.data.datasets[0].data[0] = result.agree_votes;
        // } else if (choice === 'disagree') {
        //     chart.data.datasets[0].data[1] = result.disagree_votes;
        // }
        // chart.update();
    } catch (err) {
        console.error(err);
    }
}

async function createNewPoll() {
    try {
        const opinion = document.querySelector('#opinion-input').value; //needs to attach to the form HTML element
        const response = await fetch('api/polls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ opinion })
        });
        const result = await response.json();
        console.log(result);

        const newPollHtml = `
            <div class="poll" id="poll-container">
                <h2>${result.opinion}</h2>
                <div class="chart-container">
                    <canvas id="${result.id}-chart"></canvas>
                </div>
                <button id="agree-button">Agree</button>
                <button id="disagree-button">Disagree</button>
            </div>
        `;
        document.querySelector('#poll-container').insertAdjacentHTML('beforeend', newPollHtml);

        displayPollResults(result.id, `${result.id}-chart`);
    } catch (err) {
        console.error(err);
    }
};

createNewPoll();