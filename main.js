onload = () =>{
        document.body.classList.remove("container");
};


const moon = document.getElementById('moon');
const pergamino = document.getElementById('pergamino');

moon.addEventListener('click', () => {
    if (pergamino.classList.contains('active')) {
        pergamino.classList.remove('active');
    } else {
        pergamino.classList.add('active');
    }
});

document.addEventListener('click', (event) => {
    if (!pergamino.contains(event.target) && event.target !== moon) {
        pergamino.classList.remove('active');
    }
});

