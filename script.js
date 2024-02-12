// Countdown Timer Logic
let countdown = 600; // 10 minutes in seconds

function updateTimer() {
    const hours = Math.floor(countdown / 3600) + " hrs";
    const minutes = Math.floor((countdown % 3600) / 60) + " mins";
    const seconds = countdown % 60 + " secs";

    document.getElementById('timer').innerText = `${minutes < 10 ? '0' : ''}${minutes}: ${seconds < 10 ? '0' : ''}${seconds}`;

    // Smooth Countdown Effect
    const progressBar = document.getElementById('progress-bar');
    const progressWidth = ((600 - countdown) / 600) * 100; // Adjust the duration accordingly
    progressBar.style.width = `${progressWidth}%`;

    if (countdown > 0) {
        countdown--;
    } else {
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(updateTimer, 1000);

        // Smooth Scroll to Sections
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
    
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });



       
          setTimeout(function () {
            document.getElementById('form1').classList.add('show');
        }, 15000);
        
        
        function showForm() {
            // Get the form element by its ID
            const formElement = document.getElementById('form1');
        
            // Add the 'show' class to make the form visible
            formElement.classList.add('show');
        }
        
        function closeForm() {
            // Get the form element by its ID
            const formElement = document.getElementById('form1');
        
            // Remove the 'show' class to hide the form
            formElement.classList.remove('show');
        }
        