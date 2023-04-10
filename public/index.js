const agreeButton = document.querySelector('#agree-button');
const disagreeButton = document.querySelector('#disagree-button');

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
        await displayPollResults(pollID);
    } catch (err) {
        console.error(err);
    }
}
