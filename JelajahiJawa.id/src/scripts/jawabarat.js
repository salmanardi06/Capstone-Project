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
            title: "1. Seren Taun",
            desc: "Upacara adat tahunan yang diadakan oleh masyarakat Sunda untuk merayakan hasil panen dan bersyukur kepada Tuhan Yang Maha Esa. Upacara ini biasanya melibatkan berbagai ritual, tari-tarian, dan permainan tradisional.",
            img: "../../asset/img-jawabarat/serentaun.jpg"
        },
        {
            title: "2. Ngagogo",
            desc: "Tradisi menangkap ikan secara beramai-ramai di sungai atau danau. Biasanya dilakukan setelah panen sebagai bentuk hiburan dan kebersamaan masyarakat.",
            img: "../../asset/img-jawabarat/ngagogo.jpg"
        },
        {
            title: "3. Upacara Mapag Panganten",
            desc: "Upacara adat pernikahan Sunda yang memiliki rangkaian prosesi yang panjang, mulai dari seserahan, akad nikah, hingga resepsi dengan berbagai simbol dan makna mendalam.",
            img: "../../asset/img-jawabarat/mapagpengantin.jpg"
        },
        {
            title: "4. Sisingaan",
            desc: "Tradisi mengarak anak-anak atau tamu kehormatan di atas replika singa yang diusung oleh beberapa orang. Biasanya dilakukan pada acara khitanan atau perayaan tertentu.",
            img: "../../asset/img-jawabarat/sisingaan.jpg"
        },
        {
            title: "5. Debus",
            desc: "Seni pertunjukan yang melibatkan kekuatan fisik dan kekebalan tubuh terhadap senjata tajam, api, dan benda berbahaya lainnya. Walaupun berasal dari Banten, debus juga populer di beberapa daerah di Jawa Barat.",
            img: "../../asset/img-jawabarat/debus.jpg"
        },
        {
            title: "6. Angklung",
            desc: "Tradisi musik khas Sunda menggunakan alat musik bambu bernama angklung. Musik angklung sering dimainkan pada upacara adat, perayaan, dan acara kebudayaan lainnya.",
            img: "../../asset/img-jawabarat/angklung.jpg"
        },
        {
            title: "7. Ngarot",
            desc: "Upacara adat di Indramayu yang dilakukan oleh para remaja sebagai simbol permohonan restu dan doa untuk kesuksesan dalam bertani dan kehidupan mereka.",
            img: "../../asset/img-jawabarat/ngarot.jpg"
        },
        {
            title: "8. Kuda Renggong",
            desc: "Seni pertunjukan dimana kuda dihias dan ditunggangi anak-anak sambil diarak keliling kampung diiringi musik tradisional. Biasanya dilakukan pada acara khitanan.",
            img: "../../asset/img-jawabarat/kudarenggong.jpg"
        },
        {
            title: "9. Upacara Adat Nyangku",
            desc: "Dilakukan di Desa Panjalu, Kabupaten Ciamis, sebagai bentuk pelestarian budaya dengan membersihkan benda-benda pusaka peninggalan leluhur.",
            img: "../../asset/img-jawabarat/nyangku.jpg"
        },
        {
            title: "10. Pesta Laut",
            desc: "Upacara syukuran dan doa bersama oleh para nelayan di berbagai daerah pesisir Jawa Barat sebagai bentuk syukur atas hasil tangkapan laut dan doa untuk keselamatan selama melaut.",
            img: "../../asset/img-jawabarat/pestalaut.jpg"
        }
    ];

    const tradisiData = [
        {
            title: "1. Wayang Golek",
            desc: "Salah satu bentuk seni tradisional yang terkenal di Jawa Barat adalah wayang golek, yaitu pertunjukan boneka kayu yang mengisahkan cerita-cerita epik seperti Ramayana dan Mahabharata",
            img: "../../asset/img-jawabarat/wayanggolek.jpg"
        },
        {
            title: "2. Pencak Silat",
            desc: "Seni bela diri tradisional ini bukan hanya latihan fisik, tetapi juga mencakup nilai-nilai filosofis dan spiritual.  banyak diwariskan secara turun temurun di Jawa Barat.",
            img: "../../asset/img-jawabarat/pencaksilat.jpg"
        },
        {
            title: "3. Upacara Adat",
            desc: "Jawa Barat memiliki berbagai upacara adat yang dilaksanakan dalam kehidupan sehari-hari, seperti upacara pernikahan, upacara kematian, dan berbagai upacara lain yang berkaitan dengan siklus hidup manusia.",
            img: "../../asset/img-jawabarat/upacaraadat.jpg"
        },
        {
            title: "4. Kesenian Sunda",
            desc: "Kesenian tradisional seperti tari jaipongan, ketuk tilu, dan degung merupakan bagian integral dari budaya Jawa Barat. Masing-masing memiliki nuansa dan karakteristik unik yang mencerminkan kehidupan dan kepercayaan masyarakat Sunda.",
            img: "../../asset/img-jawabarat/keseniansunda.jpg"
        },
        {
            title: "5. Saung Angklung Udjo",
            desc: "Angklung adalah alat musik tradisional yang terbuat dari bambu dan banyak dipentaskan dalam berbagai acara di Jawa Barat. Saung Angklung Udjo di Bandung adalah salah satu tempat terkenal di mana wisatawan dapat menikmati pertunjukan angklung.",
            img: "../../asset/img-jawabarat/saungangklungudjo.jpg"
        },
        {
            title: "6. Tradisi Agama",
            desc: "Sebagian besar masyarakat Jawa Barat memeluk agama Islam, dan tradisi-tradisi keagamaan seperti perayaan Idul Fitri, puasa Ramadan, dan ziarah ke makam para wali merupakan bagian penting dari kehidupan keagamaan di wilayah ini.",
            img: "../../asset/img-jawabarat/tradisiagama.jpg"
        },
        {
            title: "7. Kuliner Tradisional",
            desc: "Jawa Barat juga dikenal dengan beragam kuliner tradisionalnya, seperti nasi timbel, sate maranggi, sayur asem, dan masih banyak lagi. Makanan-makanan ini tidak hanya memuaskan lidah, tetapi juga mencerminkan kekayaan budaya dan bahan-bahan lokal.",
            img: "../../asset/img-jawabarat/kulinertradisional.jpg"
        },
        {
            title: "8. Kesenian Seni Rupa",
            desc: "Seni rupa tradisional seperti ukiran kayu, anyaman bambu, dan batik juga merupakan bagian dari warisan budaya Jawa Barat.",
            img: "../../asset/img-jawabarat/keseniansenirupa.jpg"
        }
    ];

    const seniData = [
        {
            title: "1. Seni Pertunjukan",
            desc: "Jawa Barat memiliki beragam tradisi seni pertunjukan, seperti wayang golek, tari tradisional (seperti tari Jaipongan, tari Sunda, dan tari Topeng), serta teater tradisional seperti ketoprak dan lenong.",
            img: "../../asset/img-jawabarat/senipertunjukan.jpg"
        },
        {
            title: "2. Seni Rupa ",
            desc: "Seni rupa tradisional Jawa Barat sering kali diwakili oleh kerajinan tangan seperti anyaman bambu, batik, ukiran kayu, dan patung tradisional.",
            img: "../../asset/img-jawabarat/senirupa.jpg"
        },
        {
            title: "3. Seni Musik",
            desc: "Musik tradisional Sunda, yang melibatkan instrumen-instrumen seperti angklung, suling, dan gamelan, merupakan bagian penting dari seni musik di Jawa Barat.",
            img: "../../asset/img-jawabarat/senimusik.jpg"
        },
        {
            title: "4. Seni Sastra",
            desc: "Jawa Barat memiliki warisan sastra yang kaya, termasuk puisi, cerita rakyat, dan naskah klasik seperti Carita Parahyangan, yang menyajikan aspek-aspek budaya dan sejarah daerah tersebut.",
            img: "../../asset/img-jawabarat/senisastra.jpg"
        },
        {
            title: "5. Seni Modern",
            desc: "Selain seni-seni tradisional, Jawa Barat juga memiliki komunitas seniman modern yang aktif dalam berbagai bidang seni kontemporer, seperti lukisan, instalasi seni, dan seni grafis.",
            img: "../../asset/img-jawabarat/senimodern.jpeg",
        },
    ];

    const bahasaData = [
        {
            title: "1. Bahasa Sunda",
            desc: "Bahasa Sunda adalah bahasa utama yang digunakan di Jawa Barat, dengan berbagai dialek yang menarik. Selain digunakan dalam komunikasi sehari-hari, Bahasa Sunda juga sering terdengar dalam berbagai acara tradisional dan upacara adat.",
        },
        {
            title: "2. Dialek Cirebon",
            desc: "Dialek Cirebon merupakan salah satu dialek Bahasa Sunda yang memiliki ciri khas tersendiri. Dipengaruhi oleh berbagai faktor sejarah dan budaya, dialek ini sering terdengar di daerah Cirebon dan sekitarnya.",
        },
        {
            title: "3. Dialek Priangan",
            desc: "Dialek Priangan, atau kadang disebut sebagai dialek Bandung, adalah dialek Bahasa Sunda yang dominan di daerah Priangan, terutama di sekitar Bandung dan sekitarnya. Memiliki variasi kosakata dan intonasi yang khas.",
        },
        {
            title: "4. Dialek Banten",
            desc: "Dialek Banten adalah dialek Bahasa Sunda yang umumnya digunakan di wilayah Banten. Meskipun memiliki kesamaan dengan dialek-dialek lainnya, dialek ini juga memiliki perbedaan yang cukup mencolok dalam beberapa aspek.",
        }
    ];

    const nilaiBudayaData = [
        {
            title: "1. Gotong Royong",
            desc: "Gotong royong adalah konsep kerjasama dalam masyarakat di mana setiap individu secara sukarela membantu satu sama lain untuk mencapai tujuan bersama dan memperkuat ikatan sosial.",
        },
        {
            title: "2. Sopan Santun",
            desc: "Sopan santun mengacu pada perilaku yang sopan, ramah, dan hormat terhadap orang lain. Ini termasuk mengucapkan salam, bersikap sopan, dan menghormati orang tua dan orang yang lebih tua.",
        },
        {
            title: "3. Tata Krama",
            desc: "Tata krama mengacu pada aturan perilaku yang mengatur interaksi sosial dan tata cara berperilaku yang sopan dalam berbagai situasi, seperti di rumah, di tempat kerja, dan di masyarakat.",
        },
        {
            title: "4. Kebersamaan",
            desc: "Kebersamaan adalah nilai penting dalam budaya Jawa Barat di mana masyarakat mengutamakan kerjasama, tolong-menolong, dan saling mendukung dalam kehidupan sehari-hari.",
        },
        {
            title: "5. Kejujuran",
            desc: "Kejujuran adalah prinsip moral yang mendorong individu untuk berkata dan bertindak jujur, serta tidak menipu atau berbohong kepada orang lain.",
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
