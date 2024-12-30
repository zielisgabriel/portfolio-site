const skills = [
    {
        title: "js",
        description: "Com domínio intermediário em JavaScript, possuo experiência na manipulação do DOM e programação assíncrona. Desenvolvo funcionalidades interativas utilizando recursos modernos do ES6+, incluindo Promises, async/await e arrow functions, criando aplicações web dinâmicas e responsivas."
    },
    {
        title: "html",
        description: "Construo estruturas web semânticas e acessíveis utilizando HTML5, com foco em landing pages otimizadas para SEO. Minha experiência abrange a criação de formulários interativos e a implementação de layouts modernos, sempre seguindo as melhores práticas de desenvolvimento."
    },
    {
        title: "css",
        description: "Desenvolvo estilos e layouts responsivos com CSS3, aplicando conceitos avançados de Flexbox e Grid. Minha experiência inclui a criação de interfaces modernas e adaptáveis, com animações fluidas e transições suaves, garantindo compatibilidade entre diferentes navegadores."
    },
    {
        title: "nodejs",
        description: "Especializado no desenvolvimento back-end com Node.js, crio APIs RESTful robustas utilizando Express. Trabalho com integração de bancos de dados, implementação de middlewares e gerenciamento de rotas, seguindo princípios de clean code e boas práticas de arquitetura de software."
    }
]



const descriptionSkills = document.querySelector('.description-skills')
const skillRadio = document.querySelectorAll('.skill-radio')

descriptionSkills.innerHTML = skills[0].description

addEventListener('input', (e) => {
    const result = skills.find((skill) => {
        return skill.title === e.srcElement.value
    })
    
    descriptionSkills.innerHTML = result.description
})