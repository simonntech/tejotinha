/* Tejotinha — interface da aba Incidência nas Provas.
 * Carregar depois de data.js e app.js. Não substitui nem altera o progresso salvo.
 */
(function () {
  "use strict";

  const numberFormat = new Intl.NumberFormat("pt-BR");

  function getProvaAtual() {
    return INCIDENCIA_TJSP_DATA.provas[0];
  }

  function getPercentual(qtd, total) {
    return total ? (qtd / total) * 100 : 0;
  }

  function getArtigosValidados() {
    return INCIDENCIA_TJSP_DATA.ocorrenciasArtigos.filter(item => item.validado === true);
  }

  function agruparArtigos(ocorrencias) {
    const agrupado = new Map();
    ocorrencias.forEach(item => {
      const chave = [item.disciplina, item.lei, item.artigo].join("|");
      if (!agrupado.has(chave)) {
        agrupado.set(chave, { ...item, questoes: new Set(), provas: new Set() });
      }
      const registro = agrupado.get(chave);
      registro.questoes.add(`${item.provaId}-q${item.questao}`);
      registro.provas.add(item.provaId);
    });
    return [...agrupado.values()]
      .map(item => ({
        ...item,
        ocorrencias: item.questoes.size,
        quantidadeProvas: item.provas.size
      }))
      .sort((a, b) => b.ocorrencias - a.ocorrencias || a.artigo.localeCompare(b.artigo, "pt-BR"));
  }

  function renderIncidencia() {
    const container = document.getElementById("content-area");
    if (!container) return;

    const prova = getProvaAtual();
    const total = prova.totalQuestoesDireito;
    const artigos = agruparArtigos(getArtigosValidados());

    const barras = INCIDENCIA_TJSP_DATA.disciplinas
      .slice()
      .sort((a, b) => b.questoes - a.questoes || a.nome.localeCompare(b.nome, "pt-BR"))
      .map((item, index) => {
        const pct = getPercentual(item.questoes, total);
        return `
          <div class="py-3 ${index ? "border-t border-slate-100" : ""}">
            <div class="flex items-center justify-between gap-3 mb-2">
              <span class="text-sm font-semibold text-slate-700">${escapeHtml(item.nome)}</span>
              <span class="text-sm font-bold text-slate-900 tabular-nums">${item.questoes} <span class="font-medium text-slate-500">(${pct.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%)</span></span>
            </div>
            <div class="h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div class="h-full rounded-full bg-primary-600" style="width:${pct}%"></div>
            </div>
          </div>`;
      }).join("");

    const rankingArtigos = artigos.length
      ? `
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead class="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th class="px-4 py-3">#</th><th class="px-4 py-3">Dispositivo</th>
                <th class="px-4 py-3">Assunto</th><th class="px-4 py-3">Ocorrências</th>
                <th class="px-4 py-3">Provas</th><th class="px-4 py-3">Fonte</th>
              </tr>
            </thead>
            <tbody>
              ${artigos.map((item, index) => `
                <tr class="border-t border-slate-100">
                  <td class="px-4 py-3 font-bold text-slate-500">${index + 1}</td>
                  <td class="px-4 py-3 font-semibold text-slate-800">${escapeHtml(item.lei)} — art. ${escapeHtml(item.artigo)}</td>
                  <td class="px-4 py-3 text-slate-600">${escapeHtml(item.assunto || "—")}</td>
                  <td class="px-4 py-3 font-bold tabular-nums">${numberFormat.format(item.ocorrencias)}</td>
                  <td class="px-4 py-3">${numberFormat.format(item.quantidadeProvas)}</td>
                  <td class="px-4 py-3"><a class="text-primary-700 underline" href="${escapeAttribute(item.fonteCaderno)}" target="_blank" rel="noopener noreferrer">Caderno</a></td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`
      : `
        <div class="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <div class="flex items-start gap-3">
            <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-800 font-bold">!</span>
            <div>
              <h4 class="font-bold text-amber-950">Ranking por artigo em fase de auditoria</h4>
              <p class="mt-1 text-sm leading-relaxed text-amber-900">
                Ainda não há ocorrências artigo × questão validadas no conjunto de dados. Para não publicar uma classificação inventada,
                o ranking será preenchido somente depois da conferência do caderno oficial e do gabarito definitivo de cada prova.
              </p>
            </div>
          </div>
        </div>`;

    container.innerHTML = `
      <div class="space-y-6">
        <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div class="bg-gradient-to-r from-slate-950 via-primary-950 to-primary-800 px-6 py-6 text-white">
            <div class="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-primary-200">Análise histórica</p>
                <h2 class="mt-2 text-2xl font-extrabold tracking-tight">Incidência nas Provas</h2>
                <p class="mt-2 max-w-2xl text-sm text-slate-200">Direito e legislação • distribuição por disciplina e ranking auditável de artigos.</p>
              </div>
              <span class="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">${escapeHtml(prova.ano)} · ${escapeHtml(prova.banca)}</span>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 p-5 sm:grid-cols-3">
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Questões de Direito</p>
              <p class="mt-1 text-3xl font-black text-slate-900">${total}</p>
              <p class="mt-1 text-xs text-slate-500">na prova de ${prova.ano}</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Disciplinas</p>
              <p class="mt-1 text-3xl font-black text-slate-900">${INCIDENCIA_TJSP_DATA.disciplinas.length}</p>
              <p class="mt-1 text-xs text-slate-500">no bloco de Direito</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Artigos auditados</p>
              <p class="mt-1 text-3xl font-black text-slate-900">${artigos.length}</p>
              <p class="mt-1 text-xs text-slate-500">contagem por questão validada</p>
            </div>
          </div>
        </div>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div class="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h3 class="text-lg font-extrabold text-slate-900">Distribuição por disciplina</h3>
              <p class="mt-1 text-sm text-slate-500">Prova de Escrevente TJSP ${prova.ano} · ${total} questões de Direito</p>
            </div>
            <a class="text-sm font-semibold text-primary-700 underline" href="${escapeAttribute(prova.fonte)}" target="_blank" rel="noopener noreferrer">Consultar fonte</a>
          </div>
          ${barras}
          <p class="mt-4 text-xs leading-relaxed text-slate-500">Esta distribuição descreve uma prova anterior e não garante a mesma quantidade por matéria na próxima edição.</p>
        </section>

        <section class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div class="border-b border-slate-100 px-5 py-5 sm:px-6">
            <h3 class="text-lg font-extrabold text-slate-900">Ranking de artigos mais cobrados</h3>
            <p class="mt-1 text-sm text-slate-500">Cada ocorrência deve apontar para uma questão identificada no caderno e para o gabarito correspondente.</p>
          </div>
          ${rankingArtigos}
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 class="text-base font-extrabold text-slate-900">Fontes e metodologia</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">As contagens por disciplina usam a análise pública da prova de 2025. O ranking de artigos será baseado em conferência questão a questão, usando caderno e gabarito definitivo. Se uma questão cobrar mais de um dispositivo, a metodologia deverá registrar a regra de contagem para evitar duplicidade.</p>
          <ul class="mt-4 space-y-2">
            ${INCIDENCIA_TJSP_DATA.fontes.map(fonte => `
              <li class="text-sm">
                <a class="font-semibold text-primary-700 underline" href="${escapeAttribute(fonte.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(fonte.titulo)}</a>
                <span class="block text-xs text-slate-500">${escapeHtml(fonte.escopo)}</span>
              </li>`).join("")}
          </ul>
        </section>
      </div>`;
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function escapeAttribute(value) {
    // URLs vêm do dataset mantido no código, mas escapamos aspas por segurança.
    return escapeHtml(value);
  }

  function installTab() {
    const nav = document.getElementById("sidebar-nav");
    if (!nav || nav.querySelector('[data-tab-id="incidencia"]')) return;

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.tabId = "incidencia";
    button.className = "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all text-slate-600 hover:bg-slate-100/70";
    button.innerHTML = `
      <span class="flex items-center gap-2.5">
        <span class="text-slate-500" aria-hidden="true">▤</span>
        <span>Incidência nas Provas</span>
      </span>
      <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">Histórico</span>`;
    button.addEventListener("click", () => window.setActiveTab("incidencia"));
    nav.appendChild(button);
  }

  function markTabSelected() {
    const nav = document.getElementById("sidebar-nav");
    if (!nav) return;
    const button = nav.querySelector('[data-tab-id="incidencia"]');
    if (!button) return;
    const selected = typeof state !== "undefined" && state.activeTab === "incidencia";
    button.className = `w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all ${
      selected ? "bg-primary-50 text-primary-700 font-semibold shadow-xs" : "text-slate-600 hover:bg-slate-100/70"
    }`;
  }

  function installIntegration() {
    if (typeof window.renderApp !== "function" || typeof window.setActiveTab !== "function") return;

    const originalRenderApp = window.renderApp;
    window.renderApp = function () {
      if (window.state && window.state.activeTab === "incidencia") {
        renderIncidencia();
        installTab();
        markTabSelected();
        return;
      }
      originalRenderApp();
      installTab();
      markTabSelected();
    };

    const originalSetActiveTab = window.setActiveTab;
    window.setActiveTab = function (tabId) {
      if (tabId === "incidencia") {
        state.activeTab = "incidencia";
        renderIncidencia();
        installTab();
        markTabSelected();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      originalSetActiveTab(tabId);
      installTab();
      markTabSelected();
    };

    installTab();
    markTabSelected();
  }

  document.addEventListener("DOMContentLoaded", installIntegration);
})();
