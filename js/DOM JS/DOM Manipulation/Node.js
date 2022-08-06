// Node manipulation

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');
pBaru.appendChild(teksPBaru); // simpan tulisan ke dalam paragraf

const sectionA = document.getElementById('a'); //simpan pBaru di akhir section a
sectionA.appendChild(pBaru);


//=======================================================

const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('Halo bandung');
liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//=======================================================

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);



//=======================================================

const sectionB = document.getElementById('b'); 
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = documennt.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen';