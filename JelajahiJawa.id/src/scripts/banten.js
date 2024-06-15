document.addEventListener('DOMContentLoaded', function() {
let adatIndex = 0, tradisiIndex = 0, seniIndex = 0, bahasaIndex = 0, nilaiBudayaIndex = 0;

const adatData = [
    {
        title: "1. Adat Ngawalu",
        desc: "Ngawalu bertujuan untuk mensyukuri hasil panen yang telah didapat. Jika mengikuti sejarahnya, sebetulnya upacara ini dikhususkan untuk Dewi Padi, sesuai dengan kepercayaan Sunda Kuno",
        img: "../../asset/img-banten/ngawalu.jfif",
    },
    {
        title: "2. Upacara Adat Pernikahan",
        desc: "Upacara adat pernikahan di Banten melibatkan tradisi seperti ngidih (mengajukan lamaran), ngarep surung (pertemuan kedua belah pihak), serangkaian ritual adat (sajen, siraman, sungkeman), akad nikah, resepsi pernikahan, dan mappaci (berbagi makanan kepada tetangga). Tradisi ini kaya akan nilai-nilai kearifan lokal dan turun-temurun.",
        img: "../../asset/img-banten/pernikahan.jfif",
    },
    {
        title: "3. Upacara Seba",
        desc: "Upacara Seba adalah rangkaian terakhir dari upacara Suku Baduy untuk mensyukuri hasil panen mereka. Seba berarti juga persembahan, menyimbolkan bahwa dalam upacara ini, Suku Baduy mempersembahkan hasil panen mereka kepada pemerintah. Hal ini juga menunjukkan loyalitas Suku Baduy kepada pemerintah.",
        img: "../../asset/img-banten/seba.jfif",
    },
    {
        title: "4. Upacara Ngalaksa",
        desc: "Upacara ini biasanya sangat meriah dan penuh kehangatan, karena masyarakat setempat akan berkumpul bersama-sama untuk merayakannya. Perayaan ini juga mereka lakukan setiap tahun. Masyarakat Baduy melaksanakan upacara Ngalaksa ini di rumah Dangka tetua adat di Baduy. Pada hari itu, mereka akan bersama-sama menyantap laksa, yaitu makanan yang terbuat dari tepung beras.",
        img: "../../asset/img-banten/ngalaksa.jfif",
    },
];

const bahasaData = [
    {
        title: "1. Bahasa Sunda Banten",
        desc: "Bahasa Sunda adalah bahasa daerah yang paling banyak digunakan di Banten. Bahasa ini dituturkan oleh sekitar 80% penduduk Banten. Bahasa Sunda banyak digunakan masyarakat di wilayah Kabupaten Lebak, Pandeglang, sebagian masyarakat Kabupaten/Kota Serang, dan sebagian masyarakat di Kabupaten Tangerang."
    },
    {
        title: "2. Bahasa Jawa Banten",
        desc: "Bahasa Jawa Banten yang juga dikenal bahasa Jawa Serang (Jaseng) adalah bahasa daerah yang juga banyak digunakan di Banten. Bahasa ini dituturkan oleh sekitar 15% penduduk Banten. Bahasa Jawa Banten banyak digunakan masyarakat di Kota Serang, Kabupaten Serang, Kota Cilegon, dan sebagian kecil di wilayah Kabupaten Tangerang."
    },
    {
        title: "3. Bahasa Melayu Betawi",
        desc: "Bahasa Melayu adalah bahasa daerah yang digunakan oleh masyarakat Banten di wilayah Kabupaten Tangerang, Kota Tangerang, dan Kota Tangerang Selatan. Bahasa ini merupakan bahasa yang termasuk dalam rumpun bahasa Austronesia."
    },
    {
        title: "4. Bahasa Lampung Cikoneng",
        desc: "Bahasa Lampung Cikoneng merupakan dialek dari bahasa Lampung yang digunakan oleh masyarakat di daerah Cikoneng, Banten. Bahasa ini memiliki ciri khas tersendiri dan digunakan dalam interaksi sehari-hari oleh komunitas yang tinggal di wilayah tersebut."
    },
    {
        title: "5. Bahasa Tionghoa",
        desc: "Bahasa Tionghoa atau Mandarin juga digunakan oleh sebagian masyarakat di Banten, terutama oleh komunitas Tionghoa-Indonesia. Bahasa ini biasanya digunakan dalam keluarga, komunitas, dan kegiatan keagamaan atau kebudayaan tertentu."
    }

];

const seniData = [
    {
        title: "1. Debus Surosowan",
        desc: "Debus Surosowan menjadi salah satu kesenian yang paling populer dari Banten. Bukan hanya di kalangan masyarakatnya saja, namun kesenian yang satu ini bahkan dikenal hingga seluruh nusantara. Debus merupakan atraksi yang dilakukan dengan menggunakan benda tajam, seperti: golok, paku, air keras, dan yang lainnya.",
        img: "../../asset/img-banten/debu.jfif"
    },
    {
        title: "2. Rudat",
        desc: "Rudat merupakan salah satu jenis tarian yang diiring dengan alat musik yang khas. Kesenian Banten yang unik ini dimainkan dengan bantuan beberapa alat musik unik, seperti: ganjring, rebana, bahkan kecrekan yang bisa memberikan suara khas. Perpaduan alat-alat musik ini akan menghasilkan irama musik Arab yang khas dan harmonis.",
        img: "../../asset/img-banten/rudat.jfif"
    },
    {
        title: "3. Patingtung",
        desc: "Patingtung dikenal sebagai usik pengiring untuk tarian khas pencak silat. Alat musik ini juga dikenal dengan nama kendang pencak. Perangkat ini terdiri dari 2 buah kendang kecil, 1 buah gong kecil, serta sebuah kulenter. Biasanya patingtung akan ditabuh untuk mengiringi pertunjukan aksi para pesilat yang sedang memperagakan berbagai jurus tradisional.",
        img: "../../asset/img-banten/patingtung.jfif"
    },
    {
        title: "4. Dzikir Saman",
        desc: "Pada awalnya, kesenian Dzikir Saman tumbuh dan berkembang dibawa oleh para ulama ketika sedang menyebarkan agama Islam di Banten. Dalam perkembangannya, kesenian ini sudah banyak mengalami perubahan.",
        img: "../../asset/img-banten/dzikir.jfif"
    },
    
    {
        title: "5. Ketimpring",
        desc: "Ketimpring merupakan alat musik berbetuk rebana dengan jumlah 12 buah. Perangkat ini terdiri dari terbang kecil maupun terbang besar dan ditabuh bersamaan dengan lantunan pujian dalam bahasa Arab. Ada 4 alat utama dalam ketimpring, yaitu: indung, pancer, penyela, dan juga penelu.",
        img: "../../asset/img-banten/ketimpring.jfif"
    },
    
    {
        title: "6. Baca Syekh",
        desc: "Ini merupakan kesenian alam bentuk pembacaan cerita tentang kehidupan syekh Abdul Kadir Zaelani atau Umar Maya. Dalam kesenian ini, cerita akan dibacakan dalam beberapa tahap, di mana dalam setiap tahap akan diberi penjelasan.",
        img: "../../asset/img-banten/baca-syekh.webp"
    },
    
    {
        title: "7. Panjang Mulud",
        desc: "Ritual yang satu ini biasanya dilakukan untuk memperingati Maulid Nabi Muhammad SAW. Dalam ritual ini akan dibuat panjang berisi berbagai makanan serta telur yang berhiaskan kertas krep.",
        img: "../../asset/img-banten/panjang.jfif"
    },
    
    {
        title: "8. Mawalan",
        desc: "Kesenian musik ini menggunakan beberapa buah rebana dan dimainkan oleh 6-8 orang. Mawalan biasanya diawali dengan lantunan ayat-ayat suci terlebih dahulu sebagai pembuka. Kesenian ini bisa dimainkan oleh pria maupun wanita.",
        img: "../../asset/img-banten/mawalan.jfif"
    },
    
    {
        title: "9. Buka Pintu",
        desc: "Ini merupakan kesenian yang kerap digunakan dalam acara pernikahan. Buka pintu adalah ritual tanya jawab antara perwakilan mempelai wanita dengan perwakilan mempelai pria. Kesenian ini juga dikenal dengan nama Yalil. Kesenian ini bisa kamu jumpai, salah satunya, di Kota Cilegon.",
        img: "../../asset/img-banten/buka-pintu.jfif"
    },
];

const tradisiData = [
    {
        title: "1. Ngariung",
        desc: "Tradisi ini merupakan salah satu tradisi warga Banten yang berisikan kegiatan untuk memanjatkan doa, shalawat, dan mengaji ayat-ayat suci Al-Qur’an secara bersama-sama. Ngariung biasanya digelar untuk memperingati momen-momen spesial, seperti kelahiran bayi, akikah, dan acara syukuran lainnya.",
        img: "../../asset/img-banten/ngariung.jfif"
    },
    {
        title: "2. Ziarah",
        desc: "Tradisi ini mampu membangkitkan ekonomi masyarakat lokal dengan berjualan berbagai macam kebutuhan bagi para peziarah. Seperti menjual makanan ringan hingga makanan khas Banten, baju Muslim, serta kebutuhan lainnya.",
        img: "../../asset/img-banten/ziarah.jfif"
    },
    {
        title: "3. Ngeropok",
        desc: "Ini merupakan tradisi unik lainnya dalam memperingati Maulid Nabi dengan membuat hantaran atau parcel berukuran besar yang disebut panjang mulud. Kemudian diarak dalam sebuah pawai yang puncaknya dibagikan kepada warga masyarakat sekitar atau disebut ngeropok.",
        img: "../../asset/img-banten/ngeropok.jfif"
    }
];

const nilaiBudayaData = [
    {
        title: "1. Kebersamaan",
        desc: "Masyarakat Banten dikenal sangat menjunjung tinggi nilai kebersamaan dan gotong-royong dalam kehidupan sehari-hari."
    },
    {
        title: "2. Religiusitas ",
        desc: "Banten memiliki tradisi keagamaan yang kuat, terutama dalam Islam. Hal ini tercermin dalam berbagai ritual dan tradisi adat yang bersifat Islami."
    }
];

function nextAdat() {
    adatIndex = (adatIndex + 1) % adatData.length;
    updateAdat();
}

function prevAdat() {
    adatIndex = (adatIndex - 1 + adatData.length) % adatData.length;
    updateAdat();
}
function updateAdat() {
    const adatTitle = document.getElementById('adat-title');
    console.log(adatTitle);
    document.getElementById('adat-title').innerText = adatData[adatIndex].title;
    document.getElementById('adat-desc').innerText = adatData[adatIndex].desc;
    document.getElementById('adat-img').src = adatData[adatIndex].img;
}

function nextTradisi() {
    tradisiIndex = (tradisiIndex + 1) % tradisiData.length;
    updateTradisi();
}

function prevTradisi() {
    tradisiIndex = (tradisiIndex - 1 + tradisiData.length) % tradisiData.length;
    updateTradisi();
}

function updateTradisi() {
    document.getElementById('tradisi-title').innerText = tradisiData[tradisiIndex].title;
    document.getElementById('tradisi-desc').innerText = tradisiData[tradisiIndex].desc;
    document.getElementById('tradisi-img').src = tradisiData[tradisiIndex].img;
}

function nextSeni() {
    seniIndex = (seniIndex + 1) % seniData.length;
    updateSeni();
}

function prevSeni() {
    seniIndex = (seniIndex - 1 + seniData.length) % seniData.length;
    updateSeni();
}

function updateSeni() {
    document.getElementById('seni-title').innerText = seniData[seniIndex].title;
    document.getElementById('seni-desc').innerText = seniData[seniIndex].desc;
    document.getElementById('seni-img').src = seniData[seniIndex].img;
}

function nextBahasa() {
    bahasaIndex = (bahasaIndex + 1) % bahasaData.length;
    updateBahasa();
}

function prevBahasa() {
    bahasaIndex = (bahasaIndex - 1 + bahasaData.length) % bahasaData.length;
    updateBahasa();
}

function updateBahasa() {
    document.getElementById('bahasa-title').innerText = bahasaData[bahasaIndex].title;
    document.getElementById('bahasa-desc').innerText = bahasaData[bahasaIndex].desc;
}

function nextNilaiBudaya() {
    nilaiBudayaIndex = (nilaiBudayaIndex + 1) % nilaiBudayaData.length;
    updateNilaiBudaya();
}

function prevNilaiBudaya() {
    nilaiBudayaIndex = (nilaiBudayaIndex - 1 + nilaiBudayaData.length) % nilaiBudayaData.length;
    updateNilaiBudaya();
}

function updateNilaiBudaya() {
    document.getElementById('nilai-budaya-title').innerText = nilaiBudayaData[nilaiBudayaIndex].title;
    document.getElementById('nilai-budaya-desc').innerText = nilaiBudayaData[nilaiBudayaIndex].desc;
}

window.nextAdat = nextAdat;
window.prevAdat = prevAdat;
window.nextTradisi = nextTradisi;
window.prevTradisi = prevTradisi;
window.nextSeni = nextSeni;
window.prevSeni = prevSeni;
window.nextBahasa = nextBahasa;
window.prevBahasa = prevBahasa;
window.nextNilaiBudaya = nextNilaiBudaya;
window.prevNilaiBudaya = prevNilaiBudaya;
  
