// //inline html attribute
// const p3 = document.querySelector('.p3');

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'lightblue';
// }

// // ========================================================

// //Element Method
// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightgreen';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2();

// // ========================================================

// //-	addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const LiBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     LiBaru.appendChild(teksLiBaru);
//     ul.appendChild(LiBaru);
// });


// ========================================================

const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function(){
//     p3.style.color = 'red';
// }

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
});


// p3.addEventListener('click', function() {
//     p3.style.color = 'red';
// });


// ========================================================