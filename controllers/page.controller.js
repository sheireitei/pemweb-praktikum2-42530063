// Simulasi database absensi sementara
let daftarAbsensi = [
    { nama: 'Sasuke Uchiha', umur: 20, status: 'Hadir' },
    { nama: 'Gojou Satoru', umur: 21, status: 'Izin' }
];

// 1. Beranda (Normal)
exports.getBeranda = (req, res) => {
    res.render('pages/home', {
        userName: 'Administrator TI',
        fiturList: ['Routing Terisolasi', 'Controller Terpisah', 'Skalabilitas Monolith']
    });
};

// 2. Tentang Kami (Statis)
exports.getTentang = (req, res) => {
    res.render('pages/about', { pageTitle: 'Tentang Kami' });
};

// 3. Katalog Data (Sistem Absensi)
exports.getKatalog = (req, res) => {
    res.render('pages/katalog', { 
        pageTitle: 'Sistem Absensi',
        produkList: daftarAbsensi 
    }); 
};

// 4. Menerima Form POST (Nama, Umur, Status)
exports.postKatalog = (req, res) => {
    console.log(req.body);

    const { namaProduk, umurProduk, statusHadir } = req.body;
    
    if (namaProduk) {
        daftarAbsensi.push({
            nama: namaProduk,
            umur: Number(umurProduk) || 0,
            status: statusHadir || 'Hadir'
        });
    }

    res.redirect('/katalog');
};