const technologiesImg = {
    html: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    css: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    js: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    nextjs: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    ts: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    node: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
    react: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    express: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    py: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    php: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
}

const cardContent = [
    {
        title: "Gerenciador de links",
        img: "assets/images/projects-images/gerenciador-de-links-template.png",
        technologies: [ technologiesImg.html, technologiesImg.css, technologiesImg.js ],
        description: "Desenvolvi um site personalizado para centralizar links em um único lugar, facilitando o acesso a conteúdos, redes sociais e informações importantes. O site tem layout responsivo para ótima experiência em dispositivos móveis e desktops. Também integrei meu perfil de <strong>artista do Spotify</strong> e minha playlist mais escutada, tornando-o único, organizado e alinhado à minha identidade.",
        link: "https://zielisgabriel-link.vercel.app"
    },
    {
        title: "API de Tickets de Suporte",
        img: "assets/images/projects-images/api-tickets-de-suporte.png",
        technologies: [ technologiesImg.node, technologiesImg.js ],
        description: "Desenvolvi uma <strong>API</strong> para gerenciamento de tickets de suporte, permitindo criar, atualizar, listar e excluir tickets, otimizando o registro de problemas em equipamentos. O projeto foi desenvolvido sem frameworks, usando apenas módulos nativos do Node.js. A API é eficiente, segue boas práticas de desenvolvimento backend e permite integrações futuras.",
        link: "https://github.com/zielisgabriel/tickets-de-suporte"
    },
    {
        title: "Travelgram",
        img: "assets/images/projects-images/travelgram-galeria.png",
        technologies: [ technologiesImg.html, technologiesImg.css ],
        description: 'Desenvolvi o <strong>Travelgram</strong>, uma landing page estática e visualmente atrativa projetada para apresentar uma galeria de fotos de viagens. A página inclui uma seção "Sobre o Usuário", onde é exibida uma breve biografia, e uma galeria que organiza e destaca as fotos postadas. Travelgram é simples e ideal para servir como vitrine de memórias, focando em design limpo e elegante.',
        link: "https://landing-page-travelgram.vercel.app"
    },
    {
        title: "Numbers Sorteador",
        img: "assets/images/projects-images/numbers-sorteador.png",
        technologies: [ technologiesImg.html, technologiesImg.css, technologiesImg.js ],
        description: 'Apresento o <strong>Numbers</strong>, um site prático para sorteios personalizados. Com ele, você define intervalos de números, escolhe a quantidade de jogos e recebe resultados rápidos e eficientes. Criado com HTML, CSS e JavaScript, o projeto é simples e intuitivo. Já estou planejando melhorias, como exportação de resultados e modo noturno.',
        link: "https://numbers-sorteador.vercel.app"
    },
]

projectsArea = document.querySelector('.projects-area')

for(const card of cardContent){
    const elementCard = document.createElement('div')
    elementCard.classList.add('card')
    elementCard.setAttribute('data-aos', "fade-up")
    elementCard.setAttribute('data-aos-duration', "1000")

    const header = document.createElement('header')
    const h3 = document.createElement('h3')
    h3.innerHTML = card.title
    header.append(h3)
    elementCard.append(header)

    const previewProject = document.createElement('div')
    previewProject.classList.add('preview-project')
    const previewImage = document.createElement('img')
    previewImage.setAttribute('src', card.img)
    previewProject.append(previewImage)
    elementCard.append(previewProject)

    const technologiesIconsList = document.createElement('ul')
    technologiesIconsList.classList.add('technologies-icons')
    const cardTechnologies = card.technologies
    for (const techs of cardTechnologies) {
        const technologiesLi = document.createElement('li')
        const technologiesImages = document.createElement('img')
        technologiesImages.setAttribute('src', techs)
        technologiesLi.append(technologiesImages)
        technologiesIconsList.append(technologiesLi)
    }
    elementCard.append(technologiesIconsList)

    const description = document.createElement('div')
    description.classList.add('description-project')
    const descriptionParagraph = document.createElement('p')
    descriptionParagraph.innerHTML = card.description
    description.append(descriptionParagraph)
    elementCard.append(description)

    const preview = document.createElement('div')
    preview.classList.add('preview')
    const linkPreview = document.createElement('a')
    linkPreview.setAttribute('href', card.link)
    linkPreview.setAttribute('target', '_blank')
    preview.append(linkPreview)
    const btnPreview = document.createElement('button')
    btnPreview.textContent = "Visualizar"
    linkPreview.append(btnPreview)
    elementCard.append(preview)
    


    projectsArea.append(elementCard)
}