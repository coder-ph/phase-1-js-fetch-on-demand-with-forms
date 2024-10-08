const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', function(e){
    
    e.preventDefault()
    let formContent = e.target.searchByID.value;
    console.log(formContent)

    fetch(`http://localhost:3000/movies/${formContent}`)
    .then((response)=> response.json())
    .then((data)=> {
        const movieTitle = document.querySelector("section#movieDetails h4")
        const movieSummary = document.querySelector("section#movieDetails p")

            movieTitle.textContent = data.title
            movieSummary.textContent = data.summary
            
    })
  })
}

document.addEventListener('DOMContentLoaded', init);