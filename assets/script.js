function playSoundOnUserClick() {
  function handleUserClick() {
    var hasClicked = true;
    document.removeEventListener('click', handleUserClick);
    playSoundAfterClick(hasClicked);
  }

  document.addEventListener('click', handleUserClick);
}

function playSoundAfterClick(hasClicked) {
  if (hasClicked) {
    var audio = document.getElementById("popSound");
    audio.play();
    window.setTimeout(function() {
      audio.pause();
      audio.currentTime = 0;
    }, 50);
  }
}

function startCountdown() {
  const targetDate = new Date("February 5, 2024 09:00:00").getTime();

  // Start the countdown immediately
  updateCountdown();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // Display a message when the countdown is complete
      document.getElementById("countdown").innerHTML = "Game is available!";
    } else {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Schedule the next frame
      requestAnimationFrame(updateCountdown);
    }
  }
}

function setYoutubeLink() {
  var watchTutorialLink = document.getElementById('watchTutorialLink');

  if (/Mobi/i.test(navigator.userAgent) && window.innerWidth <= 768) {
    watchTutorialLink.href = 'youtube://www.youtube.com/watch?v=4YoLEqn2ygY&list=PLA6jTJ4xgbtNCv5xTvnos96Dv-PDJ5s9k&feature=applinks';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setYoutubeLink();

  if (window.innerWidth > 768) {
    document.getElementById('coverImg').addEventListener('click', playSoundOnUserClick);
    document.getElementById('coverImg').addEventListener('mouseover', playSoundOnUserClick);

    document.getElementById('rulebookLink').addEventListener('mouseover', playSoundOnUserClick);
    document.getElementById('buyGameLink').addEventListener('mouseover', playSoundOnUserClick);
    document.getElementById('watchTutorialLink').addEventListener('mouseover', playSoundOnUserClick);

    playSoundOnUserClick();
    startCountdown();
  }
});
