window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];

  // Add the audio element
  var audio = document.createElement("audio");
  audio.id = "birthdaySong";
  audio.src = "hpy.mp3";
  document.body.appendChild(audio);

  // Add click event listener to the chevron-down icon
  var chevronDownIcon = document.querySelector('.chevron-down');
  chevronDownIcon.style.display = 'none'; // Initially hide the chevron icon
  chevronDownIcon.addEventListener('click', function () {
    // Navigate to the second page when the chevron icon is clicked
    window.location.href = "../secondpage/index.html";
  });

  function init() {
    box.addEventListener("click", openBox, false);
  }

  function stepClass(step) {
    merrywrap.className = 'merrywrap';
    merrywrap.className = 'merrywrap step-' + step;
  }

  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      reveal();

      chevronDownIcon.style.display = 'block'; // Display the chevron icon

      $(".flame").animate({ "opacity": 0 }, 1000);
      $(".flame2").animate({ "opacity": 0 }, 1000);
      $(".flame3").animate({ "opacity": 0 }, 1000);
      $(".text").animate({ "top": -90, "opacity": 1 }, 1000);

      $(".music-note").each(function (index) {
        var musicNote = $(this);
        setTimeout(function () {
          musicNote.css("display", "flex");
        }, index * 100);
        musicNote.css("left", (index * 50) + "px");
      });

      audio.play();
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();

  function reveal() {
    document.querySelector('.merrywrap').style.backgroundColor = 'transparent';
  }
}
