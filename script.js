const dataSkills = [
    {title: 'HTML',
    percentage: 90},
    {title: 'CSS',
    percentage: 90},
    {title: 'JavaScript',
    percentage: 90},
    {title: 'BootStrap',
    percentage: 90},
    {title: 'AppScript',
    percentage: 90},
    {title: 'TypeScript',
    percentage: 80},
    {title: 'HubSpotCMS',
    percentage: 90},
    {title: 'WordPress',
    percentage: 100},
    {title: 'ReactJs',
    percentage: 90},
    {title: 'NextJs',
    percentage: 60},
    {title: 'MongoDB',
    percentage: 60},
    {title: 'Firebase',
    percentage: 60},
    {title: 'SQLite',
    percentage: 70},
    {title: 'Jest',
    percentage: 50},
    {title: 'PHP',
    percentage: 50},
    {title: 'Java',
    percentage: 40},
    {title: 'Kotlin',
    percentage: 40},
]

const dataPortfolio = [
    {title: 'Sabor Caseiro',
    category: 'FrontEnd',
    previewImg: './assets/layoutSaborCaseiro.png',
    link: 'https://main--saborcaseiro.netlify.app/',
    },
    {title: 'Câmara Japão',
    category: 'FrontEnd',
    previewImg: './assets/layoutCamaraJapao.png',
    link: 'https://camaradojapao.org.br/',
    },
    {title: 'LP - Unycos',
    category: 'FrontEnd',
    previewImg: './assets/layoutUnycos.png',
    link: 'https://unycos-theta.vercel.app/',
    },
    {title: 'Athena',
    category: 'FrontEnd',
    previewImg: './assets/layoutAthena.png',
    link: 'https://athena-jet.vercel.app/',
    },
    {title: 'Labeddit',
    category: 'FullStack',
    previewImg: './assets/layoutLabeddit.png',
    link: 'https://labeddit-front-end.vercel.app/',
    },
    {title: 'Yu-gi-oh Card Shop',
    category: 'FrontEnd', 
    previewImg: './assets/layoutYGOShop.png',
    link: 'https://yu-gi-oh-shop-card.vercel.app/',
    }    
]

function toggleMenu() {
    let menu = document.getElementById("main-options-menu");
    menu.classList.toggle("visible");
}

function ligaDesliga() {
    let imagem = document.getElementById('iconLamp')
    let container = document.getElementById('container')
    let h1 = document.getElementById('h1')
    let texto = document.getElementById('texto')
    const logoDark = "./assets/logo-top-dark.svg"
    const logoLight = "./assets/logo-top-light.svg"
    if (imagem.className === "on") {
        document.getElementById('iconLamp').src = logoDark
        imagem.className = 'off'
        container.className = 'container-off'
        h1.className = 'h1Off'
        texto.className = 'textoOff'

    } else {
        document.getElementById('iconLamp').src = logoLight
        imagem.className = 'on'
        container.className = 'container-on'
        h1.className = 'h1On'
        texto.className = 'textoOn'
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function browserSkills(){
    const section = document.querySelector('.skills-info')

    dataSkills.forEach((skill)=>{
        const data = document.createElement('div')
        data.classList.add('skill')
        data.innerHTML = `
            <p>${skill.title}</p>
            <div class="bar-progress">
                <div class="bg-bar-progress bar-progress-${skill.title}">
                </div>
            </div> 
        `
        section.appendChild(data)
    })
}

function browserPortfolio(){
    const section = document.querySelector('.main-projects-options')

    dataPortfolio.forEach((portfolio)=>{
        const card = document.createElement('div')
        card.classList.add('card_project')
        card.setAttribute('onclick', `window.open('${portfolio.link}')`, '_blank')
        card.setAttribute('data-anime', 'bottom')
        card.innerHTML = `
        <div class="card_project_img">
            <img src="${portfolio.previewImg}" alt="projeto "/>
        </div>
        <div class="card_project_about">
            <h3>${portfolio.title}</h3>
            <p>${portfolio.category}</p>
        </div>
        `

        section.appendChild(card)
    })
}

function boxTop(idBox){
    const box = document.querySelector(idBox)
    const boxPosition = box.getBoundingClientRect()
    return boxPosition.top + window.scrollY
}

function handleScroll() {
    console.log('init')
    const documentTop = window.scrollY;

    ['presentation-about', 'presentation-photo', 'experience-logo', 'box-skills-title', 'skills-info', 'box-experience','portfolio-title', 'main-projects-options', 'portfolio-cta', 'footer'].forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            const boxTopPosition = boxTop(`#${id}`);
            if (documentTop > boxTopPosition - 500) {
                element.classList.add('animation-on');
            } 
        }
    });
}
window.addEventListener('scroll', handleScroll)

handleScroll()

window.onload = function(){
    browserSkills()
    browserPortfolio()
    
    
}