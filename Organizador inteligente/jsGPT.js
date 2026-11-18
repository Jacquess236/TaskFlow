// esse js foi feito por IA arram eu nao sei mexer direito nissokk


function mudarPagina(pagina, botao) {

    document.querySelectorAll(
        "#botoes-sidebar .botao-lateral"
    ).forEach(b => {
        b.classList.remove("selecionado");
        b.removeAttribute("id");
    });
    
    botao.classList.add("selecionado");
    
    // Só depois atualiza as imagens!
    document.querySelectorAll("#botoes-sidebar .imagens").forEach(img => {
        const nome = img.dataset.icone;
        const elemento = img.closest(".botao-lateral");
    
        if (elemento.classList.contains("selecionado")) {
            img.src = `imgs/${nome} (1).png`;
        } else {
            img.src = `imgs/${nome}.png`;
        }
    });
    
    botao.classList.add("selecionado");

    // Encontra a área de conteúdo
    const conteudo = document.getElementById("conteudo");

    // Conteúdo de cada tela
    const paginas = {
        inicio: `
            <div id="conteudo-inicio">
            
                <h1 class="titulo-inicio">Olá, Jacquess!</h1>
                <p class="texto-pagina">Bem-vindo ao TaskFlow!</p>

                <div class="linha"></div>

                <div id="inicio1">

                    <div id="inicio11">
                        <img class="imagens" src="imgs/lista-de-tarefas.png">
                        
                        <div class="texto-inicio1">
                            <h1 class="titulo-inicio">8</h1>
                            <h4>Tarefas pendentes</h4>
                        </div>
                    </div>

                    <div id="inicio11">
                        <img class="imagens" src="imgs/lista-de-tarefas (1).png">
                        
                        <div class="texto-inicio1">
                            <h1 class="titulo-inicio">5</h1>
                            <h4>Tarefas concluídas</h4>
                        </div>
                    </div>

                    <div id="inicio11">
                        <img class="imagens" src="imgs/pasta-aberta.png">
                        
                        <div class="texto-inicio1">
                            <h1 class="titulo-inicio">2</h1>
                            <h4>Projetos Ativos</h4>
                        </div>
                    </div>

                    <div id="inicio11">
                        <img class="imagens" src="imgs/relogio.png">
                        
                        <div class="texto-inicio1">
                            <h1 class="titulo-inicio">Algumas Hora</h1>
                            <h4 class="titulo-inicio">Site Foi Feito Em</h4>
                        </div>
                    </div>
                </div>

                <div id="inicio2">
                    <div id="inicio21">
                        <h3> Tarefas Selecionadas</h3>
                        
                        <div class="linha"></div>
                        
                        <div class="item-tarefa">
                            <input type="checkbox" class="checkbox-task">
                            <span class="texto-tarefa">Fazer trabalho de Aplicações Web (Organizador)</span>
                        </div>

                        <div class="item-tarefa">
                            <input type="checkbox" class="checkbox-task">
                            <span class="texto-tarefa">Estudar MySQL</span>
                        </div>

                        <div class="item-tarefa">
                            <input type="checkbox" class="checkbox-task">
                            <span class="texto-tarefa">Programar esse site</span>
                        </div>

                        <div class="item-tarefa">
                            <input type="checkbox" class="checkbox-task">
                            <span class="texto-tarefa">Comer arroz com manga</span>
                        </div>

                        <div class="linha"/>

                        <p class="link-inicio"
                        onclick="mudarPagina('tarefas', document.querySelectorAll('#botoes-sidebar .botao-lateral')[1])">Ver Mais Tarefas →</p>
                    </div>
                </div>
                <div class="inicio2">

                    <div class="card-inicio">
                        <h3>Meus projetos</h3>
                        <div class="linha"></div>

                        <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>TaskFlow</strong>
                                <span>Organizador de tarefas inteligente</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div style="width: 75%"></div>
                                </div>
                                <span>75%</span>
                            </div>
                        </div>

                        <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>Assitir One Piece</strong>
                                <span>Não se pronuncia A-ni-me, é Uh-ni-me</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div class="verde-progresso" style="width: 5%"></div>
                                </div>
                                <span>5%</span>
                            </div>
                        </div>

                        <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>Arroz com Manga</strong>
                                <span>Alimento</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div class="laranja-progresso" style="width: 40%"></div>
                                </div>
                                <span>40%</span>
                            </div>
                        </div>

                        <div class="linha"></div>
                        <p class="link-inicio"
                        onclick="mudarPagina('projetos', document.querySelectorAll('#botoes-sidebar .botao-lateral')[2])">
                            Ver todos os projetos →
                        </p>
                    </div>

                    <div class="card-inicio">
                        <h3>Sobre mim</h3>
                        <div class="linha"></div>

                        <div class="sobre-conteudo">
                            <div class="foto-perfil">J</div>
                            <p>
                                Amo o LeBron, Amo o Muse, Amo o System Of A Down, Amo o Godzilla, Amo o Portgas D. Ace
                            </p>
                        </div>

                        <div class="informacoes-pessoais">
                            <span>⌖ Jaraguá do Sul, SC</span>
                            <span>✉ jacqu3snando8@email.com</span>
                        </div>
                    </div>

                </div>

                <div class="inicio2">

                    <div class="card-inicio">
                        <h3>Próximos compromissos</h3>
                        <div class="linha"></div>

                        <div class="compromisso">
                            <div class="data-compromisso">
                                <strong>5</strong>
                                <span>NOV</span>
                            </div>
                            <span>assistir Godzilla Minus Zero no cinema</span>
                            <span class="horario">?? - ??</span>
                        </div>

                        <div class="compromisso">
                            <div class="data-compromisso">
                                <strong>12</strong>
                                <span>NOV</span>
                            </div>
                            <span>Assistir One Piece</span>
                            <span class="horario">Todo o dia</span>
                        </div>

                        <div class="compromisso">
                            <div class="data-compromisso">
                                <strong>18</strong>
                                <span>NOV</span>
                            </div>
                            <span>Apresentação do Alexssander</span>
                            <span class="horario">10:00 - 11:00</span>
                        </div>

                        <p class="link-inicio"
                        onclick="mudarPagina('calendario', document.querySelectorAll('#botoes-sidebar .botao-lateral')[3])">
                            Ver calendário →
                        </p>
                    </div>

                </div>
            </div>

            
        `,

        
        tarefas: `
        <div id="pagina-tarefas">

            <h1 class="titulo-inicio">Minhas tarefas</h1>
            <p class="texto-pagina">Organize suas atividades e acompanhe seu progresso.</p>

            <!-- RESUMO -->
            <div class="resumo-tarefas">

                <div class="resumo-card">
                    <h2>8</h2>
                    <p>Tarefas pendentes</p>
                </div>

                <div class="resumo-card">
                    <h2>5</h2>
                    <p>Tarefas concluídas</p>
                </div>

                <div class="resumo-card">
                    <h2>13</h2>
                    <p>Total de tarefas</p>
                </div>

            </div>

            <!-- TAREFAS PENDENTES -->
            <div class="painel-tarefas">

                <h2>Tarefas pendentes</h2>
                <p class="texto-pagina">Você ainda tem 8 atividades para concluir.</p>

                <div class="linha"></div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task">
                        <div>
                            <span class="texto-tarefa">Fazer trabalho de Aplicações Web (Organizador)</span>
                            <p class="categoria-tarefa">Escola • Aplicações Web</p>
                        </div>
                    </div>
                    <span class="importancia alta">Alta</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task">
                        <div>
                            <span class="texto-tarefa">Estudar MySQL</span>
                            <p class="categoria-tarefa">Escola • Banco de Dados</p>
                        </div>
                    </div>
                    <span class="importancia alta">Alta</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task">
                        <div>
                            <span class="texto-tarefa">Programar esse site</span>
                            <p class="categoria-tarefa">Pessoal • Programação</p>
                        </div>
                    </div>
                    <span class="importancia alta">Alta</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task">
                        <div>
                            <span class="texto-tarefa">Comer arroz com manga</span>
                            <p class="categoria-tarefa">Pessoal • Alimentação</p>
                        </div>
                    </div>
                    <span class="importancia baixa">Baixa</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task">
                        <div>
                            <span class="texto-tarefa">Revisar conteúdo de HTML e CSS</span>
                            <p class="categoria-tarefa">Escola • Desenvolvimento Web</p>
                        </div>
                    </div>
                    <span class="importancia media">Média</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task">
                        <div>
                            <span class="texto-tarefa">Organizar os arquivos do projeto</span>
                            <p class="categoria-tarefa">Pessoal • Organização</p>
                        </div>
                    </div>
                    <span class="importancia baixa">Baixa</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task">
                        <div>
                            <span class="texto-tarefa">Finalizar apresentação do trabalho</span>
                            <p class="categoria-tarefa">Escola • Apresentação</p>
                        </div>
                    </div>
                    <span class="importancia alta">Alta</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task">
                        <div>
                            <span class="texto-tarefa">Atualizar lista de projetos</span>
                            <p class="categoria-tarefa">Pessoal • Organização</p>
                        </div>
                    </div>
                    <span class="importancia media">Média</span>
                </div>

            </div>

            <!-- TAREFAS CONCLUÍDAS -->
            <div class="painel-tarefas">

                <h2>Tarefas concluídas</h2>
                <p class="texto-pagina">Você já concluiu 5 atividades. Boa!</p>

                <div class="linha"></div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task" checked>
                        <span class="texto-tarefa">Criar estrutura HTML do site</span>
                    </div>
                    <span class="importancia media">Média</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task" checked>
                        <span class="texto-tarefa">Criar sidebar do TaskFlow</span>
                    </div>
                    <span class="importancia alta">Alta</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task" checked>
                        <span class="texto-tarefa">Escolher paleta de cores</span>
                    </div>
                    <span class="importancia baixa">Baixa</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task" checked>
                        <span class="texto-tarefa">Criar navegação entre páginas</span>
                    </div>
                    <span class="importancia alta">Alta</span>
                </div>

                <div class="tarefa-completa">
                    <div class="item-tarefa">
                        <input type="checkbox" class="checkbox-task" checked>
                        <span class="texto-tarefa">Estilizar os botões laterais</span>
                    </div>
                    <span class="importancia media">Média</span>
                </div>

            </div>

        </div>
        `,


        projetos: `
            <h1>Meus projetos</h1>
            <p>Acompanhe seus projetos pessoais e escolares.</p>

            <div class="card-inicio">

                        <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>TaskFlow</strong>
                                <span>Organizador de tarefas inteligente</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div style="width: 75%"></div>
                                </div>
                                <span>75%</span>
                            </div>
                        </div>

                        <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>Assitir One Piece</strong>
                                <span>Não se pronuncia A-ni-me, é Uh-ni-me</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div class="vermelho-progresso" style="width: 5%"></div>
                                </div>
                                <span>5%</span>
                            </div>
                        </div>

                        <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>Arroz com Manga</strong>
                                <span>Alimento</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div class="laranja-progresso" style="width: 40%"></div>
                                </div>
                                <span>40%</span>
                            </div>
                        </div>

                         <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>Essa aba aq de projetoskk</strong>
                                <span>TaskFlow</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div class="verde-progresso" style="width: 100%"></div>
                                </div>
                                <span>100%</span>
                            </div>
                        </div>

                         <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>Projeto Genérico só pra fillerkk</strong>
                                <span>Some shii</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div class="amarelo-progresso" style="width: 67%"></div>
                                </div>
                                <span>67%</span>
                            </div>
                        </div>

                         <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>Ouvir todos os álbuns e singles e tudo mais do Muse e do S.O.A.D.</strong>
                                <span>Música</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div class="laranja-progresso" style="width: 35%"></div>
                                </div>
                                <span>35%</span>
                            </div>
                        </div>

                         <div class="projeto-linha">
                            <div class="projeto-info">
                                <strong>Ver todos os Dunas</strong>
                                <span>Nicolas Ilibio</span>
                            </div>
                            <div class="progresso">
                                <div class="barra-progresso">
                                    <div class="amarelo-progresso" style="width: 66%"></div>
                                </div>
                                <span>66%</span>
                            </div>
                        </div>



                        <div class="linha"></div>
                    </div>
        `,

        
            calendario: `
            <div id="pagina-calendario">

                <h1 class="titulo-inicio">Meu calendário</h1>
                <p class="texto-pagina">Organize seus dias e acompanhe seus compromissos.</p>

                <div class="calendario-container">

                    <div class="calendario-topo">
                        <h2 id="mes-ano"></h2>

                        <div class="calendario-botoes">
                            <button onclick="mudarMes(-1)">&#10094;</button>
                            <button onclick="mudarMes(1)">&#10095;</button>
                        </div>
                    </div>

                    <div class="calendario-grade" id="calendario-grade">
                    </div>

                </div>

                <div class="painel-tarefas compromissos-calendario">
                    <h2>Próximos compromissos</h2>
                    <div class="linha"></div>

                    <div class="compromisso">
                        <div class="data-compromisso">
                            <strong>05</strong>
                            <span>NOV</span>
                        </div>
                        <span>assistir Godzilla Minus Zero no cinema</span>
                        <span class="horario">?? - ??</span>
                    </div>

                    <div class="compromisso">
                        <div class="data-compromisso">
                            <strong>12</strong>
                            <span>NOV</span>
                        </div>
                        <span>Assistir One Piece</span>
                        <span class="horario">Todo o dia</span>
                    </div>

                    <div class="compromisso">
                        <div class="data-compromisso">
                            <strong>18</strong>
                            <span>NOV</span>
                        </div>
                        <span>Apresentação do Alexssander</span>
                        <span class="horario">10:00</span>
                    </div>
                </div>

            </div>
            `,


        
            sobre: `
            <div id="pagina-sobre">

                <h1 class="titulo-sobre">Sobre mim</h1>
                <p class="subtitulo-sobre">Um pouco sobre mim, meus interesses e objetivos. NESSA EU USEI IA PQ TENHO Q APRESENTAR ESSA COISA HOJE...</p>

                <div class="card-perfil">
                    <div class="foto-perfil">JL</div>

                    <div class="info-perfil">
                        <h2>Olá! Eu sou <span>Jacquess.</span></h2>

                        <p>
                            Estudante de Informática apaixonado por tecnologia,
                            design e desenvolvimento. Gosto de aprender coisas
                            novas e transformar ideias em projetos.
                        </p>

                        <div class="contato-perfil">
                            <span>⌖ Jaraguá do Sul, SC</span>
                            <span>✉ jacques@email.com</span>
                        </div>
                    </div>
                </div>

                <div class="cards-sobre">

                    <div class="card-sobre">
                        <h2>Interesses</h2>
                        <div class="detalhe-roxo"></div>

                        <div class="interesses">
                            <div>⌨ Programação</div>
                            <div>☠︎︎ THE ONE PIECE IS REAL</div>
                            <div>🎮 ROCKET LEAGUE E TOKEN PIRATA</div>
                            <div>♫ S.O.A.D. & Muse</div>
                            <div>💻 Coisas</div>
                            <div>💙 Godzilla</div>
                        </div>
                    </div>

                    <div class="card-sobre">
                        <h2>Meus objetivos</h2>
                        <div class="detalhe-roxo"></div>

                        <div class="objetivo">
                            <strong>01</strong>
                            <div>
                                <p>Aprender novas linguagens de programação</p>
                                <span>Em andamento</span>
                            </div>
                        </div>

                        <div class="objetivo">
                            <strong>02</strong>
                            <div>
                                <p>Desenvolver projetos cada vez melhores</p>
                                <span>Próximo objetivo</span>
                            </div>
                        </div>

                        <div class="objetivo">
                            <strong>03</strong>
                            <div>
                                <p>Trabalhar como desenvolvedor</p>
                                <span>Objetivo futuro</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            `,

    };

    // Mostra a tela escolhida
    conteudo.innerHTML = paginas[pagina];

    if (pagina === "calendario") {
        gerarCalendario();
    }
}



