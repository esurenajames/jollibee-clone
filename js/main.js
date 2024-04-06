let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Check if new chat session flag exists
const isNewChat = localStorage.getItem("isNewChat");

// If new chat, clear history and set flag
if (isNewChat === "true") {
  // Implement your logic to clear chat history (specific code depends on ChatBot.com's API)
  localStorage.setItem("isNewChat", "false");
}