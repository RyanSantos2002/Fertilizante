// Configuração Oficial da Landing Page — VITADUBO Fertilizantes
// Dados extraídos dos folders técnicos, laudos laboratoriais e especificações da fábrica.

export const siteConfig = {
  // Informações da Empresa & Marca
  companyName: "VITADUBO Fertilizantes",
  companyBadge: "100% BRASILEIRA • EXPORTAÇÃO AMÉRICA DO SUL",
  companySubtitle: "INDÚSTRIA DE FERTILIZANTES ORGÂNICOS E ORGANOMINERAIS",
  flagshipProduct: "Fertilizante Orgânico Simples Classe 'A' — COLHA+",
  slogan: "A inteligência biológica que transforma o solo, reduz custos e garante safras recordes.",

  // Contato & Atendimento Oficial
  phoneDisplay: "(49) 3199-2722",
  phoneRaw: "+554931992722",
  whatsappNumber: "554931992722",
  whatsappDisplay: "(49) 3199-2722",
  email: "contato@vitadubo.com.br",
  address: "Linha Três Irmãos, S/N Rodovia SC 468 - Km 05 - Interior | CEP 89819-000",
  factoryRegion: "Santa Catarina — Atendimento para todo o Brasil e Exportação para América do Sul",
  operatingHours: "Segunda a Sexta: 07h30 às 18h00 | Sábado: 08h00 às 12h00",
  whatsappMessage: "Olá! Gostaria de falar com o time técnico e comercial da Vitadubo Fertilizantes e solicitar uma cotação da linha COLHA+.",

  // Hero Section
  heroEyebrow: "TECNOLOGIA CLASSE 'A' • LINHA COLHA+ • MAPA & IBD",
  heroTitleLine1: "Nutrição biológica de alta performance",
  heroTitleLine2: "com a força do COLHA+ Classe 'A'.",
  heroDescription:
    "Desenvolvido a partir de matérias-primas nobres com compostagem industrial de precisão. O Fertilizante Orgânico Simples Classe 'A' COLHA+ retém de 4 a 6 vezes o seu próprio peso em água, eleva a CTC do solo para 592 mmolc/kg e corrige o pH ácido gerado por fertilizantes químicos convencionais.",

  heroStats: [
    { value: "73,17%", label: "Matéria Orgânica Nobre", sub: "Laudo oficial comprovado" },
    { value: "4 a 6x", label: "Retenção de Água", sub: "Resistência extrema a veranicos" },
    { value: "592,5", label: "CTC (mmolc/kg)", sub: "Capacidade de Troca Catiônica" },
    { value: "pH 7,2-7,6", label: "Ação Corretiva do Solo", sub: "Neutraliza a acidez química" }
  ],

  heroQuickPill: "🌱 Vendas diretas da indústria em Sacas de 40kg, Big Bags de 500kg / 1.000kg e A Granel",

  // Missão, Visão e Valores (Oficiais do Folder)
  mission: {
    title: "Nossa Missão",
    text: "A Vitadubo Fertilizantes é uma empresa revolucionária que tem como missão melhorar os processos produtivos convencionais. Para isso, investe na inovação através de pesquisas com alta tecnologia, transformando conhecimento em produtos de ponta para a agricultura 100% brasileira e para exportação."
  },
  vision: {
    title: "Nossa Visão",
    text: "Ser protagonista e parceira do produtor rural no aumento da produtividade, redução de custos e desenvolvimento sustentável."
  },
  values: {
    title: "Nossos Valores",
    text: "Praticamos o comportamento ético e moral com integridade. Prezamos pela simplicidade e humildade. Somos apaixonados pelo que fazemos, atendendo os amigos produtores direto em suas propriedades. Temos orgulho de trabalhar para o agro!"
  },

  // Laudo Laboratorial Oficial (Amostra Nº 036278/2022)
  labReport: {
    sampleId: "036278/2022",
    identification: "Fertilizante Orgânico Simples Classe A — COLHA+",
    type: "Fertilizante Orgânico Registrado",
    location: "Linha Três Irmãos, S/N Rodovia SC 468 - Km 05",
    parameters: [
      { name: "Matéria Orgânica", value: "73,17%", highlight: true, note: "Puro enriquecimento biológico" },
      { name: "Capacidade de Troca Catiônica (CTC)", value: "592,59 mmolc/kg", highlight: true, note: "Retenção superior de cátions" },
      { name: "Nitrogênio Total (N)", value: "4,74%", highlight: false, note: "Liberação gradual contínua" },
      { name: "Fósforo Total (P₂O₅)", value: "4,33%", highlight: false, note: "Fração protegida sem fixação" },
      { name: "Potássio (K₂O)", value: "4,88%", highlight: false, note: "Sem perdas por lixiviação" },
      { name: "Cálcio (Ca)", value: "4,89%", highlight: false, note: "Estruturação celular e radicular" },
      { name: "Carbono Orgânico", value: "28,72%", highlight: true, note: "Energia para microbiota benéfica" },
      { name: "Magnésio (Mg)", value: "0,97%", highlight: false, note: "Ativação de clorofila" },
      { name: "Relação C/N", value: "6", highlight: false, note: "Maturidade e estabilidade perfeita" },
      { name: "Umidade (a 65ºC)", value: "10,61%", highlight: false, note: "Secagem e estabilidade industrial" },
      { name: "Faixa de pH", value: "7,2 a 7,6", highlight: true, note: "Tamponamento contra pH ácido químico" }
    ],
    micros: "Contém micronutrientes essenciais balanceados: Boro (B), Cobre (Cu), Manganês (Mn), Ferro (Fe), Zinco (Zn) e Molibdênio (Mo)."
  },

  // Granulometrias Oficiais Disponíveis
  granulometries: [
    {
      type: "Peletizado 2,5mm",
      tag: "PLANTADEIRAS & PRECISÃO",
      desc: "Pellets ultra homogêneos de 2,5mm. Escoamento perfeito em caixas de plantadeiras e adubadoras pneumáticas, sem pó e sem embuchamento.",
      ideal: "Plantio direto de Soja, Milho, Trigo e Cereais."
    },
    {
      type: "Peletizado 5,5mm",
      tag: "LIBERAÇÃO CONTROLADA & CAFÉ",
      desc: "Pellets mais densos de 5,5mm para liberação lenta e prolongada dos nutrientes. Ideal para culturas perenes e cobertura.",
      ideal: "Café, Pomares de Fruticultura, Cana e Pastagens."
    },
    {
      type: "Farelado",
      tag: "DISTRIBUIÇÃO A LANÇO",
      desc: "Estrutura farelada rica em microporosidade para incorporação ampla no perfil do solo através de calcareadoras e distribuidores a lanço.",
      ideal: "Correção de perfil, pré-plantio, hortifrúti e áreas degradadas."
    }
  ],

  // Embalagens Oficiais da Fábrica
  packagings: [
    { title: "Sacas de 40 kg", note: "Paletizadas com filme stretch para proteção contra umidade.", badge: "Exportação & Mercado Interno" },
    { title: "Big Bags de 500 kg", note: "Fácil manuseio para tratores com guincho e pequenas operações.", badge: "Praticidade" },
    { title: "Big Bags de 1.000 kg", note: "Válvula inferior de vazão contínua para abastecimento rápido de plantadeiras.", badge: "Alta Escala" },
    { title: "A Granel", note: "Carregamento direto da esteira industrial para frotas de caminhões caçamba.", badge: "Logística Pesada" }
  ],

  // Órgãos Reguladores e Certificações Oficiais
  certifications: [
    { name: "MAPA", role: "Ministério da Agricultura, Pecuária e Abastecimento", desc: "Registro e auditoria federal permanente de conformidade e garantias mínimas." },
    { name: "IMA", role: "Instituto do Meio Ambiente de Santa Catarina", desc: "Licenciamento e controle ambiental industrial rigoroso." },
    { name: "IBD Certificações", role: "Maior certificadora orgânica da América Latina", desc: "Credenciamento para agricultura sustentável e manejo orgânico." },
    { name: "Vigilância & Bombeiros", role: "Vigilância Sanitária e Município", desc: "Processos auditados e conformidade sanitária plena." }
  ],

  // Benefícios Comprovados do COLHA+ Classe "A"
  flagshipBenefits: [
    {
      title: "Reter de 4 a 6x mais água que o próprio peso",
      desc: "A matéria orgânica rica em substâncias húmicas age como micro-reservatório hídrico, reduzindo o estresse nos veranicos e a erosão do solo."
    },
    {
      title: "pH de 7,2 a 7,6: Corretivo natural da acidez química",
      desc: "Os fertilizantes minerais comuns são fortemente ácidos (pH 3,5 a 4,5). O COLHA+ atua como neutralizador, preservando as raízes e a absorção radicular."
    },
    {
      title: "Matéria-prima nobre de cama e esterco de aves",
      desc: "Compostagem termofílica acelerada que elimina patógenos e sementes invasoras, combinando Cálcio, Magnésio, Enxofre e micronutrientes orgânicos."
    },
    {
      title: "Super CTC de 592,59 mmolc/kg",
      desc: "Área superficial específica muito superior à das argilas do solo, garantindo que o nutriente fique retido para a planta e não seja lavado pela chuva."
    },
    {
      title: "Ativação microbiana e saúde biológica",
      desc: "Estímulo contínuo a micorrizas e bactérias fixadoras, transformando a fertilidade nativa da terra em sacas na colheita."
    },
    {
      title: "Redução de custos e maior margem financeira",
      desc: "Menor perda por lixiviação e volatilização gera um aproveitamento de até 40% superior aos insumos químicos puros."
    }
  ],

  // Simulador de Culturas & Produtividade
  simulatorCrops: [
    {
      id: "soja",
      name: "Soja",
      unit: "sacas/ha",
      baseGain: 5.8,
      recommendation: "Vitadubo COLHA+ Peletizado 2,5mm no Sulco",
      waterRetention: "+35%",
      rootDepth: "+35cm",
      summary: "Maior ramificação lateral, vagens no baixeiro e granação uniforme até a ponta."
    },
    {
      id: "milho",
      name: "Milho Safra / Safrinha",
      unit: "sacas/ha",
      baseGain: 15.2,
      recommendation: "Vitadubo COLHA+ no Plantio + Organomineral Cobertura",
      waterRetention: "+30%",
      rootDepth: "+40cm",
      summary: "Colmo resistente contra tombamentos e espigas cheias até a ponta sem falhas."
    },
    {
      id: "trigo",
      name: "Trigo e Cereais de Inverno",
      unit: "sacas/ha",
      baseGain: 8.4,
      recommendation: "Vitadubo COLHA+ 2,5mm Micro-Grânulos",
      waterRetention: "+28%",
      rootDepth: "+25cm",
      summary: "Afilhamento vigoroso com perfilhamento uniforme e alto peso hectolítrico (PH)."
    },
    {
      id: "cafe",
      name: "Café Arábica e Conilon",
      unit: "sacas beneficiadas/ha",
      baseGain: 6.8,
      recommendation: "Vitadubo COLHA+ Peletizado 5,5mm na Projeção da Saia",
      waterRetention: "+45%",
      rootDepth: "+45cm",
      summary: "Maior retenção de água, peneira alta, maturação uniforme e diminuição de bienalidade."
    },
    {
      id: "pastagem",
      name: "Pastagens & Silagem",
      unit: "toneladas MS/ha",
      baseGain: 5.2,
      recommendation: "Vitadubo COLHA+ Farelado ou 5,5mm a Lanço",
      waterRetention: "+40%",
      rootDepth: "+50cm",
      summary: "Rebrota rápida, maior palatabilidade do gado e menor taxa de degradação da forrageira."
    },
    {
      id: "hf",
      name: "Hortifrúti e Olericultura",
      unit: "% de padrão comercial",
      baseGain: 25,
      recommendation: "Vitadubo COLHA+ Farelado incorporado aos canteiros",
      waterRetention: "+50%",
      rootDepth: "+20cm",
      summary: "Folhas brilhantes, frutos de maior calibre, doçura elevada e pós-colheita estendida."
    }
  ],

  // Perguntas Frequentes (FAQ) Atualizadas
  faq: [
    {
      q: "O Fertilizante Orgânico Simples Classe 'A' COLHA+ pode ser usado em qualquer plantadeira?",
      a: "Sim! Disponibilizamos a versão Peletizada de 2,5mm especialmente desenvolvida para distribuidores de adubo e caixas de plantadeiras mecânicas e pneumáticas. Os grânulos possuem alta dureza, não quebram, não geram pó excessivo e fluem perfeitamente sem embuchar."
    },
    {
      q: "Como o COLHA+ ajuda na retenção de água em épocas de estiagem?",
      a: "Devido ao teor superior de 73% de matéria orgânica nobre estabilizada e estrutura microporosa, o COLHA+ consegue absorver e reter de 4 a 6 vezes o seu próprio peso em água. Isso forma uma reserva hídrica no perfil radicular, mantendo a planta hidratada e alimentada mesmo durante veranicos prolongados."
    },
    {
      q: "Qual a importância do pH de 7,2 a 7,6 do COLHA+?",
      a: "Os adubos químicos minerais tradicionais possuem pH ácido (em média 3,5 a 4,5), o que queima radicelas e trava a absorção de nutrientes. O COLHA+ tem pH neutro a levemente alcalino (7,2 a 7,6), funcionando como condicionador e corretivo biológico imediato da rizosfera."
    },
    {
      q: "Quais são as embalagens disponíveis para compra?",
      a: "Fornecemos em Sacas de 40 kg (padrão mercado interno e exportação), Big Bags reforçados de 500 kg, Big Bags de 1.000 kg (com válvula de descarga rápida) e carregamento A Granel para caminhões caçamba."
    },
    {
      q: "Quais certificações e licenças a Vitadubo possui?",
      a: "A Vitadubo opera em conformidade estrita com o Ministério da Agricultura (MAPA), Instituto do Meio Ambiente de Santa Catarina (IMA), credenciamento no IBD Certificações (maior certificadora da América Latina), Vigilância Sanitária e Corpo de Bombeiros."
    },
    {
      q: "Como solicitar uma cotação direta da fábrica com frete para a minha fazenda?",
      a: "Basta entrar em contato pelo nosso telefone comercial (49) 3199-2722 ou pelo botão de WhatsApp nesta página. Atendemos todo o território nacional e enviamos propostas com frete CIF ou FOB."
    }
  ],

  // Rodapé Oficial
  footerDescription:
    "VITADUBO Fertilizantes Ltda — Indústria de Fertilizantes Orgânicos e Organominerais. Linha COLHA+ Classe 'A'. Linha Três Irmãos, SC 468 Km 05 - SC. Telefone comercial: (49) 3199-2722.",
  cnpjText: "Indústria 100% Brasileira • Registrada no MAPA, IMA e IBD • Exportação para América do Sul",
  copyright: `© ${new Date().getFullYear()} VITADUBO FERTILIZANTES LTDA. Todos os direitos reservados.`
};
