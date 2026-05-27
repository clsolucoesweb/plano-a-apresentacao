const assets = {
  logoWhite: "Marca Plano A/Marca Plano A_Versão Branca_Horizontal.png",
  logoBlue: "Marca Plano A/Marca Plano A_Versão Azul_Horizontal.png",
  ans: "Marca Plano A/ANS nº 424200.png",
  odonto: "Marca Plano A/logoodonto.png",
  select: "Marca Plano A/SELECT.png",
  rede: "Marca Plano A/LOGO REDECORR-8.png",
  gocare: "Marca Plano A/GoCare_horizontal.png",
};

const icons = {
  copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-5"></path></svg>',
  chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>',
  file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>',
};

const slides = [
  {
    title: "Plano A",
    body: "Administração de planos de saúde com clareza, proximidade e controle.",
    visual: "hero",
    metrics: [
      ["Cuidado", "Relacionamento humano em cada ponto de contato."],
      ["Controle", "Dados, prazos, documentos e governança."],
      ["Confiança", "Comunicação simples para decisões melhores."],
    ],
  },
  {
    title: "A camada operacional entre contrato, cuidado e decisão.",
    body: "Uma administradora organiza a rotina invisível do plano: contratos, vidas, rede, cobranças, autorizações, atendimento e informação executiva.",
    visual: "pillars",
    pillars: [
      ["01", "Vidas", "Inclusões, exclusões, alterações cadastrais, elegibilidade e movimentações."],
      ["02", "Rede", "Apoio para encontrar caminhos de atendimento e reduzir ruído operacional."],
      ["03", "Custos", "Leitura de uso, cobranças, renovações e sinais de atenção."],
      ["04", "Evidências", "Documentos, histórico e rastreabilidade para governança."],
    ],
  },
  {
    title: "Um fluxo simples para uma operação complexa.",
    body: "A operação deixa de depender de memória individual e passa a seguir status, responsáveis, evidências e prazos.",
    visual: "timeline",
  },
  {
    title: "Uma experiência melhor para o beneficiário.",
    body: "A melhor administração é percebida quando a pessoa encontra orientação rápida, entende seus caminhos e se sente acompanhada antes do problema crescer.",
    visual: "care",
    cards: [
      ["Atendimento", "Escuta ativa, triagem e direcionamento com linguagem simples."],
      ["Rede", "Apoio para encontrar prestadores, especialidades e canais corretos."],
      ["Autorizações", "Acompanhamento de solicitações e pendências com transparência."],
      ["Comunicação", "Mensagens objetivas para reduzir dúvidas repetidas e desalinhamento."],
    ],
  },
  {
    title: "Rede, parceiros e operação conectados em uma leitura única.",
    body: "O ecossistema de saúde funciona melhor quando cada participante sabe seu papel: administradora, empresa, operadoras, prestadores, odonto e redes parceiras.",
    visual: "network",
  },
  {
    title: "Indicadores para agir antes do custo virar surpresa.",
    body: "A administração moderna traduz movimentação, uso e pendências em leitura executiva: o que aconteceu, o que está em aberto e onde agir primeiro.",
    visual: "data",
  },
  {
    title: "Publicação simples, apresentação com cara de produto.",
    body: "O deck é um site estático: abre no navegador, funciona no GitHub Pages e mantém navegação, cópia de comandos e URL por slide.",
    visual: "code",
  },
  {
    title: "O Plano A é administrar saúde com método e proximidade.",
    body: "Mais clareza para a empresa. Mais orientação para o beneficiário. Mais confiança para todo o ecossistema.",
    visual: "closing",
  },
];

let currentIndex = getIndexFromHash();

const deck = document.querySelector("#deck");
const currentLabel = document.querySelector("[data-current]");
const totalLabel = document.querySelector("[data-total]");
const progress = document.querySelector("[data-progress]");
const thumbs = document.querySelector("[data-thumbs]");

function baseChrome() {
  return `
    <header class="brand-row">
      <img class="logo" src="${assets.logoWhite}" alt="Plano A - Administradora de Planos de Saúde">
      <div class="seal-row">
        <span>Plano A / administradora</span>
        <img src="${assets.ans}" alt="ANS número 424200">
      </div>
    </header>
  `;
}

function renderHero(slide) {
  return `
    <section class="slide-grid">
      <div class="slide-copy">
        <h1>${slide.title}</h1>
        <p>${slide.body}</p>
        <div class="metric-strip">
          ${slide.metrics.map(([value, label]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`).join("")}
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-head">
          <div class="dashboard-title">Painel de Administração</div>
          <div class="status-chip">Operação ativa</div>
        </div>
        <div class="flow-board">
          ${[
            [icons.users, "Beneficiários", "Movimentações, elegibilidade e atendimento.", "360"],
            [icons.file, "Contratos", "Regras, vigências, documentos e renovações.", "OK"],
            [icons.shield, "Conformidade", "Histórico organizado para auditoria e controle.", "ANS"],
            [icons.chart, "Indicadores", "Leitura executiva para RH e diretoria.", "Live"],
          ].map(([icon, title, text, value]) => `
            <div class="flow-item">
              <span class="flow-icon">${icon}</span>
              <div><h3>${title}</h3><p>${text}</p></div>
              <span class="flow-value">${value}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderPillars(slide) {
  return `
    <section class="slide-grid slide-grid--wide">
      <div class="slide-copy">
        <h2>${slide.title}</h2>
        <p>${slide.body}</p>
      </div>
      <div class="pillars">
        ${slide.pillars.map(([number, title, text]) => `
          <article class="pillar">
            <div class="pillar-number">${number}</div>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTimeline(slide) {
  return `
    <section class="slide-grid">
      <div class="slide-copy">
        <h2>${slide.title}</h2>
        <p>${slide.body}</p>
      </div>
      <div class="panel panel--light timeline">
        ${[
          ["Entrada", "Solicitação registrada", "A demanda nasce com dados mínimos, responsável, prazo esperado e documentação vinculada."],
          ["Análise", "Critérios e pendências", "A equipe valida regras do contrato, elegibilidade, carências, plano e impacto financeiro."],
          ["Execução", "Movimentação acompanhada", "Cada etapa tem status claro para reduzir retrabalho e evitar perda de prazo."],
          ["Evidência", "Histórico consultável", "A operação deixa rastro: o que foi pedido, quem aprovou e quando foi concluído."],
        ].map(([stage, title, text]) => `
          <div class="timeline-row">
            <strong>${stage}</strong>
            <div><h3>${title}</h3><p>${text}</p></div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCare(slide) {
  return `
    <section class="slide-grid">
      <div class="slide-copy">
        <h2>${slide.title}</h2>
        <p>${slide.body}</p>
      </div>
      <div class="split-panel">
        ${slide.cards.map(([title, text], index) => `
          <article class="care-card">
            ${[icons.users, icons.shield, icons.file, icons.chart][index]}
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderNetwork(slide) {
  return `
    <section class="slide-grid slide-grid--wide">
      <div class="slide-copy">
        <h2>${slide.title}</h2>
        <p>${slide.body}</p>
      </div>
      <div class="panel panel--light network">
        <div class="network-map">
          <span class="node"></span><span class="node"></span><span class="node"></span><span class="node"></span><span class="node"></span>
        </div>
        <div class="network-content">
          <h3>Ecossistema integrado</h3>
          <p>Operadoras, rede credenciada, odonto, parceiros e empresa cliente precisam de informação consistente para que o cuidado aconteça no tempo certo.</p>
        </div>
      </div>
    </section>
  `;
}

function renderData(slide) {
  return `
    <section class="slide-grid">
      <div class="slide-copy">
        <h2>${slide.title}</h2>
        <p>${slide.body}</p>
      </div>
      <div class="panel panel--light table-card">
        <h3>Leitura executiva mensal</h3>
        ${[
          ["Movimentação cadastral", "Entrada / saída", "Controlar"],
          ["Sinistralidade percebida", "Tendência", "Acompanhar"],
          ["Solicitações em aberto", "SLA", "Priorizar"],
          ["Dúvidas recorrentes", "Tema", "Educar"],
          ["Próximas renovações", "Prazo", "Antecipar"],
        ].map(([name, type, status]) => `
          <div class="data-row">
            <strong>${name}</strong>
            <span>${type}</span>
            <span class="tag">${status}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCode(slide) {
  const command = `git add .\ngit commit -m "Add Plano A institutional presentation"\ngit push origin main\n\n# No GitHub Pages:\n# Settings > Pages > Deploy from a branch > main / root`;
  return `
    <section class="slide-grid">
      <div class="slide-copy">
        <h2>${slide.title}</h2>
        <p>${slide.body}</p>
      </div>
      <div class="panel code-card">
        <div class="code-head">
          <span>publicação no GitHub Pages</span>
          <button class="copy-btn" type="button" aria-label="Copiar comandos" data-copy="${encodeURIComponent(command)}">${icons.copy}</button>
        </div>
        <pre><code>${command}</code></pre>
      </div>
    </section>
  `;
}

function renderClosing(slide) {
  return `
    <section class="closing slide-copy">
      <div>
        <img class="logo" src="${assets.logoWhite}" alt="Plano A">
        <h2>${slide.title}</h2>
        <p>${slide.body}</p>
        <div class="brand-stack">
          <div class="partner-grid">
            <div class="partner-logo"><img src="${assets.odonto}" alt="Plano A Odonto"></div>
            <div class="partner-logo"><img src="${assets.rede}" alt="Redecorr"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderVisual(slide) {
  const renderers = {
    hero: renderHero,
    pillars: renderPillars,
    timeline: renderTimeline,
    care: renderCare,
    network: renderNetwork,
    data: renderData,
    code: renderCode,
    closing: renderClosing,
  };

  return renderers[slide.visual](slide);
}

function renderDeck() {
  deck.innerHTML = slides.map((slide, index) => `
    <article class="slide ${index === currentIndex ? "is-active" : ""}" data-slide="${index}">
      ${slide.visual === "closing" ? "" : baseChrome()}
      ${renderVisual(slide)}
    </article>
  `).join("");

  totalLabel.textContent = String(slides.length).padStart(2, "0");
  thumbs.innerHTML = slides.map((slide, index) => `
    <button class="thumb ${index === currentIndex ? "is-active" : ""}" type="button" aria-label="Ir para slide ${index + 1}: ${slide.title}" data-thumb="${index}"></button>
  `).join("");

  updateState();
}

function getIndexFromHash() {
  const value = Number.parseInt(window.location.hash.replace("#", ""), 10);
  if (Number.isFinite(value) && value >= 1 && value <= slides.length) {
    return value - 1;
  }
  return 0;
}

function updateState() {
  document.querySelectorAll("[data-slide]").forEach((slide) => {
    slide.classList.toggle("is-active", Number(slide.dataset.slide) === currentIndex);
  });
  document.querySelectorAll("[data-thumb]").forEach((thumb) => {
    thumb.classList.toggle("is-active", Number(thumb.dataset.thumb) === currentIndex);
  });
  currentLabel.textContent = String(currentIndex + 1).padStart(2, "0");
  progress.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  document.querySelector("[data-prev]").disabled = currentIndex === 0;
  document.querySelector("[data-next]").disabled = currentIndex === slides.length - 1;
  if (window.location.hash !== `#${currentIndex + 1}`) {
    history.replaceState(null, "", `#${currentIndex + 1}`);
  }
}

function goTo(index) {
  currentIndex = Math.max(0, Math.min(slides.length - 1, index));
  updateState();
}

document.addEventListener("click", async (event) => {
  const previous = event.target.closest("[data-prev]");
  const next = event.target.closest("[data-next]");
  const thumb = event.target.closest("[data-thumb]");
  const copy = event.target.closest("[data-copy]");

  if (previous) goTo(currentIndex - 1);
  if (next) goTo(currentIndex + 1);
  if (thumb) goTo(Number(thumb.dataset.thumb));
  if (copy) {
    await navigator.clipboard.writeText(decodeURIComponent(copy.dataset.copy));
    copy.setAttribute("aria-label", "Comandos copiados");
    setTimeout(() => copy.setAttribute("aria-label", "Copiar comandos"), 1400);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    goTo(currentIndex + 1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goTo(currentIndex - 1);
  }
  if (event.key === "Home") goTo(0);
  if (event.key === "End") goTo(slides.length - 1);
});

window.addEventListener("hashchange", () => goTo(getIndexFromHash()));

renderDeck();
