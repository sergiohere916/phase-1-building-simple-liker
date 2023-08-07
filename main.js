// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.getElementById("modal");
errorDiv.className = "hidden";
let heartSpanElements = document.getElementsByClassName("like-glyph");
let newHeartElemnts = Array.from(heartSpanElements);
// console.log(newHeartElemnts);
newHeartElemnts.forEach(heartEl => {
  heartEl.addEventListener("click", (e) => {
    mimicServerCall("http://mimicServer.example.com")
    .then( res => {
      if (heartEl.className === "activated-heart") {
        heartEl.className = "like-glyph";
        heartEl.textContent = EMPTY_HEART;
      } else if (heartEl.className = "like-glyph") {
        heartEl.className = "activated-heart";
        heartEl.textContent = FULL_HEART;
      }
    })
    .catch(error => {
      errorDiv.classList.remove("hidden"); //try .remove() to see if it removes node or just class
      setTimeout(() => {
        errorDiv.className = "hidden";
      }, 3000);
    })
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
