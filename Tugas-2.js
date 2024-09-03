//1. Cek Ganjil atau Genap
function cekGanjilGenap(angka) {
    if(angka % 2 === 0) {
        return 'Genap'
    } else {
        return 'Ganjil'
    }
}

console.log(cekGanjilGenap(2));
console.log(cekGanjilGenap(1));

//2. Cek Lulus atau Tidak Lulus
function cekLulus(nilaiUjian) {
    if (nilaiUjian >= 70) {
        return 'LULUS'
    } else {
        return 'TIDAK LULUS'
    }
}

console.log(cekLulus(80));
console.log(cekLulus(69));


//3. Cek Kategori Usia
function cekKategoriUsia(usia) {
    if (usia <= 12) {
        return 'Anak-anak'
    } else if (usia >=13 && usia <= 17) {
        return 'Remaja'
    } else if (usia >=18 && usia <= 55) {
        return 'Dewasa'
    } else if (usia > 50) {
        return 'Lansia'
    } else {
        return 'Usia Tidak Valid';
    }
}

console.log(cekKategoriUsia(12))
console.log(cekKategoriUsia(17))
console.log(cekKategoriUsia(55))
console.log(cekKategoriUsia(80))

//4.Mengembalikan Array
function balikArray(arrayAngka) {
    return arrayAngka;
}

const angka = [1, 2, 3, 4, 5];
console.log(balikArray(angka));


//5. Mancari Nilai Tertinggi dalam Array
function cariNilaiTertingi (arrayAngka) {
    let NilaiTertingi = arrayAngka [0];

    for (let i=1; i < arrayAngka.length; i++) {
        if (arrayAngka[i] > NilaiTertingi) {
            NilaiTertingi=arrayAngka[i];
        }
    }
    return NilaiTertingi;
}

const arrayAngka = [6, 8, 3, 7, 4, 9];
console.log(cariNilaiTertingi(arrayAngka));

//6. Urutan Elemen yang terbalik dalam Array
function nilaiBalik(params) {
    return params.reverse();
}

const balik = [1, 2, 3, 4, 5];
console.log(nilaiBalik(balik));


//7. Memisahkan angka ganjil dan genap
function pisahGanjilGenap(ganjilGenap) {
    const arrayGanjil = [];
    const arrayGenap = [];

    ganjilGenap.forEach((paramsAngka) => {
        if (paramsAngka % 2 === 0) {
            arrayGenap.push(paramsAngka);
        } else {
            arrayGanjil.push(paramsAngka);
        }
    });
    return {arrayGanjil, arrayGenap};
}

const paramsAngka = [1, 2, 3, 4, 5, 6, 7, 8];
const hasil = pisahGanjilGenap(paramsAngka);

console.log(hasil.arrayGanjil);
console.log(hasil.arrayGenap);

//8. Membuat daftar Produk dan menghitung total belanja
const warung = {
    daftarProduk: [],
    tambahProduk: function (produk) {
        this.daftarProduk.push(produk);
    },

    hitungTotalProduk: function () {
        return this.daftarProduk.length;
    },

    hitungTotalHarga: function () {
        let totalHarga = 0;

        this.daftarProduk.forEach(function(produk) {
            totalHarga += produk.harga;
        });
        
        return totalHarga;
    },
};

warung.tambahProduk({nama: 'Gula', harga: 8000});
warung.tambahProduk({nama: 'Minyak Goreng', harga: 16000});
warung.tambahProduk({nama: 'Tepung', harga: 5000});
warung.tambahProduk({nama: 'Rokok Surya 16', harga: 36000});
warung.tambahProduk({nama: 'Tempe', harga: 1000});

console.log('Daftar Produk:', warung.daftarProduk);

console.log('Total Produk:', warung.hitungTotalProduk());
console.log('Total Harga:', warung.hitungTotalHarga());
