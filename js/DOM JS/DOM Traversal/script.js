// // Event Handling

// const close = document.querySelector('.close');
// const card = document.querySelector(".card");

// // Jika tombol x diklik maka akan hilang
// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });

//================================================
// Menghilangkan div dengan tanda x
// // Dom Traversal
// const close = document.querySelectorAll('.close');

// for(let i = 0 ; i < close.length; i ++){
//     close[i].addEventListener('click', function (){ 
//         close[i].parentElement.style.display = 'none';
//     });
// }

//================================================
// Menghilangkan div dengan tanda x
// // Dom Traversal
// const close = document.querySelectorAll('.close');

// for(let i = 0 ; i < close.length; i ++){
//     close[i].addEventListener('click', function (e){
//         e.target.parentElement.style.display = 'none';
//     });
// }

//================================================

// Menghilangkan div dengan tanda x
// const close = document.querySelectorAll('.close');

// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//     });
// })

//================================================

const nama = document.querySelector('.nama');
console.log(nama.parentNode);