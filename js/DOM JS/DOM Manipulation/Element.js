// Manipulation element


// === innerHTML === 
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Rizky Hertama</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf1</p></div>';


// === element.style.<propertiCSS> ===
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'black';


// === element.getAttribute() dan element.setAttribute() dan element.removeAttribute() ===
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'Rizky');

// //untuk ditulis di console
// judul.getAttribute('id');
// a.removeAttribute('href');


// === classList ===
// const p2 = document.querySelector('.p2');

// //untuk ditulis di console
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label'); //ngecek apakah p2 sudah memiliki class label? kalo udah delete kalo belum tambahkan