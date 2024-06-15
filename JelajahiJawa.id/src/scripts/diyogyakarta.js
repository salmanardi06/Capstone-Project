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
            title: "1. Separan Bekakak",
            desc: "Bekakak artinya korban penyembelihan hewan atau manusia. Dalam upacara adat ini, bekakak hanya berupa tiruan manusia saja yang aslinya merupakan boneka pengantin dengan posisi duduk bersila dan terbuat dari tepung ketan. Sesuai namanya, upacara Saparan Bekakak dilakukan pada saat bulan Safar.",
            img: "../../asset/img-diy/separan-bakakak.jpg"
        },
        {
            title: "2. Grebeg Sekaten",
            desc: "Upacara Sekaten merupakan tradisi tahunan yang digelar untuk memperingati Maulid Nabi Muhammad SAW. Dilaksanakan pada setiap bulan Rabiul Awal, Grebeg Sekaten menjadi puncak dari serangkaian upacara adat Sekaten yang biasanya diadakan selama sebulan.",
            img: "../../asset/img-diy/grebeg-sekaten.jpg"
        },
        {
            title: "3. Grebeg Syawal",
            desc: "Warisan tradisi ini telah berlangsung selama berabad-abad. Nantinya, gunungan akan diserahkan melalui prosesi barisan prajurit keraton yang menjadi daya tarik sendiri menurut ribuan orang yang berkumpul di Alun-alun Utara. Sebelum diberikan kepada masyarakat, gunungan pun diarak terlebih dahulu dari Keraton Yogyakarta menuju halaman Masjid Agung Kauman.",
            img: "../../asset/img-diy/grebeg-syawal.jpg"
        },
        {
            title: "4. Labuhan",
            desc: "Labuhan merujuk pada tindakan membuang sesuatu ke dalam air, baik itu sungai, laut, atau tempat khusus lainnya. Benda yang dibuang dapat berupa sesaji atau persembahan kepada roh halus yang dianggap berkuasa di tempat yang dituju.",
            img: "../../asset/img-diy/labuhan.jpeg"
        },
        {
            title: "5. Tumplak Wajik",
            desc: "Upacara Tumplak Wajik masih masuk ke dalam rangkaian Sekaten, tepatnya upacara yang menandai awal rangkaian upacara Sekaten. Dilaksanakannya tradisi ini oleh Keraton Jogja diharapkan agar seluruh rangkaian upacara Sekaten berjalan dengan lancar hingga akhir. Prosesi ini digelar tiga hari sebelum pelaksanaan Grebeg.",
            img: "../../asset/img-diy/tumplak-wajik.jpg"
        },
        {
            title: "6. Gejog Lesung",
            desc: "Upacara ini digelar untuk menggambarkan kegembiraan para petani setelah melakukan panen. Musik gejog lesung merupakan hasil kreativitas dari kalangan petani sehingga bunyi yang dihasilkan cenderung sederhana dan gerakannya terlihat simpel.",
            img: "../../asset/img-diy/gejog-lesung.jpg"
        },
        {
            title: "7. Nyadran",
            desc: "upacara adat Nyadran merupakan bentuk tradisi untuk mendoakan leluhur yang telah meninggal. Nyadran juga dikenal sebagai Ruwahan karena dilakukan pada bulan Ruwah. Ritual ini banyak dilakukan oleh masyarakat yang kental akan budaya Jawanya, termasuk di Jogja.",
            img: "../../asset/img-diy/nyadran.jpeg"
        },
        {
            title: "8. Rebo Pungkasan",
            desc: "Upacara Rebo Pungkasan atau Rebo Wekasan dilangsungkan setiap hari Rabu terakhir pada bulan Safar. Tujuan penyelenggaraan dari Rebo Pungkasan adalah sebagai perwujudan rasa syukur kepada Tuhan dan juga Kyai Faqih Usman. Siapa itu Kyai Faqih Usman? Disebutkan di budaya.jogjaprov.go.id, ia dipercaya memiliki kemampuan untuk menyembuhkan berbagai macam penyakit.",
            img: "../../asset/img-diy/rebo-pungkasan.jpg"
        },
        {
            title: "9. Nguras Enceh",
            desc: "Nguras Enceh juga termasuk ke dalam warisan budaya tak benda yang ada di Jogja. Ritual ini diadakan setiap bulan Sura dalam kalender Jawa serta diikuti oleh abdi dalem Keraton Surakarta dan Yogyakarta. Acara ini selalu dilakukan pada hari Jumat Kliwon atau Selasa Kliwon.",
            img: "../../asset/img-diy/nguras-enceh.jpg"
        },
        {
            title: "10. Jamasan Pusaka",
            desc: "Upacara Jamasan Pusaka adalah tradisi tahunan di Jogja yang dilakukan pada bulan Sura untuk membersihkan benda-benda pusaka Keraton Jogja. Biasanya, upacara ini dilaksanakan pada Selasa Kliwon atau Jumat Kliwon bulan Sura. Pusaka utama, yaitu Tombak Kyai Wijoyo Mukti dibersihkan dengan melakukan pemanjatan doa, membersihkan dengan jeruk nipis, menyiram dengan air, pemberian warangan dari arsenik, dan akhirnya diolesi dengan campuran minyak kelapa dan cendana.",
            img: "../../asset/img-diy/jamasan-pusaka.jpg"
        },
        {
            title: "11. Merti Code",
            desc: "Tradisi Merti Code berkaitan erat dengan kegiatan perawatan Kali Code yang membelah Kota Jogja. Upacara ini diinisiasikan pada tahun 2000 dan telah menjadi kegiatan tahunan rutin sejak saat itu. Kegiatan dimulai dengan melakukan ruwatan air yang diambil dari tujuh mata air oleh sesepuh desa dan disimpan di enceh patirtan, di mana salah satu mata air berasal dari lereng Gunung Merapi.",
            img: "../../asset/img-diy/merti-code.jpg"
        },
        {
            title: "12. Tunggul Wulung",
            desc: "Upacara Tunggul Wulung. Berdasarkan laman kebudayaan.kemdikbud.go.id, tradisi ini merupakan upacara bersih desa di Desa Sendang Agung, Kecamatan Minggir, Kabupaten Sleman. Acara tersebut diadakan sebagai bentuk ungkapan syukur dan doa kepada Tuhan dengan harapan mendapatkan berkah, kesejahteraan, dan perlindungan dari berbagai bencana.",
            img: "../../asset/img-diy/tunggul-wulung.jpeg"
        }
    ];

    const tradisiData = [
        {
            title: "1. Tedhak Siten",
            desc: "Tradisi ini adalah upacara turun tanah bagi anak yang berusia tujuh atau delapan bulan. Tedhak Siten bertujuan untuk memperkenalkan anak kepada bumi dan memohon keselamatan serta kemudahan rejeki untuk sang anak.",
            img: "../../asset/img-jawabarat/wayanggolek.jpg"
        },
        {
            title: "2. Siraman Pusaka",
            desc: "Upacara ini dilakukan setiap tahun pada bulan Suro (Muharram) untuk membersihkan pusaka-pusaka Keraton Yogyakarta. Upacara ini dipercaya menjaga kekuatan dan keampuhan pusaka.",
            img: "../../asset/img-diy/siraman-pusaka.jpg"
        },
        {
            title: "3. Upacara Kebo-Keboan",
            desc: "Tradisi ini dilakukan di Desa Jatimulyo, Kulon Progo, untuk meminta hujan dan kesuburan tanah. Beberapa orang berpakaian menyerupai kerbau dan diarak keliling desa dalam upacara ini.",
            img: "../../asset/img-diy/keboan.jpeg"
        },
        {
            title: "4. Slametan",
            desc: "Merupakan upacara syukuran atau doa bersama yang dilakukan pada berbagai kesempatan seperti pernikahan, kelahiran, dan panen. Slametan melibatkan penyajian makanan tertentu dan doa bersama untuk memohon berkah dan keselamatan.",
            img: "../../asset/img-diy/slametan.jpg"
        },
        {
            title: "5. Merti Desa",
            desc: "Upacara adat ini dilakukan oleh masyarakat desa sebagai bentuk rasa syukur atas hasil bumi dan memohon keselamatan serta kemakmuran desa. Merti Desa biasanya melibatkan prosesi, doa, dan pertunjukan kesenian tradisional.",
            img: "../../asset/img-diy/merti-desa.jpeg"
        }
    ];

    const seniData = [
        {
            title: "1. Wayang Kulit",
            desc: "Wayang Kulit adalah seni pertunjukan boneka bayangan yang dimainkan oleh seorang dalang di belakang layar yang diterangi lampu. Boneka-boneka kulit diproyeksikan ke layar, dan cerita-cerita dari epik Ramayana dan Mahabharata sering menjadi tema utama.",
            img: "../../asset/img-diy/wayang.jpg"
        },
        {
            title: "2.Tari Bedhaya ",
            desc: "Tari Bedhaya adalah tarian klasik Jawa yang biasanya dibawakan oleh sembilan penari perempuan. Tarian ini memiliki gerakan yang lembut dan anggun.",
            img: "../../asset/img-diy/bedhaya.jpg"
        },
        {
            title: "3. Tari Serimpi",
            desc: "Tari Serimpi adalah tarian klasik lainnya yang dibawakan oleh empat penari perempuan. Gerakannya halus dan lemah gemulai.",
            img: "../../asset/img-diy/serimpi.jpg"
        },
        {
            title: "4. Gamelan",
            desc: "Gamelan adalah ansambel musik tradisional yang terdiri dari berbagai instrumen seperti gong, kendang, bonang, dan saron. Musik gamelan mengiringi berbagai pertunjukan seperti wayang kulit, tari tradisional, dan upacara adat.",
            img: "../../asset/img-diy/gamelan.jpeg"
        },
        {
            title: "5. Batik",
            desc: "Batik adalah seni menghias kain dengan menggunakan malam untuk membentuk pola-pola yang kemudian diwarnai. Yogyakarta adalah salah satu pusat produksi batik terbesar di Indonesia.",
            img: "../../asset/img-diy/batik.jpeg",
        },
    ];

    const bahasaData = [
        {
            title: "1. Bahasa Jawa",
            desc: "Bahasa Jawa adalah bahasa sehari-hari yang paling umum digunakan oleh penduduk Yogyakarta. Bahasa ini memiliki tingkatan atau strata yang berbeda tergantung pada konteks dan hubungan sosial antara pembicara dan pendengar.",
        },
        {
            title: "2. Bahasa Indonesia",
            desc: " Bahasa Indonesia adalah bahasa resmi negara yang digunakan dalam pendidikan, pemerintahan, media, dan situasi formal lainnya. Di Yogyakarta, Bahasa Indonesia sering digunakan dalam konteks formal dan resmi.",
        },
        {
            title: "3. Bahasa Inggris",
            desc: "Bahasa Inggris diajarkan sebagai bahasa asing di sekolah-sekolah dan perguruan tinggi di Yogyakarta. Bahasa Inggris juga digunakan dalam sektor pariwisata dan oleh komunitas internasional.",
        },
        {
            title: "4. Bahasa Sansekerta",
            desc: "Bahasa Sansekerta tidak digunakan sebagai bahasa komunikasi sehari-hari, tetapi memiliki pengaruh signifikan dalam budaya dan sejarah Yogyakarta. Banyak istilah keagamaan, nama tempat, dan nama-nama gelar yang berasal dari Sansekerta.",
        }
    ];

    const nilaiBudayaData = [
        {
            title: "1. Keraton dan Kerajaan",
            desc: "Keraton Yogyakarta merupakan pusat budaya dan kekuasaan yang memegang peranan penting dalam menjaga tradisi dan nilai-nilai budaya. Keraton menjadi simbol kebesaran dan keagungan budaya Jawa.",
        },
        {
            title: "2. Gotong Royong",
            desc: "otong royong adalah tradisi bekerja sama untuk mencapai tujuan bersama, tanpa mengharapkan imbalan materi.",
        },
        {
            title: "3. Unggah-Ungguh",
            desc: "Tata krama mengacu pada aturan perilaku yang mengatur interaksi sosial dan tata cara berperilaku yang sopan dalam berbagai situasi, seperti di rumah, di tempat kerja, dan di masyarakat.",
        },
        {
            title: "4. Keberagaman dan Toleransi",
            desc: "Yogyakarta dikenal sebagai kota yang pluralis dengan keberagaman etnis, agama, dan budaya yang hidup berdampingan secara harmonis.",
        },
        {
            title: "5. Spiritualitas dan Keagamaan",
            desc: " Masyarakat Yogyakarta memiliki kehidupan spiritual yang kuat, yang tercermin dalam berbagai upacara adat, tradisi keagamaan, dan ritual.",
        },
        {
            title: "6. Kesenian dan Kreativitas",
            desc: " Yogyakarta adalah pusat seni dan budaya dengan berbagai bentuk seni tradisional seperti wayang kulit, tari, gamelan, batik, dan seni kontemporer.",
        },
        {
            title: "7. Keberanian dan Patriotisme",
            desc: " Yogyakarta memiliki sejarah perjuangan yang kuat, terutama dalam masa-masa kemerdekaan Indonesia.",
        },
        {
            title: "8. Kesederhanaan dan Kearifan Lokal",
            desc: " Masyarakat Yogyakarta dikenal dengan gaya hidup sederhana dan menghargai kearifan lokal.",
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
