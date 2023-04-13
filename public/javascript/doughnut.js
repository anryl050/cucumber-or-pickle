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