const assets = {
  gocare: "Marca Plano A/GoCare_horizontal.png",
  photos: {
    family: "assets/gocare/doctor-document.jpg",
    care: "assets/gocare/doctor-patient.jpg",
    reception: "assets/gocare/healthcare-team.jpg",
    telemed: "assets/gocare/telemedicine.jpg",
    business: "assets/gocare/business-team.jpg",
    doctor: "assets/gocare/doctor-laptop.jpg",
    manaus: "assets/gocare/manaus-ponte-rio-negro.jpg",
  },
};

const existingAssets = {
  planoWhite: "Marca Plano A/Marca Plano A_Versão Branca_Horizontal.png",
  planoBlue: "Marca Plano A/Marca Plano A_Versão Azul_Horizontal.png",
};

const icons = {
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path></svg>',
  family: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  building: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path><path d="M9 9v.01"></path><path d="M9 12v.01"></path><path d="M9 15v.01"></path><path d="M9 18v.01"></path></svg>',
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21a7 7 0 0 0-14 0"></path><circle cx="12" cy="8" r="5"></circle></svg>',
  video: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m16 13 5 3V8l-5 3"></path><rect x="3" y="5" width="13" height="14" rx="2"></rect></svg>',
  map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  ambulance: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17H5a2 2 0 0 1-2-2V7h11v10"></path><path d="M14 9h4l3 4v2a2 2 0 0 1-2 2h-1"></path><path d="M7 17a2 2 0 1 0 4 0"></path><path d="M16 17a2 2 0 1 0 4 0"></path><path d="M8 9v4"></path><path d="M6 11h4"></path></svg>',
  pharmacy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10.5 20.5 10-10a4.24 4.24 0 0 0-6-6l-10 10a4.24 4.24 0 0 0 6 6Z"></path><path d="m8.5 12.5 3 3"></path><path d="M14 8h4"></path><path d="M16 6v4"></path></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5"></path></svg>',
};

const tables = {
  adhesionEnf: {
    title: "Coletivos por adesão",
    columns: ["Faixa etária", "Silver ENF - ANS 507133250", "Gold ENF - ANS 507131253"],
    rows: [
      ["0 a 18 anos", "R$ 284,25", "R$ 326,89"],
      ["19 a 23 anos", "R$ 334,84", "R$ 385,07"],
      ["24 a 28 anos", "R$ 366,17", "R$ 421,10"],
      ["29 a 33 anos", "R$ 402,93", "R$ 462,64"],
      ["34 a 38 anos", "R$ 436,02", "R$ 501,43"],
      ["39 a 43 anos", "R$ 498,22", "R$ 573,45"],
      ["44 a 48 anos", "R$ 667,26", "R$ 767,35"],
      ["49 a 53 anos", "R$ 843,11", "R$ 969,58"],
      ["54 a 58 anos", "R$ 1.028,62", "R$ 1.182,91"],
      ["+59 anos", "R$ 1.464,62", "R$ 1.684,32"],
    ],
  },
  adhesionApto: {
    title: "Acomodação apartamento",
    columns: ["Faixa etária", "Silver APTO - ANS 507129251", "Gold APTO - ANS 507132251"],
    rows: [
      ["0 a 18 anos", "R$ 350,93", "R$ 403,56"],
      ["19 a 23 anos", "R$ 413,39", "R$ 475,40"],
      ["24 a 28 anos", "R$ 452,06", "R$ 519,87"],
      ["29 a 33 anos", "R$ 496,66", "R$ 571,16"],
      ["34 a 38 anos", "R$ 538,30", "R$ 619,05"],
      ["39 a 43 anos", "R$ 615,63", "R$ 707,97"],
      ["44 a 48 anos", "R$ 823,78", "R$ 947,34"],
      ["49 a 53 anos", "R$ 1.040,88", "R$ 1.197,01"],
      ["54 a 58 anos", "R$ 1.269,90", "R$ 1.460,39"],
      ["+59 anos", "R$ 1.808,18", "R$ 2.079,40"],
    ],
  },
  pmeSmallEnf: {
    title: "PME 1 a 29 vidas",
    columns: ["Faixa etária", "Silver ENF - ANS 507126257", "Gold ENF - ANS 507124251"],
    rows: [
      ["0 a 18 anos", "R$ 247,05", "R$ 264,34"],
      ["19 a 23 anos", "R$ 291,02", "R$ 311,40"],
      ["24 a 28 anos", "R$ 318,25", "R$ 340,53"],
      ["29 a 33 anos", "R$ 349,65", "R$ 374,13"],
      ["34 a 38 anos", "R$ 378,96", "R$ 405,49"],
      ["39 a 43 anos", "R$ 433,40", "R$ 463,74"],
      ["44 a 48 anos", "R$ 579,94", "R$ 620,53"],
      ["49 a 53 anos", "R$ 732,78", "R$ 784,07"],
      ["54 a 58 anos", "R$ 894,01", "R$ 956,59"],
      ["+59 anos", "R$ 1.272,96", "R$ 1.362,06"],
    ],
  },
  pmeSmallApto: {
    title: "PME 1 a 29 vidas",
    columns: ["Faixa etária", "Silver APTO - ANS 507130255", "Gold APTO - ANS 507125259"],
    rows: [
      ["0 a 18 anos", "R$ 308,81", "R$ 330,43"],
      ["19 a 23 anos", "R$ 363,78", "R$ 389,25"],
      ["24 a 28 anos", "R$ 397,82", "R$ 425,66"],
      ["29 a 33 anos", "R$ 437,06", "R$ 467,66"],
      ["34 a 38 anos", "R$ 473,70", "R$ 506,86"],
      ["39 a 43 anos", "R$ 541,75", "R$ 579,67"],
      ["44 a 48 anos", "R$ 724,92", "R$ 775,67"],
      ["49 a 53 anos", "R$ 915,97", "R$ 980,09"],
      ["54 a 58 anos", "R$ 1.117,51", "R$ 1.195,74"],
      ["+59 anos", "R$ 1.591,19", "R$ 1.702,58"],
    ],
  },
  pmeLargeEnf: {
    title: "PME 30 a 99 vidas",
    columns: ["Faixa etária", "Silver ENF - ANS 507126257", "Gold ENF - ANS 507124251"],
    rows: [
      ["0 a 18 anos", "R$ 234,70", "R$ 251,13"],
      ["19 a 23 anos", "R$ 276,47", "R$ 295,83"],
      ["24 a 28 anos", "R$ 302,34", "R$ 323,50"],
      ["29 a 33 anos", "R$ 332,17", "R$ 355,42"],
      ["34 a 38 anos", "R$ 360,02", "R$ 385,22"],
      ["39 a 43 anos", "R$ 411,73", "R$ 440,55"],
      ["44 a 48 anos", "R$ 550,94", "R$ 589,51"],
      ["49 a 53 anos", "R$ 696,14", "R$ 744,87"],
      ["54 a 58 anos", "R$ 849,31", "R$ 908,76"],
      ["+59 anos", "R$ 1.209,31", "R$ 1.293,96"],
    ],
  },
  pmeLargeApto: {
    title: "PME 30 a 99 vidas",
    columns: ["Faixa etária", "Silver APTO - ANS 507130255", "Gold APTO - ANS 507125259"],
    rows: [
      ["0 a 18 anos", "R$ 293,37", "R$ 313,91"],
      ["19 a 23 anos", "R$ 345,59", "R$ 369,78"],
      ["24 a 28 anos", "R$ 377,92", "R$ 404,38"],
      ["29 a 33 anos", "R$ 415,21", "R$ 444,27"],
      ["34 a 38 anos", "R$ 450,02", "R$ 481,52"],
      ["39 a 43 anos", "R$ 514,66", "R$ 550,69"],
      ["44 a 48 anos", "R$ 688,68", "R$ 736,88"],
      ["49 a 53 anos", "R$ 870,17", "R$ 931,08"],
      ["54 a 58 anos", "R$ 1.061,64", "R$ 1.135,95"],
      ["+59 anos", "R$ 1.511,63", "R$ 1.617,45"],
    ],
  },
};

const networkPlaceholders = [
  "Rede credenciada",
  "Hospital",
  "Pronto atendimento",
  "Clínica",
  "Laboratorio",
  "Diagnostico",
];

