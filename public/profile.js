const newFormHandler = async (event) => {
  event.preventDefault();

  const pollText = document.querySelector('#pollText').value.trim();

  if (pollText) {
    const response = await fetch(`/api/polls`, {
      method: 'POST',
      body: JSON.stringify({ poll_text: pollText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

document
  .querySelector('.new-poll-form')
  .addEventListener('submit', newFormHandler);