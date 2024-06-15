document.addEventListener('DOMContentLoaded', function() {
    let adatIndex = 0, tradisiIndex = 0, seniIndex = 0, bahasaIndex = 0, nilaiBudayaIndex = 0;
    
    const adatData = [
        {
            title: "1. Bikin Rume",
            desc: "Ritual ini dilakukan sebelum membangun rumah untuk menentukan tata letak rumah sesuai dengan feng shui. Tujuannya agar rumah yang akan didirikan membawa keberkahan dan terhindar dari musibah      Dalam ritual bikin rume, pemilik rumah harus memilih kayu tertentu yang nantinya digunakan sebagai dasar pembuatan rumah. Meskipun tampak sepele, ritual ini sangat penting bagi suku Betawi.",
            img: "../../asset/img-jakarta/bikin-rume.jfif"
        },
        {
            title: "2. Upacara Adat Pernikahan",
            desc: "Upacara ini digelar setelah kedua pasangan memutuskan untuk melangkah ke jenjang yang lebih serius, yakni pernikahan. Sebelum upacara pernikahan berlangsung, calon mempelai wajib melakukan ritual bawa tande putus, masa dipiare, siraman, malem mangkat lebih dulu. Setelahnya, calon mempelai pria akan datang menggunakan andong bersama rombongan membawa seserahan",
            img: "../../asset/img-jakarta/pernikahan.webp",
        },
        {
            title: "3. Pinde Rume",
            desc: "Bagi suku Betawi, pindahan rumah tak sekadar memindahkan barang dari rumah lama ke rumah baru, melainkan lebih daripada itu.Dalam prosesi pinde rume, pihak yang hendak pindah harus mengambil tanah dari pekarangan rumah lama dan dibungkus dalam kain putih. Nantinya, tanah ini akan disebarkan di pekarang rumah baru. Tujuannya agar aura keberkahan pemilik rumah baru tidak berubah.",
            img: "../../asset/img-jakarta/pinde-rume.jfif",
        },
        {
            title: "4. Ngelamar",
            desc: "Dalam acara ini, calon mempelai pria akan datang mengunjungi rumah calon mempelai wanita bersama rombongan dengan berjalan kaki. Pihak calon mempelai pria datang dengan membawa berbagai macam hadiah bagi calon mempelai wanita, seperti cincin pertunangan, aneka buah, hingga roti buaya. Umumnya, setelah kedua belah pihak bertemu, acara ini dilanjutkan dengan ramah tamah dan makan bersama. Prosesi ngelamar wajib dilakukan sebelum kedua calon mempelai memutuskan untuk menikah.",
            img: "../../asset/img-jakarta/ngelamar.webp",
        },
        {
            title: "5. Nginjak Tanah",
            desc: "Dilakukan ketika seorang bayi telah mampu menginjakkan kakinya di tanah. Dalam prosesi ini, anak akan dibawa menaiki tujun anak tangga yang dibuat dari tanaman tebu. Setelah proses tersebut, anak akan dipancing untuk memasuki sebuah kurungan yang telah dilengkapi berbagai macam hadiah. Konon, benda yang pertama kali diambil si anak akan menuntunnya di masa depan.",
            img: "../../asset/img-jakarta/nginjak-tanah.jpeg",
        },
    ];

    const tradisiData = [
        {
            title: "1. Nyorong",
            desc: "Nyorog merupakan tradisi membawakan makanan oleh orang yang lebih muda ke rumah saudaranya yang lebih tua atau dituakan. Nyorog sendiri merupakan bahasa Betawi yang artinya menghantar. Tradisi ini biasa dilakukan sepekan sebelum puasa. Biasanya anggota keluarga yang lebih muda akan membawa bingkisan (sorogan) yang meliputi sembilan bahan pokok atau sembako seperti beras, telur, gula, kopi atau makanan lainnya.",
            img: "../../asset/img-jakarta/nyorong.jfif",
        },
        {
            title: "2. Palang Pintu",
            desc: "Palang Pintu merupakan tradisi yang menjadi bagian dari upacara pernikahan masyarakat Betawi. Palang pintu menggabungkan seni beladiri dengan seni sastra pantun. Dalam tradisi ini, jawara yang bertindak sebagai perwakilan mempelai laki-laki dan perempuan akan saling menunjukan kemampuan memperagakan gerakan silat dan melontarkan pantun satu sama lain.Tradisi palang pintu menyimbolkan ujian yang harus dilalui mempelai laki-laki untuk meminang pihak perempuan. Jawara dari daerah asal laki-laki harus bisa mengalahkan jawara yang berasal dari daerah tempat tinggal perempuan.",
            img: "../../asset/img-jakarta/palang-pintu.jfif"
        },
        {
            title: "3. Roti Buaya",
            desc: "Tradisi ini menggunakan roti berbentuk buaya sebagai barang wajib saat upacara pernikahan masyarakat Betawi. Biasanya panjang Roti Buaya mencapai 50 sentimeter sampai 1 meter dan dibawa oleh mempelai pria saat acara pernikahan.Roti Buaya sendiri merupakan inspirasi dari tingkah buaya yang hanya kawin sekali seumur hidup mereka sehingga masyarakat Betawi mengharapkan dengan adanya tradisi ini pernikahan bisa langgeng dan pasangan akan saling setia satu sama lain. Dulunya, Roti Buaya ini juga merupakan lambang kehandalan dan dianggap sebagai makanan golongan atas. Biasanya, mempelai pria membawa sepasang Roti Buaya yang berbentuk buaya besar dan buaya kecil yang diletakkan di atas Roti Buaya besar yang disimbolkan sebagai buaya wanita.",
            img: "../../asset/img-jakarta/roti-buaya.jpg"
        },
    ];

    const seniData = [
        {
            title: "1. Seni Sastra",
            desc: "Sastra Betawi adalah sebuah karya sastra berupa tulisan, yang menggunakan bahasa Betawi. Karya sastra Betawi adalah kesenian yang dibuat dan disampaikan juga oleh orang Betawi. Penyampaian dari kesenian Betawi ini juga disampaikan dalam bahasa Betawi.",
            img: "../../asset/img-jakarta/seni-sastra.jpg"
        },
        {
            title: "2. Seni Bela Diri",
            desc: "Pencak silat adalah sebuah seni bela diri yang juga bisa dikatakan sebagai olahraga. Pencak silat yang ada di tengah-tengah masyarakat sangat beragam. Bahkan, bisa dikatakan setiap gang memiliki silat yang berbeda. Beberapa contoh pencak silat Betawi seperti Silat Beksi, Silat Kancing 7 Bintang 12 Naga Berenang, Silat Tiga Berantai, Silat Sabeni, Silat Cingkrik, Silat Silo Macan dan Silat Cacag Lembang.",
            img: "../../asset/img-jakarta/seni-beladiri.jfif"
        },
        {
            title: "3. Seni Teater",
            desc: "Seni teater dari DKI Jakarta mencerminkan kekayaan budaya dan tradisi masyarakat Betawi yang unik dan beragam. Pertunjukan-pertunjukan ini tidak hanya menjadi hiburan, tetapi juga sarana untuk melestarikan dan mengenalkan budaya Betawi kepada generasi muda dan masyarakat luas.",
            img: "../../asset/img-jakarta/lenong.jpg"
        },
        {
            title: "4. Seni Musik",
            desc: "Seni musik dari DKI Jakarta mencerminkan keragaman budaya Betawi yang merupakan perpaduan berbagai pengaruh dari budaya lokal dan asing. Seperti Gambang Kromong,Tanjidor, Keroncong, Marawis, Keroncong Betawi, Orkes Samrah,    Gambus Betawi,  Qasidah Betawi,   Dangdut Betawi, Rebana Ketimpring",
            img: "../../asset/img-jakarta/seni-musik.jfif"
        },
        {
            title: "5. Seni Tari",
            desc: "Masyarakat Betawi juga memiliki seni tari di daftar keseniannya. Seni tari tradisional Betawi sangat erat dengan alunan irama dari musik tradisional. Tarian Betawi juga memiliki ciri khas tersendiri.Penggunaan suara musik pengiring yang riang adalah ciri dari tari kesenian Betawi. Selain itu, gerakannya yang riang juga salah satu cirinya.",
            img: "../../asset/img-jakarta/seni-tari.jfif"
        }
    ];

    const bahasaData = [
        {
            title: "Bahasa Betawi",
            desc: "Bahasa Betawi (basé Betawi, basa Betawi; dikenal juga sebagai bahasa Melayu Betawi) adalah bahasa kreol yang dituturkan oleh suku Betawi yang mendiami daerah Jakarta dan sekitarnya. Bahasa ini merupakan bahasa Melayu Pasar yang bercampur dengan bahasa asing, seperti; Belanda, Portugis, Arab, Persia, Hokkien, dan juga bahasa pribumi Indonesia seperti Sunda, Jawa, dan Bali; imbas para imigran dan pekerja multietnis yang didatangkan dari berbagai tempat ke Batavia oleh VOC pada abad ke-16 hingga abad ke-18, serta perdagangan dan pertukaran yang terjadi sejak ratusan tahun di bandar besar Sunda Kalapa."
        }
    ];

    const nilaiBudayaData = [
        {
            title: "1. Gotong Royong",
            desc: "Budaya gotong royong sangat kuat dalam masyarakat Betawi. Mereka selalu saling membantu dalam berbagai kegiatan, seperti membangun rumah atau mengadakan acara.",
        },
        {
            title: "2. Musyawarah",
            desc: "Masyarakat Betawi sering mengadakan musyawarah untuk menyelesaikan berbagai masalah. Prinsip ini mencerminkan nilai demokrasi dan kebersamaan.",
        },
        {
            title: "3. Kekeluargaan",
            desc: "Hubungan kekeluargaan yang erat menjadi salah satu nilai budaya penting bagi masyarakat Betawi. Mereka menghormati dan menjaga hubungan baik dengan keluarga besar.",
        }
    ]
    
    
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