const slides = [
  { type: "cover", nav: "Capa" },
  { type: "purpose", nav: "Propósito" },
  { type: "about", nav: "GoCare" },
  { type: "audiences", nav: "Publicos" },
  { type: "telemedicine", nav: "Telemedicina" },
  { type: "productsIntro", nav: "Produtos" },
  { type: "regionProducts", nav: "Campinas", title: "Campinas", products: [["Green", "Enfermaria", "green"], ["Gold", "Enfermaria", "gold"], ["Platinum", "Apartamento", "black"]] },
  { type: "regionProducts", nav: "Baixada", title: "Baixada Santista", products: [["Litoral", "Enfermaria", "pink"], ["Litoral Especial", "Apartamento", "black"]] },
  { type: "spProducts", nav: "São Paulo" },
  { type: "manaus", nav: "Manaus" },
  { type: "regionProducts", nav: "Manaus produtos", title: "Manaus", products: [["Silver", "Enfermaria ou Apartamento", "silver"], ["Gold", "Enfermaria ou Apartamento", "gold"], ["Black", "Enfermaria ou Apartamento", "black", "Em breve"]], city: "manaus" },
  { type: "network", nav: "Silver", plan: "Silver", tone: "silver" },
  { type: "network", nav: "Gold", plan: "Gold", tone: "gold" },
  { type: "prices", nav: "Adesão", title: "Planos Coletivos por Adesão", tables: [tables.adhesionEnf, tables.adhesionApto], footer: "planoa" },
  { type: "prices", nav: "PME 1-29", title: "Planos Coletivos Empresariais - PME (1 a 29 vidas)", tables: [tables.pmeSmallEnf, tables.pmeSmallApto], footer: "gocare" },
  { type: "prices", nav: "PME 30-99", title: "Planos Coletivos Empresariais - PME (30 a 99 vidas)", tables: [tables.pmeLargeEnf, tables.pmeLargeApto], footer: "gocare" },
  { type: "benefitsIntro", nav: "Beneficios" },
  { type: "benefits", nav: "Cards" },
  { type: "business", nav: "Empresario" },
  { type: "closing", nav: "Fim" },
];

let currentIndex = getIndexFromHash();

const deck = document.querySelector("#deck");
const currentLabel = document.querySelector("[data-current]");
const totalLabel = document.querySelector("[data-total]");
const progress = document.querySelector("[data-progress]");
const thumbs = document.querySelector("[data-thumbs]");

function logo(src, alt, className = "") {
  return `<img class="${className}" src="${src}" alt="${alt}" onerror="this.hidden=true">`;
}

function brandRow() {
  return `
    <header class="brand-row">
      ${logo(assets.gocare, "GoCare Saúde", "brand-logo brand-logo--gocare")}
      <div class="brand-right">
        <span>ANS - nº 42268-1</span>
        ${logo(existingAssets.planoBlue, "Plano A", "brand-logo brand-logo--planoa")}
      </div>
    </header>
  `;
}

function visualPanel(kind, label) {
  const photo = assets.photos[kind] || assets.photos.doctor;
  return `
    <div class="image-panel image-panel--${kind}" role="img" aria-label="${label}">
      <img class="image-panel__photo" src="${photo}" alt="${label}" loading="lazy" onerror="this.hidden=true">
      <div class="image-panel__caption">${label}</div>
    </div>
  `;
}

function productCard([name, caption, tone, flag]) {
  return `
    <article class="product-card product-card--${tone}">
      ${flag ? `<em>${flag}</em>` : ""}
      <strong>${name}</strong>
      <span>${caption}</span>
    </article>
  `;
}

