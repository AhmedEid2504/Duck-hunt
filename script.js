const reset = document.getElementById('reset');
const ducks = document.querySelectorAll('#duck');
const score = document.getElementById('score');
let count = 0;
 
ducks.forEach(function (duck) {
    duck.addEventListener('click',function() {
        duck.classList.add('duckshot'); 
        this.src = "duckdown.jpg";
        reset.classList.add('active');
        count += 1;
        score.textContent = count  ;
        if (count % 4 == 0 ) {
            duck.classList.remove('duckshot');
        }
    });
    reset.addEventListener('click', function() {
    duck.classList.remove('duckshot'); 
    duck.src = "duck.jpg";
    reset.classList.remove('active');
    count = 0;
    score.textContent = count  ;
    });
    
    
});





