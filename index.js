const select = document.querySelector('.btn');

select.addEventListener('click',function() {

     const r = Math.floor(Math.random() * 255);
     const g = Math.floor(Math.random() * 255);
     const b = Math.floor(Math.random() * 255);


     const changedcolor = `rgb(${r}, ${g}, ${b})`;

     document.body.style.backgroundColor = changedcolor;

})