function priceTable(table) {
  return `
    <div class="price-table-wrap">
      <table class="price-table">
        <caption>${table.title}</caption>
        <thead>
          <tr>${table.columns.map((column) => `<th>${column}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows.map((row) => `
            <tr>${row.map((cell, index) => `<td data-label="${table.columns[index]}">${cell}</td>`).join("")}</tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function logoGrid(highlight = false) {
  return `
    <div class="logo-grid">
      ${networkPlaceholders.map((name, index) => `
        <div class="network-logo ${highlight && index === 0 ? "is-highlighted" : ""}">
          ${highlight && index === 0 ? "Hospital Adventista de Manaus" : name}
        </div>
      `).join("")}
    </div>
  `;
}

function renderCover() {
  return `
    <section class="content-grid content-grid--cover">
      <div class="copy-block">
        <h1>Sua saúde e um plano de agora!</h1>
        <div class="logo-pair">
          ${logo(assets.gocare, "GoCare Saúde")}
          ${logo(existingAssets.planoBlue, "Plano A")}
        </div>
        <p class="ans-line">ANS - nº 42268-1</p>
      </div>
      ${visualPanel("family", "Cuidado humano para famílias e empresas")}
    </section>
  `;
}

function renderPurpose() {
  return `
    <section class="split-full">
      ${visualPanel("care", "Saúde simples desde o início")}
      <div class="pink-panel">
        <p>Nosso intuito e ampliar o acesso a <mark>saúde</mark> e <mark>desburocratizar</mark> este processo desde o seu início.</p>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="content-grid content-grid--about">
      <div class="copy-block">
        <h2>A GoCare</h2>
        <p>Atendendo grande parte do interior do Estado de São Paulo (Região Metropolitana de Campinas), São Paulo (capital), Baixada Santista e também Manaus, a GoCare apresenta uma ampla rede credenciada para atendimento de seus beneficiários, com preços justos e adequados.</p>
      </div>
      <div class="institutional-card">
        ${visualPanel("reception", "Atendimento institucional")}
      </div>
    </section>
  `;
}

function renderAudiences() {
  const items = [
    ["Para família", icons.family],
    ["Para empresa", icons.building],
    ["Para você", icons.user],
  ];
  return `
    <section class="center-stack">
      <h2>A GoCare e...</h2>
      <div class="audience-grid">
        ${items.map(([title, icon], index) => `
          <article>
            <div class="audience-photo audience-photo--${index + 1}"></div>
            ${icon}
            <strong>${title}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTelemedicine() {
  return `
    <section class="content-grid content-grid--telemed">
      ${visualPanel("telemed", "Telemedicina com atendimento próximo")}
      <div class="white-card telemed-card">
        <h2>Telemedicina</h2>
        <p>Com a telemedicina, você pode:</p>
        <ul>
          <li>Consultar um médico sem sair de casa;</li>
          <li>Receber orientações medicas imediatas;</li>
          <li>Obter prescrições e encaminhamentos quando necessário.</li>
        </ul>
        <div class="dark-note">
          <strong>Pronto atendimento</strong>
          <span>Clínica Medica e Pediatria. Consultas eletivas em diversas especialidades.</span>
        </div>
        <small>Consulte se esse serviço está disponível para o seu plano.</small>
      </div>
    </section>
  `;
}

function renderProductsIntro() {
  return `
    <section class="full-bleed full-bleed--products">
      <div>
        <h2>Produtos</h2>
        <span></span>
        <p>Feitos para você!</p>
      </div>
    </section>
  `;
}

function renderRegionProducts(slide) {
  return `
    <section class="region-layout">
      <aside class="city-rail city-rail--${slide.city || "default"}"></aside>
      <div class="region-content">
        <p class="section-subtitle">Produtos</p>
        <h2>${slide.title}</h2>
        <div class="product-grid ${slide.products.length === 4 ? "product-grid--four" : ""}">
          ${slide.products.map(productCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSpProducts() {
  return renderRegionProducts({
    title: "São Paulo",
    products: [
      ["SP1", "Zona Oeste", "orange"],
      ["SP2", "Zona Norte", "sp2"],
      ["SP3", "Zona Leste", "gold"],
      ["SP5", "Zona Leste, Oeste, Norte, Sul e Centro, além de algumas cidades da Grande São Paulo", "black"],
    ],
  });
}

function renderManaus() {
  return `
    <section class="split-full split-full--manaus">
      <div class="manaus-photo">
        <img src="${assets.photos.manaus}" alt="Ponte Rio Negro em Manaus" loading="lazy">
      </div>
      <div class="pink-panel pink-panel--manaus">
        <div class="location-badge">${icons.map}<span>Manaus</span></div>
        <h2><span>Chegamos</span> Manaus</h2>
        <p>A GoCare nasce na cidade com um propósito claro: tornar o cuidado com a saúde mais simples, próximo e humano.</p>
      </div>
    </section>
  `;
}

function renderNetwork(slide) {
  return `
    <section class="network-slide">
      <aside class="city-rail city-rail--manaus"></aside>
      <div class="network-content">
        <div class="network-head">
          ${productCard([slide.plan, "Enfermaria ou Apartamento", slide.tone])}
          <div>
            <h2>${slide.plan}</h2>
            <p>O Plano ${slide.plan} conta com rede credenciada em Manaus, oferecendo acomodações em quarto coletivo ou privativo.</p>
          </div>
        </div>
        <h3>Rede de atendimento</h3>
        ${logoGrid(slide.plan === "Gold")}
      </div>
    </section>
  `;
}

function renderPrices(slide) {
  return `
    <section class="prices-slide">
      <h2>${slide.title}</h2>
      <div class="tables-grid">
        ${slide.tables.map(priceTable).join("")}
      </div>
      <footer class="table-brand">
        ${slide.footer === "planoa" ? logo(existingAssets.planoBlue, "Plano A") : logo(assets.gocare, "GoCare Saúde")}
        ${slide.footer === "gocare" ? `<span>ANS - nº 42268-1</span>` : ""}
      </footer>
    </section>
  `;
}

function renderBenefitsIntro() {
  return `
    <section class="full-bleed full-bleed--benefits">
      <div>
        <h2>Beneficios</h2>
        <span></span>
        <p>Para clientes GoCare</p>
      </div>
    </section>
  `;
}

function renderBenefits() {
  const benefits = [
    [icons.ambulance, "Atendimento emergêncial em todo Brasil", ["Rede Abramge", "Cobertura nacional para urgência e emergência"], "pink"],
    [icons.pharmacy, "Desconto nas principais redes de farmácia", ["Pague Menos", "Drogasil", "Raia", "Drogaria"], "dark"],
    [icons.clock, "Carência 24h", ["Após a data de vigência", "Consultas", "Exames simples", "Pronto-socorro"], "pink"],
  ];
  return `
    <section class="center-stack center-stack--light">
      <p class="section-subtitle">Para clientes GoCare</p>
      <h2>Beneficios</h2>
      <div class="benefit-grid">
        ${benefits.map(([icon, title, lines, tone]) => `
          <article class="benefit-card benefit-card--${tone}">
            ${icon}
            <h3>${title}</h3>
            ${lines.map((line) => `<p>${line}</p>`).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderBusiness() {
  return `
    <section class="split-full split-full--business">
      ${visualPanel("business", "Relacionamento empresarial")}
      <div class="pink-panel">
        <div class="corner-badge">Para o empresário</div>
        <h2>Relacionamento empresarial</h2>
        <p>Nosso compromisso vai além da contratação do plano. Oferecemos um suporte pós-venda dedicado, auxiliando na implantação e atendendo a todas as demandas administrativas que possam surgir.</p>
        <p>Nossa equipe esta sempre pronta para garantir uma experiência tranquila e satisfatória para sua empresa.</p>
      </div>
    </section>
  `;
}

function renderClosing() {
  return `
    <section class="content-grid content-grid--cover">
      <div class="copy-block">
        <h2>Sua saúde e um plano de agora!</h2>
        <div class="logo-pair">
          ${logo(assets.gocare, "GoCare Saúde")}
          ${logo(existingAssets.planoBlue, "Plano A")}
        </div>
        <p class="ans-line">ANS - nº 42268-1</p>
      </div>
      ${visualPanel("family", "GoCare + Plano A")}
    </section>
  `;
}

function renderSlide(slide) {
  const renderers = {
    cover: renderCover,
    purpose: renderPurpose,
    about: renderAbout,
    audiences: renderAudiences,
    telemedicine: renderTelemedicine,
    productsIntro: renderProductsIntro,
    regionProducts: renderRegionProducts,
    spProducts: renderSpProducts,
    manaus: renderManaus,
    network: renderNetwork,
    prices: renderPrices,
    benefitsIntro: renderBenefitsIntro,
    benefits: renderBenefits,
    business: renderBusiness,
    closing: renderClosing,
  };

  return renderers[slide.type](slide);
}

function renderDeck() {
  deck.innerHTML = slides.map((slide, index) => `
    <article class="slide ${index === currentIndex ? "is-active" : ""}" data-slide="${index}">
      ${["purpose", "productsIntro", "benefitsIntro"].includes(slide.type) ? "" : brandRow()}
      ${renderSlide(slide)}
    </article>
  `).join("");

  totalLabel.textContent = String(slides.length).padStart(2, "0");
  thumbs.innerHTML = slides.map((slide, index) => `
    <button class="thumb ${index === currentIndex ? "is-active" : ""}" type="button" aria-label="Ir para ${slide.nav}" data-thumb="${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
    </button>
  `).join("");

  updateState();
}

function getIndexFromHash() {
  const value = Number.parseInt(window.location.hash.replace("#", ""), 10);
  if (Number.isFinite(value) && value >= 1 && value <= slides.length) return value - 1;
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

document.addEventListener("click", (event) => {
  const previous = event.target.closest("[data-prev]");
  const next = event.target.closest("[data-next]");
  const thumb = event.target.closest("[data-thumb]");

  if (previous) goTo(currentIndex - 1);
  if (next) goTo(currentIndex + 1);
  if (thumb) goTo(Number(thumb.dataset.thumb));
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
