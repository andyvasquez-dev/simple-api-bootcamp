let state = document.querySelector('input')


const stateData = []

function getData(){
  let selectedState = state.value.toLowerCase()
  console.log(selectedState)
  fetch(`https://api.covidtracking.com/v1/states/${selectedState}/current.json`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // data[`checkTimeEt`].slice(0,5) date
    document.querySelector('#death').textContent= + data[`death`] + ` total deceased`
    document.querySelector('#count').textContent = + data[`positive`] + ' positive cases'
    document.querySelector('#state').textContent = 'STATE: ' + data[`state`]
    document.querySelector('#display').classList.toggle('hidden')
  })
    .catch(err => {
      console.log(`error ${err}`)
      alert("there are no results for your search")
  })

}

state.addEventListener('keyup', (e)=>{
  if(e.keyCode === 13){
    if (state.value){
      getData();
    }

  }
})
