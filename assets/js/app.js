
const startBtn = document.getElementById('startBtn');
const offcanvas = document.getElementById('offcanvas');
const progressBar = document.getElementById('progress');
const toggleBtn = document.getElementById('toggleBtn');
let progressValue = 0;
let progressInterval;
let isOffcanvasVisible = true;


startBtn.addEventListener('click', () => {
    offcanvas.classList.add('show');
    isOffcanvasVisible = true;
    startProgress();
});


function startProgress() {
    progressValue = 0;
    progressInterval = setInterval(() => {
        progressValue += 1;
        progressBar.style.width = progressValue + '%';

        if (progressValue === 100) {
            clearInterval(progressInterval);
            offcanvas.classList.remove('show');
            isOffcanvasVisible = false;
            alert('Migration process completed.');
        }
    }, 100); 
}


toggleBtn.addEventListener('change', () => {
    if (toggleBtn.checked) {
        if (!isOffcanvasVisible) {
            offcanvas.classList.add('show');
            isOffcanvasVisible = true;
        }
    } else {
        if (isOffcanvasVisible) {
            offcanvas.classList.remove('show');
            isOffcanvasVisible = false;
        }
    }
});
