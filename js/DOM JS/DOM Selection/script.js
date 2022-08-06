// // DOM selection

// // getElementById() -> element
// const judul = document.getElementById("judul");
// judul.style.color = 'red';
// judul.style.backgroundColor = 'black';
// judul.innerHTML = "Rizky";


// // getElementByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
// p[1].style.backgroundColor = 'lightgreen';

// for(let i = 0 ; i< p.length; i++){
//     p[i].style.backgroundColor = 'lightgreen';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // getElementByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = "ini diubah dari js"

// // querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'brown';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'magenta';

// // querySelectorAll() -> element node list
// const p = document.querySelectorAll('p');
// p[3].style.backgroundColor = 'magenta';
// for(let i = 0 ; i< p.length; i++){
//     p[i].style.backgroundColor = 'yellow';
// }


//


const sectionB = document.getElementById('b');

const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = "lightgreen";