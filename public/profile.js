const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#poll-desc').value.trim();

  // if (name && needed_funding && description) {
  //     const response = await fetch(`/api/projects`, {
  //       method: 'POST',
  //       body: JSON.stringify({ name, needed_funding, description }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to create project');
  //     }
  //   }
  // };

  if (description) {
    const response = await fetch(`/api/polls`, {
      method: 'POST',
      body: JSON.stringify({ description }),
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/polls/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-poll-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.poll-list')
  .addEventListener('click', delButtonHandler);