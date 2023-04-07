const ctx = document.getElementById('myChart');

async function getPollData(pollId) {
    try {
        const response = await fetch(`/api/polls/${pollId}`);
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

async function displayPollResults(pollId) {
    const pollData = await getPollData(pollId);
    const agreeVotes = pollData.agree_votes;
    const disagreeVotes = pollData.disagree_votes;
    const pollResultsChart = new Chart(document.getElementById('poll-results'), {
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