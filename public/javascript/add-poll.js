async function newFormHandler(event) {
  event.preventDefault();

  const poll_text = document.querySelector('input[name="poll-text"]').value;

  const response = await fetch(`/api/polls`, {
    method: 'POST',
    body: JSON.stringify({
      poll_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-poll-form').addEventListener('submit', newFormHandler);