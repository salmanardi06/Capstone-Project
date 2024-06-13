document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    let adatIndex = 0;
    let tradisiIndex = 0;
    let seniIndex = 0;
    let bahasaIndex = 0;
    let nilaiBudayaIndex = 0;

    const adatData = [
        {
            title: "1. Karapan Sapi",
            desc: "Tradisi balap sapi yang populer di Madura, di mana sapi-sapi berlomba menarik kereta kecil dengan kecepatan tinggi. Tradisi ini biasanya diadakan sebagai bagian dari perayaan atau festival tertentu.",
            img: "../../asset/img-jatim/karapansapi.jpg"
        },
        {
            title: "2. Reog Ponorogo",
            desc: "Kesenian tradisional yang menampilkan tari dengan topeng besar berbentuk kepala singa dihiasi bulu merak. Pertunjukan ini biasanya menceritakan kisah-kisah kepahlawanan dan legenda setempat.",
            img: "../../asset/img-jatim/reogponorogo.jpg"
        },
        {
            title: "3. Upacara Kasada",
            desc: "Upacara adat masyarakat Tengger yang dilakukan di Gunung Bromo. Pada upacara ini, masyarakat memberikan sesaji berupa hasil bumi ke kawah gunung sebagai bentuk rasa syukur dan permohonan keselamatan.",
            img: "../../asset/img-jatim/upacarakasada.jpg"
        },
        {
            title: "4. Larung Sembonyo",
            desc: "Tradisi melarung atau menghanyutkan sesaji ke laut, yang dilakukan oleh masyarakat pesisir untuk menghormati roh leluhur dan memohon keselamatan serta kesejahteraan.",
            img: "../../asset/img-jatim/larungsembonyo.jpg"
        },
        {
            title: "5. Kebo-keboan",
            desc: "Ritual yang diadakan di Banyuwangi untuk memohon turunnya hujan. Pada upacara ini, beberapa peserta berpakaian dan berperan sebagai kerbau, kemudian melakukan prosesi yang melambangkan kerja keras di sawah.",
            img: "../../asset/img-jatim/kebokeboan.jpg"
        },
    ];

    const tradisiData = [
        {
            title: "1. Ketoprak",
            desc: "Pertunjukan teater rakyat yang menggabungkan drama, tari, dan musik untuk menceritakan kisah sejarah dan mitos dari Jawa.",
            img: "../../asset/img-jatim/ketoprak.jpg"
        },
        {
            title: "2. Festival Bandeng",
            desc: "Dirayakan di Gresik, festival ini menghormati ikan bandeng dengan berbagai kegiatan seperti lomba memasak dan pameran produk olahan ikan bandeng.",
            img: "../../asset/img-jatim/festivalbandeng.jpg"
        },
    ];

    const seniData = [
        {
            title: "1. Tari Remo",
            desc: "Tarian selamat datang yang biasanya ditampilkan pada acara-acara resmi dan menyambut tamu penting. Tari Remo ditandai dengan gerakan yang dinamis dan kostum yang mencolok",
            img: "../../asset/img-jatim/tariremo.jpg"
        },
        {
            title: "2. Ludruk ",
            desc: "Teater rakyat yang menampilkan cerita kehidupan sehari-hari, kisah heroik, dan kritik sosial dengan sentuhan humor. Ludruk biasanya diiringi musik gamelan dan berbahasa Jawa Timur.",
            img: "../../asset/img-jatim/ludruk.jpg"
        },
        {
            title: "3. Wayang Kulit",
            desc: "Seni pertunjukan bayangan yang menggunakan boneka kulit untuk menceritakan epos Ramayana dan Mahabharata. Wayang kulit Jawa Timur memiliki gaya dan cerita khas yang membedakannya dari daerah lain.",
            img: "../../asset/img-jatim/wayangkulit.jpg"
        },
        {
            title: "4. Tari Ngremo",
            desc: "Tarian tradisional yang sering kali ditampilkan sebagai pembukaan dalam pertunjukan wayang kulit. Tarian ini menampilkan gerakan energik dan penuh semangat.",
            img: "../../asset/img-jatim/taringremo.jpg"
        },
        {
            title: "5. Jaranan",
            desc: "Kesenian tari yang menggunakan properti berupa kuda-kudaan dari anyaman bambu. Tarian ini sering disertai dengan musik gamelan dan unsur magis.",
            img: "../../asset/img-jatim/jaranan.jpg"
        },
    ];

    const bahasaData = [
        {
            title: "1. Bahasa Jawa",
            desc: "Dialek Arekan: Digunakan di Surabaya dan sekitarnya, termasuk Malang dan Gresik.Dialek Mataraman: Digunakan di wilayah Mataraman seperti Madiun, Kediri, dan sebagian Ponorogo.Dialek Osing: Digunakan oleh masyarakat di Banyuwangi.",

        },
        {
            title: "2. Bahasa Madura",
            desc: "Digunakan oleh masyarakat di Pulau Madura dan sebagian wilayah pesisir utara Jawa Timur, seperti di Sumenep, Pamekasan, Sampang, dan Bangkalan.",
        },
        {
            title: "3. Bahasa Using",
            desc: "Digunakan oleh masyarakat Using di Banyuwangi. Bahasa Using adalah variasi dari bahasa Jawa tetapi memiliki karakteristik yang cukup berbeda sehingga dianggap sebagai bahasa tersendiri.",
        },
        {
            title: "4. Bahasa Tengger",
            desc: "Digunakan oleh masyarakat Tengger di daerah pegunungan Tengger, seperti di sekitar Gunung Bromo. Bahasa Tengger merupakan variasi bahasa Jawa kuno yang masih dipertahankan oleh masyarakat setempat.",
        }
    ];

    const nilaiBudayaData = [
        {
            title: "1. Gotong Royong",
            desc: "Nilai ini mengajarkan pentingnya kerja sama dan kebersamaan dalam melakukan berbagai kegiatan komunitas. Contohnya adalah kegiatan membangun infrastruktur desa secara bersama-sama.",
        },
        {
            title: "2. Tepo Seliro",
            desc: "Toleransi dan saling menghormati sangat dijunjung tinggi dalam budaya Jawa Timur. Ini menciptakan masyarakat yang harmonis dan penuh pengertian.",
        },
        {
            title: "3. Tata Krama",
            desc: "Tata krama mengacu pada aturan perilaku yang mengatur interaksi sosial dan tata cara berperilaku yang sopan dalam berbagai situasi, seperti di rumah, di tempat kerja, dan di masyarakat.",
        },
        {
            title: "4. Sopan Santun",
            desc: "Kesantunan dalam berkomunikasi dan berperilaku adalah hal yang sangat penting, terutama dalam interaksi sosial dan keluarga.",
        },
        {
            title: "5. Kejujuran",
            desc: "Menjadi dasar dari setiap tindakan dan interaksi, kejujuran membangun kepercayaan di antara anggota masyarakat.",
        },
        {
            title: "6. Ketahanan dan Ketekunan",
            desc: "Budaya kerja keras dan tekun tercermin dalam kehidupan sehari-hari, mulai dari pertanian hingga industri.",
        },
        {
            title: "7. Keberanian dan Kepahlawanan",
            desc: "Semangat juang yang diwariskan dari pahlawan-pahlawan lokal seperti Bung Tomo yang terkenal dalam pertempuran Surabaya.",
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

    document.addEventListener('DOMContentLoaded', () => {
        const animatedTexts = document.querySelectorAll('.animated-text');
    
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
    
        const textObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('textFadeIn');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
    
        animatedTexts.forEach(text => {
            textObserver.observe(text);
        });
    });

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
});
