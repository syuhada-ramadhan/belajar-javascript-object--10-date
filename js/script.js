const waktuSekarang = new Date();
console.log(waktuSekarang);

const kemerdekaanRI = new Date(1945, 7, 17, 10, 0, 0, 0);
console.log(kemerdekaanRI);

const tanggalKemerdekaanRI = kemerdekaanRI.getDate();
console.log(tanggalKemerdekaanRI);

const tahunKemerdekaanRI = kemerdekaanRI.getFullYear();
console.log(tahunKemerdekaanRI);

kemerdekaanRI.setFullYear(2021);
console.log(kemerdekaanRI);
