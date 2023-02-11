// grab save button, add eventlister, use fecth to fecth the api route that will add the user to the database (post)
// then i need to run a get route to show that list
// on page load show the modal
// nned to add an event listener on the play again button to go back to the play page

// placeholder until game gets set up


const score = 5; 
const scoreDisplay = document.querySelector('.modal-body')
scoreDisplay.textContent += score
const playAgainBtn = document.querySelector('#play-again')
playAgainBtn.addEventListener('click', () => {
    document.location.replace('/')
})

const tr = document.querySelectorAll('.table-row')

for(let i = 0; i < tr.length; i++) {
    tr[i].textContent = [i + 1]
}

// added a put fectch so the score will update

const updateBtn = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/highscore/${id}`, {
        method: 'PUT',
        body: JSON.stringify({score})
      })
      .then(res => console.log(res.json()))
      .then(data => console.log(data))
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to update score');
      }
    }
  };

 
const saveChanges= document.querySelector('#save-changes')
 console.log(saveChanges)
saveChanges.addEventListener('click', updateBtn())
