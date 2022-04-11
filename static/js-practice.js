'use strict';

/** ********************
 Make an Event Handler
********************* */

document.querySelector('#popup-alert-button').addEventListener('click', () => {
  alert("Be careful!");
})

/** ***********************
Practice Your Times Tables
************************ */

document.querySelector('#multiplying-form').addEventListener('submit', (evt) => {
  evt.preventDefault();
  const multiples = [];
  let base = Number(document.querySelector('#mults-of').value);
  const max = Number(document.querySelector('#max').value);
  

  while(base <= max){
    multiples.push(base);
    base += base;
  }

  console.log(multiples);

});

/** **************
An Agreeable Form
*************** */
document.querySelector('#agreeable-form').addEventListener('submit', (evt) => {
  evt.preventDefault();
  const food = document.querySelector('#favorite-food-input').value;
  document.querySelector('#agreeable-text').innerHTML = `I like ${food}, too!`;
});

// Your Code Here

/** ****************
Five colored primes
***************** */

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];

function isPrime(x){
  // is X prime?

  for(let i = 2; i < x; i++){
    if(x % i === 0){
      return false;
    }
  }
  return true;
}

function makePrimes(){
  let num = 2 //smallest prime
  let numFound = 0;

  while(numFound < 5){
    if(isPrime(num)){
      document.querySelector('#prime-circle-area')
      .insertAdjacentHTML(
        'beforeend', `<div class="prime-circle" 
        style="background-color:${PRIME_COLORS[numFound]}">${num}</div>`);
      numFound += 1;
    }
    num += 1;
  }
}

document.querySelector('#make-prime-circles').addEventListener('click',makePrimes);
  

/** *********
Got Puppies?
********** */

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  // get the URL for the puppy photo out of the results object
  const puppyURL = results.url;
  const puppyDiv = document.querySelector('#puppies-go-here');
  // clear anything currently in the div
  puppyDiv.innerHTML = null;
  // add the img element
  puppyDiv.insertAdjacentHTML('beforeend', `<img src=${puppyURL} alt="puppy-image">`);
}

document.querySelector('#puppy-form').addEventListener('submit', (evt) => {
   // prevent the form from triggering a page load
  evt.preventDefault();

  // get the number of puppies selected from the input
  const num = document.querySelector('#num-puppies').value;

  // make the AJAX request
  // GET requests cannot have a body so we use a query string
  fetch(`/puppies.json?num-puppies=${num}`)
    .then(response => response.json())
    .then(data => {
      showPuppies(data);
    });
});
