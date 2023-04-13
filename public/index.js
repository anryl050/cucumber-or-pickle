const agreeButton = document.querySelector('#agree-button');
const disagreeButton = document.querySelector('#disagree-button');
// import { displayPollResults, getPollData } from "../public/javascript/doughnut.js";
import { displayPollResults, getPollData } from "./javascript/doughnut.js";

agreeButton.addEventListener('click', () => {
    voteOnPoll('agree');
});

disagreeButton.addEventListener('click', () => {
    voteOnPoll('disagree');
});

async function voteOnPoll(choice) {
    try {
        const pollID = document.querySelector('#poll-id').value;
        const response = await fetch(`api/polls/${pollID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ choice })
        });
        const result = await response.json();
        console.log(result);

        const chart = Chart.getChart(pollID + '-chart');
        if (choice === 'agree') {
            chart.data.datasets[0].data[0] = result.agree_votes;
        } else if (choice === 'disagree') {
            chart.data.datasets[0].data[1] = result.disagree_votes;
        }
        chart.update();
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
            <div class="poll" id="${result.id}">
                <h2>${question}</h2>
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