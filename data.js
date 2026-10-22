// Dados estruturados do Edital TJSP (Escrevente Técnico Judiciário)
const EDITAL_TJSP_DATA = {
  "blocos": [
    {
      "id": "bloco-1",
      "nome": "Bloco I: Língua Portuguesa",
      "questoes": 16,
      "badgeColor": "sky",
      "materias": [
        {
          "id": "portugues",
          "nome": "Língua Portuguesa",
          "questoes": 16,
          "icone": "book-open",
          "descricao": "Compreensão de texto, gramática normativa, sintaxe, regência, crase e pontuação segundo o padrão da banca Vunesp.",
          "topicos": [
            {
              "id": "port-1",
              "titulo": "1. Análise, compreensão e interpretação de textos",
              "detalhes": "Diversos tipos de textos verbais, não verbais, literários e não literários. Identificação de ideias principais, secundárias e intenção do autor.",
              "dicas": "Atenção redobrada aos conectivos, pronomes anafóricos e ao gênero textual (notícia, crônica, dissertação, charge)."
            },
            {
              "id": "port-2",
              "titulo": "2. Informações literais e inferências possíveis",
              "detalhes": "Diferenciação clara entre dados textualmente explícitos e deduções lógicas autorizadas pelo texto.",
              "dicas": "Cuidado com alternativas extremistas que utilizam 'nunca', 'sempre', 'apenas' ou que extrapolam os limites do texto."
            },
            {
              "id": "port-3",
              "titulo": "3. Ponto de vista do autor",
              "detalhes": "Tese central defendida, posicionamento crítico implícito ou explícito, tom discursivo (irônico, didático, reflexivo).",
              "dicas": "Sublinhe adjetivos e advérbios modalizadores que entregam o juízo de valor do articulista."
            },
            {
              "id": "port-4",
              "titulo": "4. Estruturação do texto e recursos de coesão",
              "detalhes": "Relações lógico-discursivas entre ideias (causa, consequência, concessão, oposição), anáfora, catáfora, elipse e conectivos.",
              "dicas": "Decore as principais conjunções adversativas (contudo, todavia) e concessivas (embora, conquanto, ainda que)."
            },
            {
              "id": "port-5",
              "titulo": "5. Significação contextual de palavras e expressões",
              "detalhes": "Polissemia, sentido contextual, adequação semântica e vocabulário erudito comumente empregado em provas da Vunesp.",
              "dicas": "Substitua a expressão no próprio texto para checar se preserva coerência semântica e gramatical."
            },
            {
              "id": "port-6",
              "titulo": "6. Sinônimos e antônimos",
              "detalhes": "Equivalência e oposição de termos conforme o contexto frasal em que estão inseridos.",
              "dicas": "Atente para os prefixos de negação (in-, des-, a-) e falsos cognatos."
            },
            {
              "id": "port-7",
              "titulo": "7. Sentido próprio e figurado das palavras",
              "detalhes": "Denotação (sentido real, objetivo) x Conotação (metafórico, poético, expressivo). Figuras de linguagem usuais.",
              "dicas": "Identifique metáfora, metonímia, eufemismo e hipérbole frequentes nos textos dissertativos da Vunesp."
            },
            {
              "id": "port-8",
              "titulo": "8. Classes de palavras (Morfologia e Sentido)",
              "detalhes": "Substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição e conjunção. Emprego, flexão e valor semântico.",
              "dicas": "Foco total na classificação de 'que' e 'se', além de valores temporais e modais dos verbos (subjuntivo e pretéritos)."
            },
            {
              "id": "port-9",
              "titulo": "9. Concordância verbal e nominal",
              "detalhes": "Regras gerais e casos especiais: sujeito composto, voz passiva sintética ('vende-se / vendem-se'), verbos impessoais (haver, fazer).",
              "dicas": "O verbo 'haver' com sentido de existir/ocorrer não tem sujeito e fica sempre no singular! 'Havia muitas vagas'."
            },
            {
              "id": "port-10",
              "titulo": "10. Regência verbal e nominal",
              "detalhes": "Exigência de preposição pelos verbos e nomes: assistir, visar, aspirar, agradar, implicar, preferir, esquecer-se, lembrar-se.",
              "dicas": "'Aspirar a' (almejar - VTI), 'Assistir a' (ver - VTI), 'Implicar' (acarretar - VTD, sem 'em'), 'Preferir X a Y' (sem 'do que')."
            },
            {
              "id": "port-11",
              "titulo": "11. Colocação pronominal",
              "detalhes": "Próclise, mesóclise e ênclise. Fatores atrativos (palavras negativas, conjunções subordinativas, pronomes relativos e indefinidos, advérbios).",
              "dicas": "Nunca inicie oração com pronome oblíquo átono ('Me diga' é coloquial; correto: 'Diga-me'). Com fator atrativo, a próclise é obrigatória."
            },
            {
              "id": "port-12",
              "titulo": "12. Crase",
              "detalhes": "Casos obrigatórios, proibidos e facultativos de junção da preposição 'a' com artigo feminino ou pronomes 'aquele(a)'.",
              "dicas": "Substitua a palavra feminina seguinte por uma masculina: se virar 'ao(s)', leva crase; se virar apenas 'o', não leva crase."
            },
            {
              "id": "port-13",
              "titulo": "13. Pontuação",
              "detalhes": "Emprego de vírgula, ponto e vírgula, dois-pontos, travessão e parênteses. Isolamento de aposto, vocativo, adjuntos adverbiais deslocados.",
              "dicas": "Regra áurea: JAMAIS separe por vírgula o sujeito do verbo, nem o verbo de seus complementos diretos/indiretos."
            }
          ]
        }
      ]
    },
    {
      "id": "bloco-2",
      "nome": "Bloco II: Conhecimentos em Direito",
      "questoes": 30,
      "badgeColor": "emerald",
      "materias": [
        {
          "id": "direito-penal",
          "nome": "Direito Penal",
          "questoes": 6,
          "icone": "shield-alert",
          "descricao": "Crimes contra a Fé Pública e Crimes contra a Administração Pública (arts. 293 a 359 do Código Penal).",
          "topicos": [
            {
              "id": "pen-1",
              "titulo": "1. Falsidade de Títulos e Papéis Públicos (arts. 293 a 295)",
              "detalhes": "Falsificação de papéis públicos (selos, guias, títulos da dívida), petrechos de falsificação e causas de aumento.",
              "dicas": "Verbos típicos: falsificar, fabricar, alterar, suprimir, usar ou restituir à circulação papel falsificado."
            },
            {
              "id": "pen-2",
              "titulo": "2. Falsidade Documental (arts. 296 a 305)",
              "detalhes": "Falsificação de documento público (art. 297), documento particular (art. 298), falsidade ideológica (art. 299), certidão falsa e uso de documento falso (art. 304).",
              "dicas": "Falsidade Material afeta a autenticidade física da forma. Falsidade Ideológica é formalmente genuíno, mas a declaração nele inserida é mentirosa."
            },
            {
              "id": "pen-3",
              "titulo": "3. Outras Falsidades e Fraudes (arts. 307, 308 e 311-A)",
              "detalhes": "Falsa identidade (art. 307), uso de documento alheio (art. 308) e Fraudes em certames de interesse público (art. 311-A).",
              "dicas": "Art. 311-A: punir quem utiliza ou divulga indevidamente conteúdo sigiloso de concurso público, vestibular ou processo seletivo."
            },
            {
              "id": "pen-4",
              "titulo": "4. Crimes Praticados por Funcionário Público contra a Administração (arts. 312 a 317 e 319 a 327)",
              "detalhes": "Peculato (apropriação, desvio, furto, culposo), Concussão (exigir), Corrupção Passiva (solicitar/receber/aceitar), Prevaricação (satisfazer interesse/sentimento pessoal), Condescendência Criminosa, Advocacia Administrativa e Violação de Sigilo Funcional. Conceito penal de funcionário público (art. 327).",
              "dicas": "EXIGIR = Concussão. SOLICITAR ou RECEBER = Corrupção Passiva. RETARDAR ATO POR INTERESSE/SENTIMENTO PESSOAL = Prevaricação. DEIXAR DE PUNIR SUBORDINADO POR INDULGÊNCIA = Condescendência Criminosa."
            },
            {
              "id": "pen-5",
              "titulo": "5. Crimes Praticados por Particular contra a Administração (arts. 328 a 333, 336 e 337)",
              "detalhes": "Usurpação de função pública, Resistência, Desobediência, Desacato, Tráfico de Influência e Corrupção Ativa (oferecer ou prometer vantagem indevida).",
              "dicas": "Corrupção Ativa é crime formal: aperfeiçoa-se com a simples oferta ou promessa à autoridade, não dependendo de aceitação."
            },
            {
              "id": "pen-6",
              "titulo": "6. Crimes contra a Administração da Justiça (arts. 339 a 347, 357 e 359)",
              "detalhes": "Denunciação caluniosa (art. 339), comunicação falsa de crime (art. 340), autoacusação falsa, falso testemunho ou perícia (art. 342), coação no curso do processo (art. 344), fraude processual e exploração de prestígio.",
              "dicas": "Denunciação caluniosa exige imputação de crime a quem sabe ser inocente, dando causa a inquérito/processo. No falso testemunho, há retratação com extinção da punibilidade antes da sentença."
            }
          ]
        },
        {
          "id": "direito-proc-penal",
          "nome": "Direito Processual Penal",
          "questoes": 7,
          "icone": "scale",
          "descricao": "Juiz, MP, Acusado e Defensor, Citações e Intimações, Procedimento Comum, Júri, Recursos e Juizados Especiais Criminais.",
          "topicos": [
            {
              "id": "procp-1",
              "titulo": "1. Do Juiz, MP, Acusado, Defensor e Assistentes (arts. 251 a 258, 261 a 267 e 274)",
              "detalhes": "Poderes instrutórios e de polícia da audiência, causas de suspeição e impedimento, garantia de defesa técnica obrigatória.",
              "dicas": "Nenhum acusado será julgado sem defensor, ainda que foragido. O assistente de acusação é admitido a partir da denúncia."
            },
            {
              "id": "procp-2",
              "titulo": "2. Citações e Intimações (arts. 351 a 372)",
              "detalhes": "Citação por mandado, citação por precatória, citação por hora certa e citação por edital. Regras para réu preso e militar.",
              "dicas": "Art. 366: Se o réu citado por edital não comparece e não constitui advogado, suspendem-se processo e prescrição, podendo o juiz decretar prisão preventiva ou produção antecipada de provas urgentes."
            },
            {
              "id": "procp-3",
              "titulo": "3. Procedimento Comum e Tribunal do Júri (arts. 394 a 497)",
              "detalhes": "Rito ordinário, sumário e sumaríssimo. Resposta à acusação em 10 dias, absolvição sumária (art. 397: atipicidade, excludente de ilicitude/culpabilidade, extinção da punibilidade), audiência una de instrução e 1ª fase do Júri (pronúncia, impronúncia, absolvição sumária e desclassificação).",
              "dicas": "Prazo para resposta à acusação: 10 dias. O rol de testemunhas no ordinário é até 8; no sumário até 5."
            },
            {
              "id": "procp-4",
              "titulo": "4. Processo Sumário e Restauração de Autos (arts. 531 a 538 e 541 a 548)",
              "detalhes": "Prazos e audiência no rito sumário. Procedimento de restauração de autos de processo extraviados ou destruídos.",
              "dicas": "Na restauração de autos, o juiz examinará cópias, registros de protocolo e certidões existentes nos cartórios."
            },
            {
              "id": "procp-5",
              "titulo": "5. Recursos em Geral e Habeas Corpus (arts. 574 a 667)",
              "detalhes": "Princípios recursais, Recurso em Sentido Estrito - RESE (art. 581), Apelação (art. 593), Embargos de Declaração, Carta Testemunhável e Habeas Corpus (arts. 647 a 667).",
              "dicas": "Prazos: Apelação são 5 dias para interposição e 8 dias para razões. RESE são 5 dias para interposição e 2 dias para razões."
            },
            {
              "id": "procp-6",
              "titulo": "6. Juizados Especiais Criminais - JECRIM (Lei nº 9.099/95, arts. 60 a 83, 88 e 89)",
              "detalhes": "Infrações de menor potencial ofensivo (pena máxima não superior a 2 anos ou contravenções), termo circunstanciado, composição civil dos danos, transação penal e sursis processual (art. 89).",
              "dicas": "A composição civil homologada extingue a punibilidade se a ação for penal privada ou pública condicionada à representação."
            }
          ]
        },
        {
          "id": "direito-proc-civil",
          "nome": "Direito Processual Civil",
          "questoes": 7,
          "icone": "file-text",
          "descricao": "Atos processuais, prazos, tutelas provisórias, rito comum, cumprimento de sentença, recursos e Juizados Cíveis/Fazenda Pública.",
          "topicos": [
            {
              "id": "procc-1",
              "titulo": "1. Impedimento e Suspeição do Juiz (arts. 144 a 155)",
              "detalhes": "Causas objetivas de impedimento (parentesco, interesse direito) e subjetivas de suspeição (amizade íntima, inimizade capital), deveres e responsabilidades dos auxiliares judiciais.",
              "dicas": "Impedimento é matéria de ordem pública, insanável e com presunção absoluta de parcialidade."
            },
            {
              "id": "procc-2",
              "titulo": "2. Atos Processuais, Prazos e Comunicação (arts. 188 a 275)",
              "detalhes": "Forma dos atos, contagem de prazos estritamente em DIAS ÚTEIS (art. 219), suspensão no recesso forense (20/dez a 20/jan), citações e intimações eletrônicas e por correio.",
              "dicas": "Regra fundamental do CPC/15: prazos processuais contam-se exclusivamente em dias úteis!"
            },
            {
              "id": "procc-3",
              "titulo": "3. Tutela Provisória: Urgência e Evidência (arts. 294 a 311)",
              "detalhes": "Tutela de urgência (antecipada x cautelar; em caráter antecedente ou incidental; probabilidade do direito e perigo de dano) e Tutela de evidência (art. 311 - prescinde de perigo de dano).",
              "dicas": "Atenção: A tutela da evidência independe da demonstração de perigo de dano ou de risco ao resultado útil do processo!"
            },
            {
              "id": "procc-4",
              "titulo": "4. Procedimento Comum e Cumprimento de Sentença (arts. 318 a 538)",
              "detalhes": "Petição inicial, audiência prévia de conciliação/mediação, contestação (prazo de 15 dias), reconvenção, revelia, julgamento conforme o estado do processo, fase probatória, sentença, coisa julgada e cumprimento de sentença (título executivo judicial).",
              "dicas": "Se ambas as partes manifestarem expressamente desinteresse na audiência de conciliação, o prazo da contestação começa do protocolo do desinteresse."
            },
            {
              "id": "procc-5",
              "titulo": "5. Recursos Cíveis (arts. 994 a 1026)",
              "detalhes": "Apelação (sentença), Agravo de Instrumento (decisões interlocutórias do art. 1.015), Agravo Interno, Embargos de Declaração (omissão, contradição, obscuridade, erro material - prazo 5 dias).",
              "dicas": "Prazo geral dos recursos cíveis: 15 dias úteis, com a única exceção dos Embargos de Declaração cujo prazo é de 5 dias úteis."
            },
            {
              "id": "procc-6",
              "titulo": "6. Juizados Especiais Cíveis (Lei nº 9.099/95, arts. 3º ao 19)",
              "detalhes": "Competência cível para causas até 40 salários mínimos, jus postulandi sem advogado em causas de até 20 salários mínimos, princípios de celeridade e informalidade.",
              "dicas": "No JEC não se admite intervenção de terceiros nem reconvenção (permite-se apenas pedido contraposto na contestação)."
            },
            {
              "id": "procc-7",
              "titulo": "7. Juizados Especiais da Fazenda Pública (Lei nº 12.153/2009)",
              "detalhes": "Competência absoluta para causas de até 60 salários mínimos contra Estado de SP, Municípios e suas autarquias e fundações públicas.",
              "dicas": "A competência dos Juizados da Fazenda Pública é absoluta nos locais onde estiverem instalados."
            }
          ]
        },
        {
          "id": "direito-constitucional",
          "nome": "Direito Constitucional",
          "questoes": 4,
          "icone": "landmark",
          "descricao": "Direitos Fundamentais (art. 5º), Direitos Sociais, Nacionalidade, Direitos Políticos, Administração Pública e Poder Judiciário.",
          "topicos": [
            {
              "id": "const-1",
              "titulo": "1. Direitos e Deveres Individuais e Coletivos (Art. 5º)",
              "detalhes": "Inviolabilidade de domicílio, sigilo das comunicações, direitos do preso, ampla defesa e contraditório, rol de remédios constitucionais (HC, HD, MS, MI e Ação Popular).",
              "dicas": "A casa é asilo inviolável: durante o dia com ordem judicial; flagrante, socorro ou desastre a qualquer hora (dia ou noite)."
            },
            {
              "id": "const-2",
              "titulo": "2. Direitos Sociais, Nacionalidade e Direitos Políticos (arts. 6º a 17)",
              "detalhes": "Direitos dos trabalhadores, hipóteses de brasileiro nato e naturalizado, cargos privativos de brasileiro nato (art. 12, §3º), alistamento eleitoral, inelegibilidades absolutas e relativas.",
              "dicas": "Cargos natos (MP3.COM): Min. STF, Pres./Vice República, Pres. Câmara, Pres. Senado, Carreira diplomática, Oficial forças armadas, Min. Defesa."
            },
            {
              "id": "const-3",
              "titulo": "3. Da Administração Pública (arts. 37 a 41)",
              "detalhes": "Princípios expressos (LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência), concurso público e validade, acumulação lícita de cargos, estabilidade após 3 anos.",
              "dicas": "Acumulação de cargos em regra é vedada, exceto: 2 cargos de professor; 1 de professor com outro técnico/científico; 2 cargos/empregos privativos de profissionais de saúde."
            },
            {
              "id": "const-4",
              "titulo": "4. Do Poder Judiciário (Art. 92)",
              "detalhes": "Enumeração constitucional dos órgãos do Poder Judiciário: STF, CNJ, STJ, TST/TRTs, TSE/TREs, STM/TJs Militares e Tribunais/Juízes Estaduais.",
              "dicas": "Atenção: O CNJ integra formalmente a estrutura do Poder Judiciário, mas não exerce jurisdição (atua no controle administrativo e financeiro)."
            }
          ]
        },
        {
          "id": "direito-administrativo",
          "nome": "Direito Administrativo",
          "questoes": 3,
          "icone": "briefcase",
          "descricao": "Estatuto dos Funcionários Civis de SP (Lei 10.261/68) e Lei de Improbidade Administrativa (Lei 8.429/92 atualizada).",
          "topicos": [
            {
              "id": "adm-1",
              "titulo": "1. Estatuto dos Funcionários de SP: Provimento e Posse (arts. 1º a 86)",
              "detalhes": "Formas de provimento (nomeação, recondução, reintegração, aproveitamento, reversão, readaptação), requisitos para investidura, posse e exercício, estágio probatório.",
              "dicas": "Prazo de posse no TJSP: 30 dias contados da publicação no DO, prorrogável por mais 30 mediante requerimento tempestivo."
            },
            {
              "id": "adm-2",
              "titulo": "2. Estatuto de SP: Direitos, Licenças e Deveres (arts. 171 a 175; 239 a 250)",
              "detalhes": "Licença-prêmio, deveres do servidor público paulista, proibições formais e esferas de responsabilidade funcional (civil, penal e disciplinar).",
              "dicas": "A responsabilidade administrativa é autônoma, salvo se na esfera criminal restar categoricamente provada a inexistência do fato ou negativa de autoria."
            },
            {
              "id": "adm-3",
              "titulo": "3. Estatuto de SP: Regime Disciplinar e Processo (arts. 251 a 323)",
              "detalhes": "Penalidades funcionais (repreensão, suspensão até 90 dias, multa, demissão, demissão a bem do serviço público, cassação de aposentadoria) e regras do Processo Administrativo Disciplinar (PAD).",
              "dicas": "Prescrição disciplinar em SP: 5 anos para infrações cominadas com demissão; 2 anos para repreensão e suspensão."
            },
            {
              "id": "adm-4",
              "titulo": "4. Lei de Improbidade Administrativa (Lei nº 8.429/92 com Lei 14.230/21)",
              "detalhes": "Necessidade absoluta de DOLO ESPECÍFICO em todas as condutas. Enriquecimento ilícito (art. 9º), Dano ao erário (art. 10) e Atentado contra princípios da administração (art. 11). Sanções aplicáveis e prazo prescricional de 8 anos.",
              "dicas": "Ponto de ouro: Não há mais improbidade administrativa culposa na legislação brasileira! Todas as condutas exigem dolo comprovado."
            }
          ]
        },
        {
          "id": "legislacao-interna",
          "nome": "Legislação Interna e Normas do TJSP",
          "questoes": 3,
          "icone": "building",
          "descricao": "Normas da Corregedoria (NSCGJ), Teletrabalho (Res. 850/2021), Sistema eproc (Res. 963/2025), Plano de Cargos (LC 1.111/2010) e Regimento.",
          "topicos": [
            {
              "id": "legint-1",
              "titulo": "1. Normas da Corregedoria Geral da Justiça (NSCGJ)",
              "detalhes": "Tomo I - Cap. II (Seção I - subseções I e II); Cap. III (Seções I, II, V, VI, VII; Seção VIII - subseções I, II e III; Seções IX a XIX); Cap. XI (Seções I a VII). Ofícios de justiça, escrituração, numeração de folhas, autuação, cartas precatórias e arquivamento.",
              "dicas": "Memorize que as cotas marginais e interlineares são vedadas nos autos e a numeração mecânica/manual de folhas não pode ter rasuras."
            },
            {
              "id": "legint-2",
              "titulo": "2. Resolução TJSP nº 850/2021 (Teletrabalho no TJSP)",
              "detalhes": "Regulamentação do regime de teletrabalho total e parcial no Tribunal de Justiça de São Paulo, termos de adesão, produtividade mínima superior (15% a mais) e vedações funcionais.",
              "dicas": "Servidores em teletrabalho assumem o compromisso de manter produtividade superior à meta presencial e arcar com seus próprios equipamentos/conexão."
            },
            {
              "id": "legint-3",
              "titulo": "3. Resolução TJSP nº 963/2025 (Sistema eproc no Judiciário Paulista)",
              "detalhes": "Diretrizes de implantação, governança e uso do sistema eproc nas secretarias e gabinetes do TJSP. Protocolo eletrônico, assinatura digital e contingência.",
              "dicas": "Tema novíssimo do edital: trata da transição para o eproc, responsabilidade pelo uso das senhas pessoais e certificação digital no tribunal."
            },
            {
              "id": "legint-4",
              "titulo": "4. Lei Complementar nº 1.111/2010 (Plano de Cargos e Carreiras)",
              "detalhes": "Organização do quadro funcional do TJSP, atribuições gerais do Escrevente Técnico Judiciário, progressão por merecimento e antiguidade, Adicional de Qualificação (AQ).",
              "dicas": "O Adicional de Qualificação incide sobre a remuneração com percentuais definidos para graduação, pós-graduação, mestrado e doutorado."
            },
            {
              "id": "legint-5",
              "titulo": "5. Regimento Interno do TJSP",
              "detalhes": "Estrutura dos órgãos superiores do Tribunal, Presidência, Vice-Presidência, Corregedoria Geral, Órgão Especial (25 desembargadores), Turmas Julgadoras e Câmaras de Direito Público/Privado/Criminal.",
              "dicas": "O Órgão Especial exerce atribuições delegadas do Pleno do TJSP e é composto por 25 membros: 12 por antiguidade, 12 eleitos e o Presidente do Tribunal."
            }
          ]
        }
      ]
    },
    {
      "id": "bloco-3",
      "nome": "Bloco III: Conhecimentos Gerais",
      "questoes": 24,
      "badgeColor": "amber",
      "materias": [
        {
          "id": "atualidades",
          "nome": "Atualidades e PCD",
          "questoes": 4,
          "icone": "newspaper",
          "descricao": "Fatos nacionais e internacionais a partir do 1º sem/2026 e Estatuto da Pessoa com Deficiência (Lei 13.146/15).",
          "topicos": [
            {
              "id": "atu-1",
              "titulo": "1. Fatos Políticos, Econômicos, Sociais e Culturais (a partir de 2026)",
              "detalhes": "Noticiário nacional e mundial: geopolítica, economia brasileira, cúpulas internacionais, sustentabilidade, meio ambiente e avanços de ciência e tecnologia divulgados na grande imprensa.",
              "dicas": "A Vunesp formula perguntas objetivas baseadas em manchetes e fatos consolidados; evite focar em boatos de redes sociais."
            },
            {
              "id": "atu-2",
              "titulo": "2. Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015, arts. 1º a 13 e 34 a 38)",
              "detalhes": "Conceito de pessoa com deficiência (avaliação biopsicossocial), barreiras urbanísticas, arquitetônicas e nas comunicações, desenho universal, tecnologia assistiva, direito ao trabalho e reserva de cargos.",
              "dicas": "Deficiência não é mais conceituada apenas sob o ponto de vista médico, mas pela interação entre impedimentos corporais e as barreiras da sociedade."
            }
          ]
        },
        {
          "id": "matematica",
          "nome": "Matemática",
          "questoes": 4,
          "icone": "calculator",
          "descricao": "Operações com números reais, proporção, porcentagem, juros simples, equações, geometria plana e espacial básica.",
          "topicos": [
            {
              "id": "mat-1",
              "titulo": "1. Números Reais, MMC e MDC",
              "detalhes": "Operações fundamentais, frações, números decimais, potenciação e propriedades dos números inteiros. Problemas de encontros periódicos (MMC) e repartições em lotes máximos (MDC).",
              "dicas": "Problemas de escalas ou semáforos piscando juntos indicam MMC. Divisão de tábuas ou remédios no maior tamanho possível indica MDC."
            },
            {
              "id": "mat-2",
              "titulo": "2. Razão, Proporção, Porcentagem e Regra de Três",
              "detalhes": "Divisão em partes direta e inversamente proporcionais, cálculo de porcentagens, acréscimos e descontos sucessivos, regra de três simples e composta.",
              "dicas": "Regra de ouro nos descontos sucessivos: desconto de 10% e 20% resulta em 0,90 x 0,80 = 0,72 (desconto total real de 28%, e não 30%)."
            },
            {
              "id": "mat-3",
              "titulo": "3. Média Aritmética e Juros Simples",
              "detalhes": "Média simples e média ponderada (com pesos). Fórmulas financeiras elementares: Juros (J = C * i * t) e Montante (M = C + J).",
              "dicas": "Certifique-se sempre de converter a taxa de juros (i) e o tempo (t) para a mesma periodicidade (ex: ambos ao mês ou ambos ao ano)."
            },
            {
              "id": "mat-4",
              "titulo": "4. Equações do 1º e 2º Graus e Sistemas Lineares",
              "detalhes": "Resolução algébrica, interpretação de problemas com incógnitas, fórmula de Bháskara, soma e produto de raízes e sistemas de 2 equações pelo método da substituição ou adição.",
              "dicas": "Na Vunesp o mais importante é saber equacionar o problema: leia atribuindo variáveis organizadas (ex: x = canetas, y = cadernos)."
            },
            {
              "id": "mat-5",
              "titulo": "5. Medidas Usuais e Noções de Geometria",
              "detalhes": "Unidades de comprimento, superfície, capacidade (1L = 1dm³ = 1000cm³), massa e tempo. Geometria plana (perímetro e áreas de triângulo, retângulo, trapézio e círculo), Teorema de Pitágoras e volume de prismas/caixas d'água.",
              "dicas": "Pitágoras: hipotenusa² = cateto1² + cateto2². Triângulos notáveis: (3, 4, 5) e (5, 12, 13)."
            }
          ]
        },
        {
          "id": "informatica",
          "nome": "Informática",
          "questoes": 9,
          "icone": "monitor",
          "descricao": "Windows 10+, Microsoft 365 (Word, Excel, Teams, OneDrive), Correio Eletrônico e Navegação na Internet.",
          "topicos": [
            {
              "id": "inf-1",
              "titulo": "1. MS-Windows 10 ou Superior",
              "detalhes": "Conceito de diretórios e arquivos, atalhos, Área de Trabalho, Área de Transferência avançada (Win+V), Explorador de Arquivos, Painel de Controle e configurações do sistema.",
              "dicas": "Atalhos cruciais: Win+E (abrir Explorador), Win+D (exibir Desktop), Win+L (bloquear estação), Shift+Delete (exclusão permanente)."
            },
            {
              "id": "inf-2",
              "titulo": "2. MS-Word (Microsoft 365)",
              "detalhes": "Estrutura documental, quebras de página e quebras de seção, formatação de fontes e parágrafos, tabulações, colunas, marcadores, cabeçalho e rodapé, tabelas, localização e substituição.",
              "dicas": "Quebra de seção é o único comando que permite mudar a orientação (retrato para paisagem) ou desvincular cabeçalhos no mesmo arquivo."
            },
            {
              "id": "inf-3",
              "titulo": "3. MS-Excel (Microsoft 365)",
              "detalhes": "Células, intervalos, referências relativas (A1) e absolutas ($A$1), fórmulas básicas e funções essenciais: SOMA, MÉDIA, SE, PROCV, PROCX, CONT.SE, SOMASE, gráficos e filtros.",
              "dicas": "O símbolo de cifrão ($) fixa coluna ou linha. Ex: ao copiar $A1 para a direita, a coluna A permanece inalterada; ao copiar para baixo a linha varia normalmente."
            },
            {
              "id": "inf-4",
              "titulo": "4. Correio Eletrônico e Navegação Internet",
              "detalhes": "Campos de destinatários: Para, Cc (Com Cópia) e Cco (Cópia Oculta), regras de anexação de arquivos. Navegadores: links, histórico, favoritos, navegação anônima, cache, cookies e protocolos (HTTP, HTTPS).",
              "dicas": "Destinatário inserido em Cco não é visível pelos destinatários em Para e Cc, nem pelos demais destinatários em Cco."
            },
            {
              "id": "inf-5",
              "titulo": "5. MS Teams e OneDrive (Nuvem Microsoft 365)",
              "detalhes": "Teams: canais, bate-papos, agendamento de reuniões, chamadas com compartilhamento de tela, gravação. OneDrive: armazenamento em nuvem, controle de versões, links de compartilhamento (exibição x edição).",
              "dicas": "OneDrive permite colaboração simultânea no mesmo documento em tempo real através do Microsoft 365 na nuvem."
            }
          ]
        },
        {
          "id": "raciocinio-logico",
          "nome": "Raciocínio Lógico",
          "questoes": 7,
          "icone": "cpu",
          "descricao": "Estruturas lógicas, proposições, conectivos, tabela-verdade, equivalências, diagramas lógicos e sequências.",
          "topicos": [
            {
              "id": "rl-1",
              "titulo": "1. Estruturas Lógicas, Proposições e Tabela-Verdade",
              "detalhes": "Proposições simples e compostas. Conectivos lógicos: 'E' (conjunção: ^), 'OU' (disjunção: v), 'OU...OU' (disjunção exclusiva: v_), 'SE...ENTÃO' (condicional: ->) e 'SE E SOMENTE SE' (bicondicional: <->).",
              "dicas": "A condicional (p -> q) é FALSA em apenas um caso: primeira verdadeira e segunda falsa (Vera Fischer = Falsa). Nos demais casos é Verdadeira."
            },
            {
              "id": "rl-2",
              "titulo": "2. Negações e Equivalências Lógicas",
              "detalhes": "Leis de Morgan (~(p ^ q) = ~p v ~q; ~(p v q) = ~p ^ ~q). Negação da condicional (regra do MANÉ: Mantém a primeira E Nega a segunda: p ^ ~q). Equivalências da condicional: contrapositiva (~q -> ~p) e disjuntiva (~p v q).",
              "dicas": "Para negar 'Se chover, levo guarda-chuva': 'Chover E NÃO levo guarda-chuva'. Nunca use outro 'se...então' para negar uma condicional!"
            },
            {
              "id": "rl-3",
              "titulo": "3. Lógica de Argumentação e Diagramas Lógicos",
              "detalhes": "Validade de argumentos através de premissas e conclusão. Quantificadores lógicos: Todo (universal afirmativo), Nenhum (universal negativo) e Algum (particular afirmativo). Resolução com círculos de Euler/Venn.",
              "dicas": "A negação de 'Todo servidor é dedicado' é 'Pelo menos um servidor não é dedicado' (ou 'Algum servidor não é dedicado'). 'Nenhum servidor é dedicado' NÃO é negação de Todo."
            },
            {
              "id": "rl-4",
              "titulo": "4. Sequências Lógicas e Relações Arbitrárias",
              "detalhes": "Padrões em sequências numéricas, alfabéticas ou geométricas; determinação do enésimo termo. Problemas de correlação lógica entre indivíduos, profissões, idades e locais.",
              "dicas": "Em problemas de correlação de pessoas e profissões, monte uma tabela de dupla entrada e vá preenchendo com V ou X a partir das dicas exatas."
            }
          ]
        }
      ]
    }
  ]
};
