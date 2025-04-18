const db = require('./config/db');

const pegawaiChecklist = [
    {
      "nama": "Retno Widhi",
      "ceklist": [
        "Input SAP",
        "Input Data monitoring pengadaan dan pembelian lokal Kebun di link",
        "Membuat AU31A Bahan setiap Triwulan permintaan PPAP",
        "Membuat Surat permintaan Pinjam Pakai Bahan dll di Nadine",
        "Cek Daftar Upah dari Afdeling",
        "Cek Buku Administrasi Afdeling",
        "Input Data Monitoring Sewa Kendaraan",
        "Stok Opname Bahan Gudang",
        "Input Data PADI UMKM",
        "Input Data AU31A ke Aplikasi IPS"
      ]
    },
    {
      "nama": "Sugihartono",
      "ceklist": [
        "Melayani pengambilan barang",
        "Mengisi kartu 56 K",
        "Mengisi kartu 54 K",
        "Membuat Surat Pengeluaran",
        "Pengambilan barang Dari gudang Wilayah",
        "Pengambilan barang Dari Mitra",
        "Pengambilan barang Dari Kebun Luar",
        "Membuat BA Penerimaan Barang Masuk",
        "Stock Opname Barang",
        "Mengukur Penerimaan Kayu",
        "Membuat BA Penerimaan",
        "Pengecekan Buku-Buku Afdeling"
      ]
    },
    {
      "nama": "Handik Rohman Yanto",
      "ceklist": [
        "Laporan / isi spreadsheet HKO dan estimasi produksi ke Kanreg",
        "Cek pengambilan DRC TPH",
        "Cek Sadap Tuntas",
        "Cek Hasil Timbangan di TPH",
        "Cek Penerimaan Latek di Pabrik/DRC",
        "Rekap hasil Produksi",
        "Cocokan Hasil Produksi Pabrik Vs Afdeling",
        "Laporan / isi spreadsheet Real HKO dan Produksi ke Kanreg",
        "Cek Buku Apresiasi Mandor 1, Mandor, Tap Control",
        "Rekap Format 1-7",
        "Isian Spreadsheet Evaluasi Stimual Kanreg",
        "Cek Buku - Buku Administrasi Afdeling Pabrik"
      ]
    },
    {
      "nama": "Budi Hariyono",
       "ceklist": [
        "Input Produksi Harian Kayu",
        "Monitoring Stok dan Pemenuhan Kontrak",
        "Input Link Produksi Kayu 2025",
        "Copro SAP Produksi Kayu",
        "Cek Kondisi barang di TPK, Baik Panjang log Maupun Grade Diameter log",
        "Cek Email Nadine dan Zimbra",
        "Briefing teman-teman TPK mengenai Penerimaan dari Afd maupun waktu pengiriman ke pembeli",
        "Mengawal proses pengiriman",
        "Melakukan stok opname tanggal 15",
        "Berita acara stok opname per tanggal 15",
        "Pembuatan berita acara ongkos per tanggal 15",
        "Master pencocokan penjualan kayu (SAP) akhir bulan",
        "Melakukan stok opname akhir bulan",
        "Berita acara stok opname akhir bulan",
        "Pembuatan berita acara ongkos akhir bulan",
        "Pembuatan Berita acara selesai panen",
        "Pencocokan faktur pajak dengan bagian Fico (Gayuh)",
        "Pencocokan faktur pajak dengan bagian HCM (Rahmi)",
        "Pembuatan data pendapatan per komoditi per bulan",
        "Pembuatan laporan PB 26 K Kayu log",
        "Pembuatan laporan PB 26.1 K Kayu log",
        "Kirim form monitoring pajak keluaran Coretax",
        "Pembuatan dokumen kontrak, Delivery Order",
        "Realisasi penjualan jika kontrak sudah selesai",
        "BA penyelesaian kontrak",
        "Pembuatan Surat Perintah Kerja (SPK)",
        "Pembuatan berita acara afkir",
        "Pembuatan surat permohonan penjualan",
        "Pembuatan faktur pajak keluaran Coretax",
        "Pencocokan pembayaran dengan bagian KSO (Widodo)",
        "Pembuatan Billing Revenue (BR)/pengakuan pendapatan",
        "Verifikasi Afdeling Sumber Waringin",
        "Kirim Form Permintaan Sales Order (SO) kepada Bagian MAP",
        "Pembuatan DO SAP setiap ada pengiriman",
        "Pembuatan BR SAP setiap ada pengiriman",
        "Pembuatan surat pengiriman kayu ke Mitra",
        "Mengirim bahan Ongkos TMA ke bagian HCM (Rahmi)",
        "Pembuatan surat potensi bebas kontrak per Triwulan",
        "Pembuatan surat Counter dan Negosiasi penjualan",
        "Arsip dan bendel Dokumen penjualan"
      ]
    },
    {
      "nama": "Gayuh Alam",        
       "ceklist": [
        "Membuat Kas SUPERMAN",
        "Input KAS dan BANK ke SAP",
        "Ambil Alih Biaya pada RK SAP",
        "Input SAP (Pendapatan Agro dan Pendapatan Kayu)",
        "SUPERMAN",
        "Membuat Buku Besar KAS dan BANK",
        "Membuat BA Tutup Masa KAS dan BANK",
        "Membuat Lampiran Pendukung Buku Besar KAS dan BANK",
        "Membuat Invoice Sewa Kendaraan di PADI UMKM",
        "Memasukan Bukti Kas ke Outner",
        "Membuat LM 14 2 dan ZLEGAL Analyss",
        "Menarik Data Analis LM 27 LM 13 Karet LM 13 Kayu dan LM 16",
        "Cek Saldo KAS dan BANK di SAP",
        "Cek KWH di SAP",
        "Cek Saldo Normal di SAP",
        "Cek WBS di SAP",
        "Membuku Premi di SAP",
        "Membuku BPJS-KS di SAP",
        "Membuku PPH (21 23 4 ayat 2) di SAP",
        "Clearing Pedapatan (KSO Kayu dan Agrowisata) di SAP",
        "Settle KWH",
        "Settle WO",
        "Settle Cost Center",
        "Settle WBS",
        "Settle COPRO, PP dan PM",
        "Koordinasi dengan Kantor Regional 5",
        "Membuat Peta Gis",
        "Permintaan Data dari Kantor Regional 5"
      ]
    },
    {
        "nama": "Angga Wahyuningtyas",        
        "ceklist" : [
    "Upload BKM",
    "Cocokan Rp BKM Hi vs LH",
    "Membuat reservasi bon2an tanaman MB 21",
    "Membuat pengeluaran barang ( Good Issue )",
    "Menghimpun sadap Pembelian",
    "Membuat pengajuan Modal Kerja ( Setiap masa 1 2 dan 3 )",
    "Membuat rekapan sadap tunai setiap masa 1 dan 3",
    "Pencocokan rekapan sadap tunai setiap masa 1 dan 3",
    "Membuat rekapan upah setiap masa 1 dan 3",
    "Pencocokan upah ( DU) vs BKM global",
    "Pencocokan Kg produksi dan Rp dari DU vs BKM",
    "Mengarsip Upah per masa",  
    "Mengarsip DU tunai",
    "Menghimpun program kerja ( buat otorisasi bulan berikutnya )",
    "Membuat Jadwal Pemantauan IMS ( VO6 001)",
    "Melaksanakan Pemantauan IMS  ( V06 002)",
    "Melaksanakan Pemantauan Program IMS  ( V06 003)",
    "Pelaporan Interen Ke Manager dan sekper dan hukum Reg 5",
    "Membuat rekapan premi KHL Kantor",
    "Update pohon aneka kayu dan  karet ( SAP )", 
    "Update sasaran mutu sasaran lingkungan dan program lingkungan",
    "Verifikasi administrasi Afd. Dampar",
    "Mengerjakan V06 001 IMS",
    "Mengerjakan V01 002 IMS",
    "Mengerjakan V01 003 IMS",
    "Mengerjakan V01 004 IMS",
    "Mengerjakan V01 005 IMS",
    "Mengerjakan V01 006 IMS",
    "Mengerjakan V01 007 IMS",
    "Mengerjakan V01 008 IMS",
    "Mengerjakan V01 009 IMS",
    "Mengerjakan V01 010 IMS",
    "Mengerjakan V01 011 IMS",
    "Aspek Penting Lingkungan",
    "Sasaran K3",
    "Sasaran Lingkungan",
    "Sasaran Mutu",
    "Program Manajemen Lingkungan",
    "Membuat projec ( kalau ada TTI )",
    "Mengisi isian spreadsheet IMS",
    "Mengisi pengajuan moker khusus tunai dan realisasi"
      ]
    },
    {
     "nama": "Agung Aditya",     
     "ceklist": [
    "Memeriksa semua pengeluaran langsung sebelum menjadi kas",
    "Memeriksa bukti kas masuk dan keluar",
    "Memeriksa buku kas harian",
    "Memeriksa buku kas 10 harian per masa",
    "melakukan kas opname setiap akhir bulan",
    "Menyiapkan kebutuhan permintaan modal kerja secara periodik",
    "Merencanakan pembayaran gaji dan upah karyawan",
    "Memeriksa pengajuan permintaan bahan dan barang",
    "Melaksanakan stock opname persediaan bahan dan barang",
    "Memeriksa pengajuan permintaan bahan dan barang Agrowisata",
    "Memeriksa laporan keuangan agrowisata (pendapatan dan biayaMenjalankan tugas khusus dari atasanMelakukan pembinaan dan pemgembangan SDM)",
    "Support dan motivasi",
    "Melakukan penilaian kinerja/evaluasi"
      ]
    },
    {
     "nama": "Nuraeni",     
     "ceklist": [
    "Pembuatan surat",
    "Mengerjakan daftar upah karyawan karpim & karpel (Potongan, Premi)",
    "Laporan Pensiunan dan BPJS Kesehatan Pensiunan",
    "Foto SKD Pensiunan",
    "Setaiap (April-Juli) dan (Oktober - Desember)",
    "BPJS Ketenagakerjaan",
    "Mengerjakan Permintaan Kanreg",
    "Terima tamu dari instansi lain",
    "Kroscek buku kas Golf & GAS",
    "Mengerjakan payroll karyawan karpim & karpel",
    "Mengerjakan THR & BHR",
    "Mengerjakan Tanggungan karyawan kepada perusahaan",
    "Mengerjakan laporan pengosongan rumah dinas",
    "Mengerjakan Bonus, remonerasi dll",
    "Memasukkan BBD",
    "Mempersiapkan segala sesuatu klo ada rapat/pertemuan",
    "Kroscek Buku afdeling",
    "Mengerjakan LKS Bipartit",
    "Mengerjakan PHI",
    "Mengerjakan Penilaian Karyawan APMS",
    "Mengerjakan data personalia",
    "Mengerjakan dan membayar kary yang menerima SHT dll",
    "Mengerjakan permintaan Disnaker",
    "SP.Bun",
    "Melaksanakan tugas tugas lain dari manajer askep astuu"
     ]
    },
    {
      "nama": "Dodo Yuono",      
      "ceklist": [
        "Cek aplikasi Nadien/email surat masuk (bila ada surat masuk terkait KSO dari MAP)",
        "Membuat tindak lanjut sesuai surat",
        "Membuat SPTA online pada aplikasi  Prodis (Saat panen)",
        "Monitoring produksi tebu (saat panen)",
        "Pengecekan Daftar Upah (DU) dengan Buku potongan",
        "Pengecekan dan pencocokan Buku Administrasi Afd. dengan LH Akhir Bulan",
        "Pengecekan laporan sewa kendaraan",
        "Evaluasi pembayaran dan pendapatan KSO",
        "Monitoring profit sharing/membuat tagihan profit sharing",
        "Membuat pengajuan KSO bila ada pengajuan dari mitra KSO",
        "Aploud dokumen pengajuan yang telah divalidasi ke Simon KSO",
        "Update spreedsheet monitoring KSO Bagian Tanaman Regional 5",
        "Membuat surat-surat Negosiasi KSO,  ke Mitra dan MAP Regional 5",
        "Pengukuran areal KSO setelah ada penetapan",
        "Cek areal KSO Pasca tanam",
        "Membuat Berita Acara hasil pengukuran areal dan Berita Acara pengecekan areal",
        "Membuat Perjanjian Kerja Sama Operasional",
        "Membuat surat Penagihan pembayaran KSO ke Mitra KSO",
        "Membuat Berita Acara penyelesaian panen dan Berita Acara penyerahan lahan",
        "Scan dok. Aploud dokumen BA Ukur, PKS dan bukti pembayaran  ke Simon KSO",
        "Membuat surat ke Regional 5",
        "Kunjungan ke mitra penyelesaian NKM"     
      ]
    },
    {
      "nama": "Rahmi Tri Utami",      
      "ceklist": [
    "Mengerjakan Buku Rol",
    "Membuat LH",
    "Mengerjakan BKM",
    "Input BKM di SAP",
    "Menghimpun LH Afdeling",
    "Membuat SPD",
    "Input BPD",
    "Membuat pengajuan modal kerja KHL",
    "Menyiapkan pengajuan premi KHL dan potongan koperasi KHL",
    "Membuat Daftar Upah KHL",
    "Membuat Slip Gaji KHL",
    "Menyiapkan Natura Karyawan",
    "Input Potongan dan Premi Afdeling di Checkroll",
    "Posting Checkroll",
    "Membuat Slip Gaji Kartap",
    "Membuat Kontribusi BUMN Pajak",
    "Menyiapkan bukti potong PPh 21 23 dan 4 ayat2",
    "Lapor Pajak pph 21 23 dan 4 ayat 2",
    "Mengecek DU afdeling",
    "Mengecek Administrasi afdeling",
    "Stock Opnam Kayu",
    "Membuat LU8 DIKLAT",
    "Menghimpun DU Afdeling",
    "Mengerjakan LM 67 KHL",
    "Membuat bon barang",
    "Foto SKD Pensiunan",
    "Mengecek bukti potong per karyawan untuk pph 21"
      ]
    },
    {
      "nama": "Endar Setyo Budi",      
      "ceklist": [
    "Input data LHP per mutu dilink Bagian Tanaman Regional 5", 
    "Menyiapkan data rapat Evaluasi 2024 dan Rencana Kerja 2025", 
    "Mengikuti rapat Evaluasi 2024 dan Rencana Kerja 2025 via zoom", 
    "Buat faktur pengiriman produksi Sheet", 
    "Monitoring proses pengiriman produksi Sheet", 
    "Buat faktur dan monitoring proses pengiriman produksi lump, GT & Limbah", 
    "Buat memo laporan TTI kayu ke Bagian Tanaman Regional 5",
    "Scan data-data lampiran memo laporan BA TTI kayu",
    "Monitoring BA penyelesain TTI Kayu 2024 dari Afdeling",
    "Input data monitoring pemeliharaan kayu dilink HO",
    "Input data inventaris aneka kayu TP dan TDP dilink HO", 
    "Input data inventaris KSO kayu KTI dilink Bagian Tanaman Regional 5", 
    "Stock opname produksi pabrik", 
    "Cek buku-buku administrasi Afdeling Kalibajing", 
    "Input nilai buku aneka kayu TP dan TDP dilink HO", 
    "Input data aneka kayu untuk KJPP dilink Bagian Tanaman",
    "Buat memo penilaian investasi tanaman kayu semester II tahun 2024",
    "Monitoring Penilaian Investasi Tanaman Semester II 2024", 
    "Mengerjakan LM 52H Kayu",
    "Cek buku-buku administrasi Afdeling Kalibajing", 
    "Input data inventaris aneka kayu TP dan TDP dilink HO", 
    "Input data inventaris KSO kayu KTI dilink Bagian Tanaman Regional 5"
      ]
    },

    {
      "nama": "Purwanto",
      "ceklist": [
 "Kroscek inputan produksi antara PB39 & PB40 dengan inputan afdeling", 
 "Input curah hujan dari afdeling ke link KanReg",
 "Input produksi super infer link KanReg", 
 "Memastikan spreadsheet diisi afdeling", 
 "Bulanan/Mingguan/Masa", 
 "Menyiapkan data per tapper masa I (challenge)", 
 "Stock Opname produksi karet", 
 "Dropping moker ke afdeling", 
 "Mengecek buku himpunan afdeling (pendampingan admnistrasi afdeling)", 
 "Membuat google drive ( Produksi per TT Produksi per penyadap Evaluasi Stimulansia CH)",
 "Mutasi areal per bulan",
 "Input produksi dan HKO per TT LM52 LM 53 ke link KanReg",
 "Input biaya per penyadap ke link KanReg", 
 "Input PICA Karet ke link KanReg",
 "Himpun program kerja dari afdeling menjadi Otorisasi", 
 "Selayang Pandang", 
 "Menghimpun LM (Laporan Manajemen)",
 "Menghimpun PPAP (Permintaan Pelaksanaan Anggaran Perusahaan)", 
 "Menghimpun RKAP (Rencana Kebutuhan Anggaran Perusahaan)", 
 "Buat surat/Memo hal tanaman karet ke Afdeling/KanReg", 
 "Operator evaluasi kinerja", 
 "Menyiapkan bahan rapat zoom meeting terkait kebun entres", 
 "Menyiapkan bahan rapat zoom meeting terkait evaluasi kinerja", 
 "Gotong royong pekerjaan cuci getah tanah di pabrik",
 "Mendampingi treatment pekerjaan bulan Maret dengan Krani afdeling",
 "Menghimpun evaluasi kinerja triwulan I",
 "Pencocokan produksi inferior antara pabrik dengan afdeling", 
 "Input RKAP dan Realisasi pekerjaan penting link Kanreg"
      ]
    },
{
      "nama": "Null",      
      "ceklist": [

      ]
},
{
    "nama": "Null",    
    "ceklist": [

    ]
},
{
    "nama": "Null",    
    "ceklist": [

    ]
},
{
    "nama": "Null",    
    "ceklist": [

    ]
},
{
    "nama": "Null",
    "ceklist": [

    ]
}
];

function seedChecklist() {
  pegawaiChecklist.forEach((pegawai) => {
    pegawai.ceklist.forEach((task) => {
      const sql = 'INSERT INTO checklist (nama, task, status) VALUES (?, ?, ?)';
      db.query(sql, [pegawai.nama, task, 'pending'], (err, result) => {
        if (err) {
          console.error('Error inserting checklist item:', err);
        } else {
          console.log('Inserted checklist item:', pegawai.nama, task);
        }
      });
    });
  });
}

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
  console.log('Connected to database.');
  seedChecklist();
  setTimeout(() => {
    db.end();
    console.log('Database connection closed.');
  }, 2000);
});
