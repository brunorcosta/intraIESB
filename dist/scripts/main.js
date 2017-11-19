function startIntro() {
    var intro = introJs();
    intro.setOptions({
        nextLabel: ' > ',
        prevLabel: ' < ',
        skipLabel: 'Pular',
        doneLabel: ' Fechar ',
        hidePrev: true,
        hideNext: true,
        scrollPadding: 50,
        steps: [
            {
                intro: "Bem-vindo ao tutorial da nova intranet do IESB!"
            },
            {
                element: document.querySelector('#barra-superior'),
                position: 'bottom',
                intro: "A barra superior ou <i>ghost header</i> traz as informações do seu perfil, do seu e-mail e um campo para busca."
            },
            {
                element: document.querySelector('#barra-lateral'),
                intro: "A barra fixa lateral traz links para os conteúdos da intranet além de acesso rápido aos sistemas mais utilizados por você.",
                position: 'right'
            },
            {
                element: document.querySelector('.custom-toggler'),
                intro: "O menu hamburguer é fixo e te levará ao menu completo da intranet.",
                position: 'bottom'
            },
            {
                element: document.querySelector('#barra-lateral'),
                intro: "Ao clicar na foto do perfil, sua home será mostrada.",
                position: 'right'
            },
            {
                element: document.querySelector('#eventos'),
                intro: "O <i>Flow</i> deixará você a poucos passos das informações mais relevantes do IESB. Esse é o Flow de Eventos.",
                position: 'bottom'
            },
            {
                element: document.querySelector('#noticias'),
                intro: "Esse é o Flow de Notícias. Todas as novidades estarão aqui e você também poderá ler os comunicados do IESB.",
                position: 'top'
            },
            {
                element: document.querySelector('#pessoal'),
                intro: "Esse é o Flow de Pessoal. Os principais serviços para sua vida profissional estarão aqui.",
                position: 'top'
            },
            {
                element: document.querySelector('#oportunidades'),
                intro: "Não esquecemos das oportunidades para sua carreira profissional. Elas estarão no Flow de Oportunidades.",
                position: 'top'
            },
            {
                element: document.querySelector('#ramais'),
                intro: "Se precisar ligar, você encontrará ramais dos principais serviços aqui.",
                position: 'top'
            },
            {
                element: document.querySelector('#helpdesk'),
                intro: "Se tiver problemas técnicos, o Help Desk estará a um clique.",
                position: 'top'
            },
            {
                intro: "Agora é só aproveitar e ficar sempre bem informado!"
            }
        ]
    });

    intro.start();
}
