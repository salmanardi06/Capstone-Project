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
            title: "1. Upacar Ruwatan",
            desc: "Upacara Ruwatan, bahasa Jawa dari “dibebaskan” atau “dilepaskan”. Masyarakat percaya bahwa Upacara Ruwatan ini dapat melepaskan seseorang dari hukuman, atau bahkan kutukan, yang akan merugikan dirinya dan mendekatkannya pada bahaya.",
            img: "../../asset/img-jawatengah/ruwatan.jpg"
        },
        {
            title: "2. Upacara Padusan",
            desc: "Upacara Padusan berasal dari kebiasaan Walisongo yang menyatukan budaya Hindu dengan budaya Islam. Padusan berasal dari kata adus, bahasa Jawa yang berarti mandi. Masyarakat biasa melakukan upacara ini ketika bulan Ramadhan tiba, bertujuan untuk membersihkan diri lahir dan batin, sehingga mereka dapat memasuki bulan Ramadhan dalam keadaan suci dan bersih.",
            img: "../../asset/img-jawatengah/padusan.jpeg"
        },
        {
            title: "3. Upacara Nyadran",
            desc: "Upacara Nyadran sebetulnya adalah tradisi agama Hindu dan Buddha, yang kemudian diadopsi menjadi budaya Walisongo. Dalam sejarahnya, mereka sedang berupaya agar bacaan-bacaan Al Quran dapat diterima oleh masyarakat di Jawa Tengah, yang kala itu masih kental dengan ajaran Hindu dan Buddha saja.",
            img: "../../asset/img-jawatengah/nyadran.jpeg"
        },
        {
            title: "4. Larung Sesaji",
            desc: "Larung Sesaji merupakan salah satu upacara adat Jawa Tengah yang dengan mudah ditonton masyarakat setempat. Acaranya akan berlangsung meriah dan dipenuhi dengan hasil-hasil alam yang dihias sedemikian rupa, kemudian dilarungkan ke laut. Itu sebabnya Larung Sesaji juga dikenal dengan sebutan sedekah laut.",
            img: "../../asset/img-jawatengah/sesaji.jpg"
        },
        {
            title: "5. Mendak Kematian",
            desc: "Upacara adat di Jawa Tengah tidak hanya berkaitan dengan kehidupan, namun juga kematian. Mendak Kematian adalah salah satu upacara adat di Jawa Tengah yang dengan mudah dapat ditemukan pada masyarakat, apalagi di daerah-daerah yang masih kental adatnya.",
            img: "../../asset/img-jawatengah/mendak.jpg"
        },
        {
            title: "6. Upacara Tingkeban",
            desc: "Upacara Tingkeban adalah upacara yang diselenggarakan ketika seorang ibu hamil menginjak usia 7 bulan. Tujuan dari Tingkeban adalah mendoakan sang ibu dan bayi yang ia kandung agar lahir dengan lancar dan selamat.",
            img: "../../asset/img-jawatengah/tingkeban.jpeg"
        },
        {
            title: "7. Brobosan",
            desc: "Tujuan dari upacara Brobosan adalah sebagai penghormatan terhadap orang yang meninggal, serta leluhur lainnya yang sudah mendahului mereka. Selain itu, upacara ini juga bertujuan untuk menghapus kesedihan yang dirasakan oleh keluarga yang ditinggalkan.",
            img: "../../asset/img-jawatengah/brobosan.jpeg"
        },
        {
            title: "8. Upacara Tedak Siten",
            desc: "Tedak Siten merupakan bahasa Jawa yang berarti kaki (tedak) dan tanah (siten). Tedak Siten sendiri merupakan upacara adat Jawa Tengah yang dilakukan pada anak, ketika anak menginjak usia tujuh atau delapan bulan. Terdapat rangkaian cukup panjang pada upacara Tedak Siten, yaitu sebanyak 7 rangkaian, dimana masing-masing rangkaiannya memiliki makna tersendiri.",
            img: "../../asset/img-jawatengah/siten.jpg"
        }
    ];

    const tradisiData = [
        {
            title: "1. Wayang Wong",
            desc: "Wayang Wong adalah pertunjukan drama tari yang menggunakan tokoh-tokoh wayang sebagai cerita utamanya. Pertunjukan ini tidak hanya menghibur, tetapi juga mengajarkan nilai-nilai moral dan sejarah kepada penontonnya.",
            img: "../../asset/img-jawatengah/wong.jpg"
        },
        {
            title: "2. Tari Tradisional",
            desc: "Jawa Tengah memiliki banyak jenis tarian tradisional yang melambangkan berbagai makna dan simbol budaya. Contoh tari tradisional Jawa Tengah antara lain Tari Bedhaya, Tari Gambyong, dan Tari Serimpi, yang sering kali dipertunjukkan dalam upacara adat atau sebagai bagian dari seni pertunjukan.",
            img: "../../asset/img-jawatengah/tradisional.jpeg"
        },
        {
            title: "3. Seni Musik Gamelan",
            desc: "Gamelan merupakan ansambel musik tradisional Jawa yang terdiri dari berbagai jenis instrumen seperti gong, kendang, saron, dan bonang. Gamelan sering dimainkan dalam berbagai acara adat, upacara keagamaan, dan pertunjukan seni lainnya di Jawa Tengah.",
            img: "../../asset/img-jawatengah/gamelan.jpeg"
        },
        {
            title: "4. Keraton dan Istana",
            desc: "Provinsi Jawa Tengah memiliki sejumlah keraton dan istana yang menjadi simbol kekuasaan dan kebudayaan Jawa. Misalnya, Keraton Kasunanan Surakarta dan Pura Mangkunegaran di Solo serta Keraton Yogyakarta.",
            img: "../../asset/img-jawatengah/keraton.jpg"
        },
        {
            title: "5. Kesenian Batik",
            desc: "Batik adalah seni tradisional Indonesia yang sangat terkenal, termasuk di Jawa Tengah. Batik Jawa Tengah sering kali memiliki pola dan motif khas yang mencerminkan nilai-nilai budaya dan sejarah lokal.",
            img: "../../asset/img-jawatengah/batik.jpeg"
        },
        {
            title: "6. Tradisi Keagamaan",
            desc: "Jawa Tengah adalah daerah yang kaya akan tradisi keagamaan, dengan banyaknya tempat ibadah dan ritual keagamaan yang dilaksanakan secara rutin. Contohnya adalah tradisi Slametan, yaitu upacara syukuran atau doa bersama yang dilakukan pada berbagai kesempatan.",
            img: "../../asset/img-jawatengah/keagamaan.jpg"
        },
        {
            title: "7. Festival Budaya",
            desc: "Berbagai festival budaya di Jawa Tengah menjadi ajang untuk mempromosikan dan mempertahankan kekayaan budaya daerah. Contoh festival budaya di Jawa Tengah antara lain Festival Kesenian Solo (FESKES) dan Festival Kesenian Wonogiri.",
            img: "../../asset/img-jawatengah/kebudayaan.jpg"
        }
    ];

    const seniData = [
        {
            title: "1. Seni Tari Tradisional",
            desc: " Tarian sakral yang biasanya dipentaskan di keraton, melibatkan sembilan penari perempuan dengan gerakan-gerakan yang anggun dan lembut. Tari Bedhaya menggambarkan keagungan dan keanggunan serta dianggap sebagai bentuk penghormatan terhadap dewata dan leluhur.",
            img: "../../asset/img-jawatengah/tari.jpeg"
        },
        {
            title: "2. Gamelan Jawa Tengah ",
            desc: "Gamelan adalah ansambel musik tradisional Jawa yang terdiri dari berbagai jenis instrumen, seperti gong, kendang, saron, bonang, dan lain-lain. Musik gamelan Jawa Tengah memiliki pola dan struktur yang kompleks, sering kali digunakan untuk mengiringi pertunjukan wayang kulit, tari tradisional, upacara adat, dan acara keagamaan lainnya. Setiap daerah di Jawa Tengah memiliki gaya dan jenis gamelan yang berbeda, dengan karakteristik yang unik.",
            img: "../../asset/img-jawatengah/gamelan.jpg"
        },
        {
            title: "3. Pencak Silat",
            desc: "Pencak silat adalah seni bela diri tradisional Indonesia yang memiliki banyak variasi gaya dan aliran di Jawa Tengah. Selain sebagai keterampilan bela diri, pencak silat juga mengandung nilai-nilai filosofis dan spiritual yang dalam, seperti pengendalian diri, kedisiplinan, dan keberanian. Pencak silat sering kali diajarkan dan dipraktikkan dalam rangkaian upacara adat, festival, atau sebagai bagian dari pendidikan masyarakat.",
            img: "../../asset/img-jawatengah/silat.jpeg"
        }
    ];

    const bahasaData = [
        {
            title: "1. Bahasa Jawa",
            desc: "Bahasa Jawa merupakan bahasa utama yang digunakan oleh mayoritas penduduk Jawa Tengah dalam kehidupan sehari-hari. Bahasa Jawa memiliki variasi dialek yang cukup beragam tergantung dari daerahnya, seperti dialek Jawa Tengah bagian utara (termasuk Semarang), Jawa Tengah bagian selatan (termasuk Solo), Pekalongan, Pati, dan lain-lain.",
        },
        {
            title: "2.Bahasa Indonesia",
            desc: "Bahasa Indonesia adalah bahasa resmi dan bahasa persatuan di seluruh Indonesia, termasuk di Jawa Tengah. Bahasa ini digunakan dalam administrasi pemerintahan, pendidikan formal, media massa, dan komunikasi formal lainnya.",
        },
        {
            title: "3. Bahasa-bahasa Minoritas",
            desc: "Selain Bahasa Jawa dan Bahasa Indonesia, terdapat juga bahasa-bahasa minoritas yang digunakan oleh kelompok etnik atau komunitas tertentu di Jawa Tengah, seperti bahasa-bahasa dari suku Jawa, Sunda, Batak, Madura, dan lain-lain. Namun, penggunaan bahasa-bahasa minoritas ini lebih terbatas dan tidak seluas penggunaan Bahasa Jawa dan Bahasa Indonesia.",
        }
    ];

    const nilaiBudayaData = [
        {
            title: "1. Keagamaan dan Kepercayaan",
            desc: "Nilai-nilai keagamaan, baik dalam bentuk kepercayaan tradisional maupun agama-agama yang dianut seperti Islam, Kristen, dan Hindu, sangat mempengaruhi kehidupan sehari-hari masyarakat Jawa Tengah. Ritual-ritual keagamaan, seperti slametan, upacara adat, dan perayaan-perayaan keagamaan dihargai sebagai sarana untuk memperkuat hubungan dengan Tuhan dan memperkokoh ikatan sosial antarwarga.",
        },
        {
            title: "2. Gotong Royong dan Solidaritas Sosial",
            desc: "Konsep gotong royong atau bekerja bersama-sama untuk kepentingan bersama merupakan nilai yang sangat ditekankan di Jawa Tengah. Masyarakatnya cenderung saling membantu dalam berbagai kegiatan seperti membersihkan lingkungan, membangun infrastruktur desa, dan merayakan acara sosial bersama.",
        },
        {
            title: "3. Keselarasan dengan Alam",
            desc: "Hubungan harmonis antara manusia dan alam menjadi nilai yang penting dalam budaya Jawa Tengah. Nilai-nilai seperti menjaga kelestarian lingkungan, menghormati alam dan makhluk hidup, serta memanfaatkan sumber daya alam secara bijaksana dipertahankan untuk mewariskannya kepada generasi mendatang.",
        },
        {
            title: "4. Keterampilan Seni dan Kerajinan Tradisional",
            desc: "Kemahiran dalam seni tradisional seperti batik, ukiran, seni wayang, dan musik gamelan merupakan nilai budaya yang turun-temurun di Jawa Tengah. Seni-seni ini tidak hanya dipandang sebagai ekspresi kreatif, tetapi juga sebagai sarana untuk memperkuat identitas budaya dan mengajarkan nilai-nilai moral serta sejarah kepada generasi muda.",
        },
        {
            title: "5. Keraton dan Keistimewaan Budaya",
            desc: "Keberadaan keraton dan istana, seperti Keraton Kasunanan Surakarta dan Keraton Yogyakarta, sebagai pusat kebudayaan dan keistimewaan menjadi simbol nilai-nilai kebesaran, kearifan lokal, serta kepatuhan terhadap tradisi adat dan budaya.",
        },
        {
            title: "6. Etika dan Budi Pekerti",
            desc: "Etika dan budi pekerti yang baik, seperti sikap santun, hormat menghormati, serta kejujuran, merupakan nilai-nilai yang dijunjung tinggi dalam kehidupan bermasyarakat di Jawa Tengah. Hal ini tercermin dalam interaksi sehari-hari antara sesama masyarakat serta dalam berbagai tradisi dan upacara adat.",
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