let dataCalendario = new Date();

// LISTA DE COMPROMISSOS
const compromissos = [
    {
        dia: 5,
        mes: 10,
        ano: 2026,
        titulo: "assistir Godzilla Minus Zero no cinema",
        horario: "?? - ??"
    },
    {
        dia: 12,
        mes: 10,
        ano: 2026,
        titulo: "Assistir One Piece",
        horario: "Todo o dia"
    },
    {
        dia: 18,
        mes: 10,
        ano: 2026,
        titulo: "Apresentação do Alexssander",
        horario: "10:00 - 11:00"
    }
];


// GERAR CALENDÁRIO
function gerarCalendario() {

    const grade = document.getElementById("calendario-grade");
    const titulo = document.getElementById("mes-ano");

    if (!grade || !titulo) return;

    const ano = dataCalendario.getFullYear();
    const mes = dataCalendario.getMonth();

    const primeiroDia = new Date(ano, mes, 1).getDay();
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();

    const hoje = new Date();

    const nomesMeses = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"
    ];

    titulo.textContent = nomesMeses[mes] + " " + ano;

    grade.innerHTML = "";

    // DIAS DA SEMANA
    const diasSemana = [
        "Dom", "Seg", "Ter", "Qua",
        "Qui", "Sex", "Sáb"
    ];

    diasSemana.forEach(dia => {
        grade.innerHTML += `
            <div class="dia-semana">${dia}</div>
        `;
    });

    // ESPAÇOS ANTES DO PRIMEIRO DIA
    for (let i = 0; i < primeiroDia; i++) {
        grade.innerHTML += `
            <div class="dia-vazio"></div>
        `;
    }

    // DIAS DO MÊS
    for (let dia = 1; dia <= ultimoDia; dia++) {

        // Verifica se é hoje
        const ehHoje =
            dia === hoje.getDate() &&
            mes === hoje.getMonth() &&
            ano === hoje.getFullYear();

        const classes = ehHoje
            ? "dia-calendario hoje"
            : "dia-calendario";

        // Procura compromissos do dia
        const eventosDoDia = compromissos.filter(evento =>
            evento.dia === dia &&
            evento.mes === mes &&
            evento.ano === ano
        );

        // Cria as etiquetas dos compromissos
        let eventosHTML = "";

        eventosDoDia.forEach(evento => {
            eventosHTML += `
                <div class="evento-calendario">
                    <strong>${evento.horario}-</strong>
                    <span>${evento.titulo}</span>
                </div>
            `;
        });

        // Adiciona o dia ao calendário
        grade.innerHTML += `
            <div class="${classes}">
                <span>${dia}</span>
                ${eventosHTML}
            </div>
        `;
    }
}


// MUDAR MÊS
function mudarMes(direcao) {

    dataCalendario.setMonth(
        dataCalendario.getMonth() + direcao
    );

    gerarCalendario();
}
