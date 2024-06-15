class Navbar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
   
      this.render();
    }
   
    render() {
      this .shadowRoot.innerHTML = `
      <style>
        header {
            background-color: #241111;
            color: white;
            padding: 10px 20px;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            padding-left: 15px;
        }

        .nav-links {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }

        .nav-links li {
            margin-left: 20px;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            padding: 5px 10px;
        }

        .nav-links a:hover {
            background-color: chocolate;
            border-radius: 5px;
        }

        .nav-links a.active {
            background-color: chocolate;
        }
        
        .toggle-button {
            display: none; 
            background-color: transparent;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
        }
        @media (max-width: 768px) {
            .nav-links {
                flex-direction: column;
                background-color: #241111;
                padding: 10px;
                position: absolute;
                top: 60px; 
                left: 0;
                right: 0;
                display: none; 
                z-index: 999;
            }
        
            .nav-links.open {
                display: flex; 
            }
        
            .nav-links li {
                margin: 10px 0;
            }
        
            .nav-links a {
                color: white;
                text-decoration: none;
                padding: 5px 0;
                display: block;
            }
        
            .nav-links a.active {
                background-color: chocolate;
            }
        
            .toggle-button {
                display: block; 
            }
        }
      </style>
      <header>
      <nav>
          <div class="logo">JelajahiJawa.id</div>
          <button class="toggle-button">&#9776;</button>
          <ul class="nav-links">
              <li><a href="/" >Beranda</a></li>
              <li><a href="../../../eksplorasi.html" class="active">Eksplorasi</a></li>
              <li><a href="../../../tentang.html">Tentang</a></li>
          </ul>            
      </nav>
    </header>    
      `;

    const toggleButton = this.shadowRoot.querySelector('.toggle-button');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    }
}

