// tejotinha app logic
const STORAGE_KEY = 'tejotinha_progress_v1';
const NOTES_STORAGE_KEY = 'tejotinha_notes_v1';

// Estado global da aplicação
let state = {
  completedTopics: {},
  notes: {},
  activeTab: 'all', // 'all', 'bloco-1', 'bloco-2', 'bloco-3', or materiaId
  searchQuery: '',
  filterStatus: 'all', // 'all', 'pending', 'completed'
  currentNoteTopicId: null,
};

// Ícones SVG inline para performance e independência
const ICONS = {
  'book-open': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
  'shield-alert': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
  'scale': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>`,
  'file-text': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`,
  'landmark': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>`,
  'briefcase': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
  'building': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`,
  'newspaper': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>`,
  'calculator': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`,
  'monitor': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
  'cpu': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>`,
  'check': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>`,
  'lightbulb': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`,
  'edit': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  buildSidebarNav();
  setupEventListeners();
  renderApp();
  featherSetup();
});

function loadFromLocalStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) state.completedTopics = JSON.parse(saved);
    const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
    if (savedNotes) state.notes = JSON.parse(savedNotes);
  } catch (e) {
    console.error('Erro ao ler do LocalStorage:', e);
  }
}

function saveToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.completedTopics));
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(state.notes));
    showToast('Progresso salvo no dispositivo!');
  } catch (e) {
    console.error('Erro ao salvar no LocalStorage:', e);
  }
}

function featherSetup() {
  // Atualiza contadores
  updateHeaderStats();
}

// Navegação lateral
function buildSidebarNav() {
  const container = document.getElementById('sidebar-nav');
  if (!container) return;

  let html = `
    <button onclick="setActiveTab('all')" 
      class="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${state.activeTab === 'all' ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'}">
      <span class="flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
        Visão Geral Completa
      </span>
      <span class="text-xs bg-slate-200/70 text-slate-700 font-semibold px-2 py-0.5 rounded-full" id="badge-total-all">0%</span>
    </button>
  `;

  EDITAL_TJSP_DATA.blocos.forEach(bloco => {
    html += `
      <div class="pt-4 pb-1">
        <button onclick="setActiveTab('${bloco.id}')" class="w-full text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-700 px-3 py-1">
          <span>${bloco.nome.split(':')[0]}</span>
          <span class="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">${bloco.questoes} quest.</span>
        </button>
      </div>
    `;

    bloco.materias.forEach(mat => {
      const isSelected = state.activeTab === mat.id;
      html += `
        <button onclick="setActiveTab('${mat.id}')"
          class="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all ${isSelected ? 'bg-primary-50 text-primary-700 font-semibold shadow-xs' : 'text-slate-600 hover:bg-slate-100/70'}">
          <div class="flex items-center gap-2.5 truncate">
            <span class="text-slate-500 shrink-0">${ICONS[mat.icone] || ICONS['book-open']}</span>
            <span class="truncate">${mat.nome}</span>
          </div>
          <span class="text-xs font-semibold px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-primary-100 text-primary-800' : 'bg-slate-100 text-slate-600'}" id="badge-mat-${mat.id}">
            0/${mat.topicos.length}
          </span>
        </button>
      `;
    });
  });

  container.innerHTML = html;
}

function setActiveTab(tabId) {
  state.activeTab = tabId;
  buildSidebarNav();
  renderApp();
  // Scroll para o topo suavemente
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateHeaderStats() {
  let totalTopics = 0;
  let totalCompleted = 0;

  EDITAL_TJSP_DATA.blocos.forEach(bloco => {
    bloco.materias.forEach(mat => {
      let matCompleted = 0;
      mat.topicos.forEach(top => {
        totalTopics++;
        if (state.completedTopics[top.id]) {
          totalCompleted++;
          matCompleted++;
        }
      });
      const badge = document.getElementById(`badge-mat-${mat.id}`);
      if (badge) {
        badge.textContent = `${matCompleted}/${mat.topicos.length}`;
        if (matCompleted === mat.topicos.length && mat.topicos.length > 0) {
          badge.className = 'text-xs font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700';
        }
      }
    });
  });

  const percent = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;

  const totalEl = document.getElementById('stat-total-topics');
  const completedEl = document.getElementById('stat-completed-topics');
  const percentEl = document.getElementById('stat-percent');
  const progressBar = document.getElementById('main-progress-bar');
  const badgeAll = document.getElementById('badge-total-all');

  if (totalEl) totalEl.textContent = totalTopics;
  if (completedEl) completedEl.textContent = totalCompleted;
  if (percentEl) percentEl.textContent = `${percent}%`;
  if (progressBar) progressBar.style.width = `${percent}%`;
  if (badgeAll) badgeAll.textContent = `${percent}%`;
}

function renderApp() {
  const container = document.getElementById('content-area');
  if (!container) return;

  const query = state.searchQuery.toLowerCase().trim();
  const filter = state.filterStatus;

  let renderedBlocos = 0;
  let html = '';

  EDITAL_TJSP_DATA.blocos.forEach(bloco => {
    // Verifica se bloco bate com a aba selecionada
    const matchBlocoTab = state.activeTab === 'all' || state.activeTab === bloco.id || bloco.materias.some(m => m.id === state.activeTab);
    if (!matchBlocoTab) return;

    let blocoMateriasHtml = '';

    bloco.materias.forEach(mat => {
      if (state.activeTab !== 'all' && state.activeTab !== bloco.id && state.activeTab !== mat.id) return;

      // Filtra tópicos
      const filteredTopicos = mat.topicos.filter(top => {
        const isDone = !!state.completedTopics[top.id];
        if (filter === 'completed' && !isDone) return false;
        if (filter === 'pending' && isDone) return false;

        if (query) {
          const matchTitle = top.titulo.toLowerCase().includes(query);
          const matchDet = top.detalhes.toLowerCase().includes(query);
          const matchDica = (top.dicas || '').toLowerCase().includes(query);
          return matchTitle || matchDet || matchDica;
        }
        return true;
      });

      if (filteredTopicos.length === 0 && (query || filter !== 'all')) return;

      // Progresso da matéria
      const completedCount = mat.topicos.filter(t => state.completedTopics[t.id]).length;
      const matPercent = mat.topicos.length > 0 ? Math.round((completedCount / mat.topicos.length) * 100) : 0;

      blocoMateriasHtml += `
        <div class="mb-10 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
          <!-- Cabeçalho da Matéria -->
          <div class="px-6 py-5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-slate-900 text-white shadow-sm">
                ${ICONS[mat.icone] || ICONS['book-open']}
              </div>
              <div>
                <div class="flex items-center gap-2.5">
                  <h3 class="text-lg font-bold text-slate-800 tracking-tight">${mat.nome}</h3>
                  <span class="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    ${mat.questoes} questões
                  </span>
                </div>
                <p class="text-xs text-slate-500 mt-0.5 max-w-xl">${mat.descricao}</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="text-right">
                <span class="text-xs font-semibold text-slate-700">${completedCount} de ${mat.topicos.length} estudados</span>
                <div class="w-32 h-2 bg-slate-200 rounded-full mt-1 overflow-hidden">
                  <div class="h-full bg-emerald-500 transition-all duration-300 rounded-full" style="width: ${matPercent}%"></div>
                </div>
              </div>
              <button onclick="markAllInMateria('${mat.id}', true)" title="Marcar todos como concluídos" 
                class="text-xs font-medium px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 transition">
                Concluir todos
              </button>
            </div>
          </div>

          <!-- Grade de Tópicos (Cards) -->
          <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            ${filteredTopicos.map(topic => renderTopicCard(topic, mat.id)).join('')}
          </div>
        </div>
      `;
    });

    if (blocoMateriasHtml) {
      renderedBlocos++;
      html += `
        <div class="mb-8">
          <div class="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${bloco.nome}</h2>
            <span class="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
              ${bloco.questoes} questões no concurso
            </span>
          </div>
          ${blocoMateriasHtml}
        </div>
      `;
    }
  });

  if (renderedBlocos === 0) {
    html = `
      <div class="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12 shadow-sm">
        <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h4 class="text-base font-bold text-slate-800">Nenhum conteúdo encontrado</h4>
        <p class="text-sm text-slate-500 mt-1">Ajuste os filtros de busca ou altere o status de conclusão para visualizar os cards.</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 text-sm font-semibold text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition">
          Limpar filtros de busca
        </button>
      </div>
    `;
  }

  container.innerHTML = html;
  updateHeaderStats();
}

function renderTopicCard(topic, materiaId) {
  const isDone = !!state.completedTopics[topic.id];
  const hasNote = !!state.notes[topic.id];

  return `
    <div id="card-${topic.id}" 
      class="group relative flex flex-col justify-between rounded-xl border transition-all duration-200 p-4 ${
        isDone 
          ? 'bg-slate-50/80 border-slate-200 text-slate-500 shadow-none' 
          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md text-slate-800'
      }">
      
      <div>
        <div class="flex items-start justify-between gap-3">
          <label class="flex items-start gap-3 cursor-pointer select-none">
            <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleTopic('${topic.id}')"
              class="mt-1 w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500 focus:ring-offset-0 transition cursor-pointer">
            <div>
              <span class="text-sm font-bold leading-tight ${isDone ? 'line-through text-slate-400' : 'text-slate-900 group-hover:text-primary-600 transition'}">
                ${topic.titulo}
              </span>
            </div>
          </label>

          <button onclick="openNoteModal('${topic.id}', '${escapeHtml(topic.titulo)}')" 
            title="Anotações pessoais deste tópico"
            class="p-1.5 rounded-lg border text-xs transition ${
              hasNote 
                ? 'bg-amber-50 text-amber-600 border-amber-200' 
                : 'text-slate-400 border-transparent hover:text-slate-700 hover:bg-slate-100'
            }">
            ${ICONS['edit']}
          </button>
        </div>

        <p class="text-xs text-slate-600 mt-2.5 leading-relaxed pl-8">
          ${topic.detalhes}
        </p>
      </div>

      ${topic.dicas ? `
        <div class="mt-3.5 pt-3 border-t border-slate-100 pl-8">
          <div class="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50/70 text-amber-900 border border-amber-200/50 text-xs">
            <span class="text-amber-600 mt-0.5 shrink-0">${ICONS['lightbulb']}</span>
            <span class="leading-relaxed"><strong class="font-semibold text-amber-950">Dica Vunesp:</strong> ${topic.dicas}</span>
          </div>
        </div>
      ` : ''}

      ${hasNote ? `
        <div class="mt-2 pl-8">
          <div class="text-[11px] p-2 rounded bg-slate-100 text-slate-700 italic border border-slate-200 line-clamp-2">
            <strong>Minha nota:</strong> ${escapeHtml(state.notes[topic.id])}
          </div>
        </div>
      ` : ''}

      <div class="mt-3 pl-8 flex items-center justify-between text-[11px] text-slate-400 pt-1">
        <span class="${isDone ? 'text-emerald-600 font-semibold flex items-center gap-1' : 'text-slate-400'}">
          ${isDone ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Concluído' : 'Pendente'}
        </span>
        <button onclick="toggleTopic('${topic.id}')" class="text-xs font-semibold ${isDone ? 'text-slate-400 hover:text-slate-600' : 'text-primary-600 hover:text-primary-700'} underline decoration-dotted">
          ${isDone ? 'Desmarcar' : 'Concluir agora'}
        </button>
      </div>
    </div>
  `;
}

function toggleTopic(topicId) {
  state.completedTopics[topicId] = !state.completedTopics[topicId];
  saveToLocalStorage();
  renderApp();
}

function markAllInMateria(materiaId, status) {
  EDITAL_TJSP_DATA.blocos.forEach(bloco => {
    bloco.materias.forEach(mat => {
      if (mat.id === materiaId) {
        mat.topicos.forEach(t => {
          state.completedTopics[t.id] = status;
        });
      }
    });
  });
  saveToLocalStorage();
  renderApp();
}

function resetAllProgress() {
  if (confirm('Tem certeza que deseja zerar todos os tópicos marcados como concluídos?')) {
    state.completedTopics = {};
    saveToLocalStorage();
    renderApp();
    showToast('Todo o progresso foi zerado!');
  }
}

function resetFilters() {
  state.searchQuery = '';
  state.filterStatus = 'all';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const filterSelect = document.getElementById('filter-select');
  if (filterSelect) filterSelect.value = 'all';
  renderApp();
}

// Modal de Anotações
function openNoteModal(topicId, title) {
  state.currentNoteTopicId = topicId;
  const modal = document.getElementById('note-modal');
  const titleEl = document.getElementById('modal-topic-title');
  const textarea = document.getElementById('modal-note-text');

  if (titleEl) titleEl.textContent = title;
  if (textarea) textarea.value = state.notes[topicId] || '';

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => textarea && textarea.focus(), 50);
  }
}

function closeNoteModal() {
  const modal = document.getElementById('note-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  state.currentNoteTopicId = null;
}

function saveModalNote() {
  const topicId = state.currentNoteTopicId;
  if (!topicId) return;
  const textarea = document.getElementById('modal-note-text');
  const val = (textarea ? textarea.value : '').trim();

  if (val) {
    state.notes[topicId] = val;
  } else {
    delete state.notes[topicId];
  }

  saveToLocalStorage();
  closeNoteModal();
  renderApp();
}

function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderApp();
    });
  }

  const filterSelect = document.getElementById('filter-select');
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      state.filterStatus = e.target.value;
      renderApp();
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('#toast-msg').textContent = msg;
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 2500);
}

function exportProgressJson() {
  const backup = {
    exportDate: new Date().toISOString(),
    completedTopics: state.completedTopics,
    notes: state.notes
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `tejotinha-progresso-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProgressJson(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.completedTopics) state.completedTopics = data.completedTopics;
      if (data.notes) state.notes = data.notes;
      saveToLocalStorage();
      renderApp();
      showToast('Progresso importado com sucesso!');
    } catch (err) {
      alert('Arquivo JSON inválido.');
    }
  };
  reader.readAsText(file);
}

function escapeHtml(string) {
  if (!string) return '';
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

