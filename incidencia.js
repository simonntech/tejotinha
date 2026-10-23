/**
 * Tejotinha — dados de incidência histórica.
 *
 * Política de qualidade:
 * - As contagens por disciplina abaixo vêm de análise publicada da prova de 2025.
 * - A lista de artigos permanece vazia até que cada questão seja conferida no caderno
 *   oficial e vinculada a um dispositivo legal. Não exibir rankings estimados como fatos.
 * - Para adicionar artigo, registrar uma ocorrência por questão e informar a fonte.
 */
const INCIDENCIA_TJSP_DATA = {
  provas: [
    {
      id: "tjsp-escrevente-2025",
      ano: 2025,
      titulo: "TJSP — Escrevente Técnico Judiciário",
      banca: "VUNESP",
      totalQuestoesDireito: 30,
      fonte: "https://folha.qconcursos.com/n/concurso-tj-sp-direito-prova-escrevente",
      fonteRotulo: "Qconcursos / Folha Dirigida — análise da prova de 2025",
      tipo: "distribuicao-por-disciplina",
      observacao: "Distribuição histórica da prova de 2025. Não é previsão garantida para 2027."
    }
  ],
  disciplinas: [
    { id: "administrativo", nome: "Direito Administrativo", questoes: 6, provaId: "tjsp-escrevente-2025" },
    { id: "processual-penal", nome: "Direito Processual Penal", questoes: 5, provaId: "tjsp-escrevente-2025" },
    { id: "processual-civil", nome: "Direito Processual Civil", questoes: 5, provaId: "tjsp-escrevente-2025" },
    { id: "constitucional", nome: "Direito Constitucional", questoes: 5, provaId: "tjsp-escrevente-2025" },
    { id: "legislacao-interna", nome: "Legislação Interna do TJSP", questoes: 5, provaId: "tjsp-escrevente-2025" },
    { id: "penal", nome: "Direito Penal", questoes: 4, provaId: "tjsp-escrevente-2025" }
  ],

  /*
   * Uma linha por ocorrência verificada (questão × dispositivo).
   * Exemplo de formato — NÃO é dado real e não deve ser ativado sem auditoria:
   * {
   *   id: "2025-q42",
   *   provaId: "tjsp-escrevente-2025",
   *   questao: 42,
   *   disciplina: "penal",
   *   lei: "Código Penal",
   *   artigo: "312",
   *   assunto: "Peculato",
   *   fonteCaderno: "URL pública do caderno oficial",
   *   fonteGabarito: "URL pública do gabarito definitivo",
   *   validado: true
   * }
   */
  ocorrenciasArtigos: [],

  fontes: [
    {
      id: "distribuicao-2025",
      titulo: "Concurso TJ SP: Direito representa 43% da prova de escrevente",
      url: "https://folha.qconcursos.com/n/concurso-tj-sp-direito-prova-escrevente",
      dataPublicacao: "2026-10-21",
      escopo: "Distribuição das 30 questões de Direito da prova de 2025 por disciplina."
    },
    {
      id: "prova-oficial-vunesp",
      titulo: "Caderno oficial de prova TJSP — Escrevente Técnico Judiciário",
      url: "https://documento.vunesp.com.br/documento/stream/NjU5NjQ4Ng%3D%3D",
      escopo: "Fonte primária a consultar para conferência questão a questão. Confirmar que o caderno corresponde ao ano/versão analisado antes de importar registros."
    },
    {
      id: "gabarito-2025",
      titulo: "TJSP tem gabaritos divulgados",
      url: "https://folha.qconcursos.com/n/concurso-tj-sp-2025-gabaritos",
      escopo: "Referência para localizar a publicação do gabarito; usar o gabarito definitivo oficial na auditoria."
    }
  ]
};
