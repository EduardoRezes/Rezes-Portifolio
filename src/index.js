import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const TRANSLATIONS = {
  "pt-BR": {
    "hero.greeting": "Olá, meu nome é",
    "hero.role": "Eu sou Quality Assurance.",
    "hero.cta": "Saiba mais",

    "about.title": "Sobre mim",
    "about.p1":
      "Olá, meu nome é Eduardo. Tenho experiência como desenvolvedor de software, atuando em diversos projetos em ambientes corporativos e acadêmicos.",
    "about.p2":
      "Ao longo da minha jornada, explorei várias áreas da engenharia de software e descobri minha paixão por Garantia de Qualidade (QA), que se tornou minha principal habilidade. Com o tempo, foquei na implementação de diferentes tipos de testes — automatizados, exploratórios, carga e regressão — contribuindo para o sucesso de projetos de diferentes complexidades.",
    "about.p3":
      "Minha abordagem é marcada por muita organização e por buscar código limpo e legível, sempre priorizando clareza.",
    "about.p4":
      "Além disso, sou músico e a bateria é meu instrumento — algo que reflete minha paixão por disciplina e ritmo, não só na música, mas também no desenvolvimento de software.",
    "about.resume": "Ver Currículo",

    "experience.title": "Experiência Profissional",

    "contact.title": "Contato",
    "contact.cta": "Fale comigo",

    "exp.sovis.title": "Analista de Qualidade de Software - Pleno",
    "exp.sovis.company": "Sovis",
    "exp.sovis.period": "ago de 2025 - o momento · 6 meses | Brasil · Remota",

    "exp.joinqa.title": "Analista de Qualidade de Software - Pleno",
    "exp.joinqa.company": "Join Ads Network",
    "exp.joinqa.period":
      "out de 2024 - jun de 2025 · 9 meses | Foz do Iguaçu, Paraná, Brasil · Presencial",
    "exp.joinqa.desc":
      "Dediquei meus esforços para implementar melhorias no processo de desenvolvimento. Como QA, apoiei a equipe de desenvolvimento ajudando na cobertura de testes unitários e na automação de testes E2E utilizando o Robot Framework. Auxiliei o time na configuração das pipelines de CI/CD, integrando os testes ao processo, de modo que a cada nova versão os testes fossem executados para validar as implementações. Implementei uma estrutura mais organizada para a esteira de desenvolvimento, incluindo práticas voltadas à garantia da qualidade do software entregue ao cliente. Criei testes E2E com o Robot Framework e testes unitários utilizando o PestPHP. Durante esse período, também atuei na criação de documentações para apoiar os processos da equipe.",
    "exp.joinqa.skills":
      "Competências: Testes automatizados de software · Qaops · Gestão de documentos · TesteCafe · Robot Framework · Atenção a detalhes · PHPUnit · PHP",

    "exp.joindev.title": "Desenvolvedor de Software - Júnior",
    "exp.joindev.company": "Join Ads Network",
    "exp.joindev.period":
      "set de 2024 - nov de 2024 · 3 meses | Foz do Iguaçu, Paraná, Brasil · Presencial",
    "exp.joindev.desc":
      "Atuando no desenvolvimento de features para diversos projetos internos, utilizando práticas de TDD para garantir a qualidade do código desde o início. Colaborando com o time na implementação de melhores práticas, promovendo a cultura de qualidade de software que desenvolvi ao longo dos anos. Contribuo com codereview, buscando aprimorar a consistência e eficiência do desenvolvimento, além de garantir a entrega de soluções de alta qualidade.",
    "exp.joindev.skills":
      "Competências: Desenvolvimento de software · Gestão de documentos · Laravel · Sistemas operacionais · Atenção a detalhes · TDD · PHP",

    "exp.clinicorp.title": "Analista de Qualidade de Software - Júnior",
    "exp.clinicorp.company": "Clinicorp Solutions",
    "exp.clinicorp.period":
      "out de 2023 - set de 2024 · 1 ano | Jaraguá do Sul, Santa Catarina, Brasil · Híbrida",
    "exp.clinicorp.desc":
      "Contribuindo para a Clinicorp, uma empresa que desenvolve um sistema abrangente de gerenciamento clínico e estético, otimizando as operações diárias de clínicas, desde o agendamento de pacientes até a gestão financeira. A empresa conta com aproximadamente 300 colaboradores. Minhas atribuições iniciam nos times como QC (Controle de Qualidade), onde desempenho um papel fundamental nos estágios iniciais dos processos de desenvolvimento. Agrego valor ao produto e ao custo do projeto ao garantir a qualidade desde o início. Além disso, atuo como QA (Garantia de Qualidade), validando o processo de entrega das demandas das equipes. Trabalhando em várias equipes, utilizo estratégias como Kanban e Scrum para gerenciar eficientemente as atividades do dia a dia. Realizei automação para testes E2E, tanto para front-end e back-end e mobile, utilizando Robot Framework. Este esforço concluiu com o aumento da eficiência e a qualidade nos processos de desenvolvimento.",
    "exp.clinicorp.skills":
      "Competências: Execução de testes · Kanban · Testes exploratórios · Scrum · Gestão de documentos · Xray · BDD · React.js · Garantia de qualidade · JIRA · Robot Framework · Comunicação · Cypress.io · Automação de testes · Assistência ao produto · Gherkin · Node.js",

    "exp.live.title": "Desenvolvedor de Software - Júnior",
    "exp.live.company": "LIVE!",
    "exp.live.period":
      "ago de 2023 - out de 2023 · 3 meses | Jaraguá do Sul, Santa Catarina, Brasil · Presencial",
    "exp.live.desc":
      "Trabalhei na Live!, uma empresa especializada em produtos têxteis voltados para moda fitness. Durante minha atuação presencial com uma equipe de desenvolvimento composta por 6 membros, utilizei metodologias ágeis como Scrum e Kanban para alinhar e organizar as demandas durante as sprints. Minhas responsabilidades eram centradas no desenvolvimento de funcionalidades cruciais para o sistema interno da fábrica. O projeto envolvia o uso de React para o frontend e Java para o backend, incluindo a criação de scripts SQL para consultas ao banco de dados. Ao colaborar com colegas de trabalho, obtive valiosos aprendizados, contribuindo também com experiências anteriores em outras empresas. Destaco a aplicação de boas práticas de versionamento de código utilizando Git, enriquecendo ainda mais meu conhecimento e habilidades.",
    "exp.live.skills":
      "Competências: Kanban · Oracle SQL Developer · Desenvolvimento de software · Scrum · React.js · Sistemas operacionais · Comunicação · Java",

    "exp.itaipu.title": "Desenvolvedor de Software - Júnior",
    "exp.itaipu.company": "Parque Tecnológico Itaipu - Brasil",
    "exp.itaipu.period":
      "set de 2021 - nov de 2022 · 1 ano 3 meses | Foz do Iguaçu, Paraná, Brasil",
    "exp.itaipu.desc":
      "Trabalhei no Parque Tecnológico de Itaipu, uma empresa com diversas áreas de atuação, principalmente voltada para a inovação. Minha atuação foi no laboratório GE.DT, com responsabilidades em projetos de energia. Entre minhas atividades, estavam a execução de atividades técnicas sob orientação, assistência técnica para desenvolvimento de projetos e pesquisas, manutenção de equipamentos e instalações, apoio na compra e utilização de máquinas, produtos e equipamentos, participação em programas de pesquisa, fiscalização e inspeção das atividades, elaboração de projetos, realização de procedimentos necessários para instalação e manutenção de máquinas e equipamentos, elaboração e atualização de instruções de procedimentos e normas, além do atendimento ao público interno e externo. Durante o meu tempo na empresa, tive a oportunidade de criar e atualizar a documentação de um projeto que envolvia as estações de produção de energia. O objetivo desse projeto era monitorar e criar alertas dos disjuntores das estações com base nos parâmetros inseridos no sistema. A arquitetura do sistema consistia em um projeto MVC, construído em Java e PrimeFaces. Também reportava aos engenheiros da Itaipu, em reuniões quinzenais, os progressos solicitados pela equipe de engenheiros da Itaipu, mantendo-os atualizados sobre o desenvolvimento do projeto.",
    "exp.itaipu.skills":
      "Competências: Kanban · Primefaces · Metodologias Agile · Hyper-V · Desenvolvimento de software · Scrum · Java Architecture for XML Binding · Agendamento de reuniões · MySQL · Testes · Atas · Comunicação · Servidor Windows · Implementação de software · Java",

    "exp.ibijus.title": "Analista de Qualidade de Software - Júnior",
    "exp.ibijus.company": "IbiJus - Instituto Brasileiro de Direito",
    "exp.ibijus.period": "mai de 2021 - set de 2021 · 5 meses | Remota",
    "exp.ibijus.desc":
      "Trabalhei na Ibijus, uma empresa do ramo de direito que oferece cursos profissionalizantes e conta com uma equipe de 50-100 funcionários. Minhas atribuições eram focadas na implementação e manutenção dos testes na plataforma. Comecei criando e documentando testes exploratórios na plataforma, mapeando todos os cenários de testes. Em seguida, implementei um processo de teste, correção e re-teste, que consistia em gerenciar todo o processo da correção desde o reporte de usuários ou pela equipe de QA, passando pelo time de desenvolvimento para correção e teste para validar a correção. Também ajudei a equipe na implementação da integração contínua do sistema e participei de reuniões de disseminação de conhecimento, realizadas a cada 15 dias, com o objetivo de trocar informações, conquistas, códigos e curiosidades. Além disso, participei de reuniões de alinhamento entre as equipes e utilizei metodologias ágeis como Scrum e Kanban. Minha atuação na empresa também incluiu auxiliar o time com UX e, com excelência, pude contribuir com a empresa nos processos de Qualidade de Software, conquistando a cobertura das funcionalidades do sistema, desde os testes exploratórios até os testes automatizados. Uma das minhas conquistas foi a implementação do processo de mapear e gerenciar os reportes de bugs encontrados.",
    "exp.ibijus.skills":
      "Competências: Git · Testes manuais · Kanban · Metodologias Agile · Integração contínua · Testes exploratórios · DBeaver · Scrum · Planejamento de testes · JavaScript · Garantia de qualidade · Atenção a detalhes · Comunicação · Cypress.io · Automação de testes",

    "exp.intelltech.title": "Analista de Qualidade de Software",
    "exp.intelltech.company": "IntellTech Tecnologias Inteligentes",
    "exp.intelltech.period":
      "abr de 2019 - jan de 2021 · 1 ano 10 meses | Foz do Iguaçu e Região, Brasil",
    "exp.intelltech.desc":
      "Trabalhei na IntellTech, uma empresa que oferece soluções para gerenciamento de barragens, um sistema modular com várias funcionalidades e uma equipe de 50-100 funcionários. Minha responsabilidade principal era implementar e manter os testes na plataforma. Atuando no time de QA, fui responsável por criar e documentar cenários de testes para mapear as funcionalidades do sistema, incluindo testes de carga e caixa-preta e caixa-branca. Além disso, utilizei os aplicativos da Microsoft para gerenciar e documentar os bugs encontrados no sistema e criei testes automatizados usando o Selenium. Participei de reuniões entre equipes para disseminar conhecimento do sistema e planejamento de sprints. Também auxiliei na correção de bugs, garantindo a qualidade do sistema. Em resumo, minha contribuição na IntellTech ajudou a garantir uma cobertura completa de testes, desde testes exploratórios até testes automatizados, e colaborou para o crescimento da empresa.",
    "exp.intelltech.skills":
      "Competências: Testes manuais · Execução de testes · Kanban · C# · Metodologias Agile · Testes de carga · Testes com Selenium · Selenium · Scrum · Documentação de software · Planejamento de testes · Testes · Garantia de qualidade · Atenção a detalhes · Comunicação · Documentação de usuário · Automação de testes · Testes funcionais · Microsoft 365",
  },
  en: {
    "hero.greeting": "Hi, my name is",
    "hero.role": "I'm a Quality Assurance professional.",
    "hero.cta": "Know more",

    "about.title": "About me",
    "about.p1":
      "Hi, my name is Eduardo. I have experience as a software developer, having worked on projects in both corporate and academic environments.",
    "about.p2":
      "Throughout my journey, I explored several areas of software engineering and discovered my passion for Quality Assurance (QA), which became my main focus. Over the years, I worked with different kinds of tests—automated, exploratory, load, and regression—contributing to projects of varying complexity.",
    "about.p3":
      "My approach is guided by strong organization and a focus on clean, readable code—always aiming for clarity.",
    "about.p4":
      "Additionally, I'm a musician and drums are my instrument of choice—reflecting my passion for discipline and rhythm, not only in music but also in software development.",
    "about.resume": "View Resume",

    "experience.title": "Professional Experience",

    "contact.title": "Contact",
    "contact.cta": "Contact me",

    "exp.sovis.title": "Software Quality Analyst (Mid-level)",
    "exp.sovis.company": "Sovis",
    "exp.sovis.period": "Aug 2025 - Present · 6 months | Brazil · Remote",

    "exp.joinqa.title": "Software Quality Analyst (Mid-level)",
    "exp.joinqa.company": "Join Ads Network",
    "exp.joinqa.period":
      "Oct 2024 - Jun 2025 · 9 months | Foz do Iguaçu, Paraná, Brazil · On-site",
    "exp.joinqa.desc":
      "I focused on improving the development process. As a QA, I supported the development team by increasing unit test coverage and implementing E2E test automation using Robot Framework. I also helped set up CI/CD pipelines, integrating tests into the process so that tests ran on every new version to validate implementations. I implemented a more organized delivery pipeline with practices focused on software quality. I created E2E tests with Robot Framework and unit tests using PestPHP. During this period, I also produced documentation to support team processes.",
    "exp.joinqa.skills":
      "Skills: Test automation · QAOps · Document management · TestCafe · Robot Framework · Attention to detail · PHPUnit · PHP",

    "exp.joindev.title": "Junior Software Developer",
    "exp.joindev.company": "Join Ads Network",
    "exp.joindev.period":
      "Sep 2024 - Nov 2024 · 3 months | Foz do Iguaçu, Paraná, Brazil · On-site",
    "exp.joindev.desc":
      "I worked on features for internal projects, applying TDD practices to ensure code quality from the start. I collaborated with the team to implement best practices and promote a culture of software quality. I contributed to code reviews to improve consistency and development efficiency, ensuring high-quality deliveries.",
    "exp.joindev.skills":
      "Skills: Software development · Document management · Laravel · Operating systems · Attention to detail · TDD · PHP",

    "exp.clinicorp.title": "Junior Software Quality Analyst",
    "exp.clinicorp.company": "Clinicorp Solutions",
    "exp.clinicorp.period":
      "Oct 2023 - Sep 2024 · 1 year | Jaraguá do Sul, Santa Catarina, Brazil · Hybrid",
    "exp.clinicorp.desc":
      "I contributed to Clinicorp, a company that develops a comprehensive clinical and aesthetic management system, optimizing daily clinic operations from scheduling to financial management (around 300 employees). I started in QC (Quality Control), playing a key role in early stages of the development process, ensuring quality from the beginning. I also worked as QA (Quality Assurance), validating delivery processes across teams. Working with multiple teams, I used strategies like Kanban and Scrum to manage day-to-day activities. I built E2E automation for front-end, back-end, and mobile using Robot Framework, improving efficiency and quality in the development process.",
    "exp.clinicorp.skills":
      "Skills: Test execution · Kanban · Exploratory testing · Scrum · Document management · Xray · BDD · React.js · Quality assurance · Jira · Robot Framework · Communication · Cypress · Test automation · Product support · Gherkin · Node.js",

    "exp.live.title": "Junior Software Developer",
    "exp.live.company": "LIVE!",
    "exp.live.period":
      "Aug 2023 - Oct 2023 · 3 months | Jaraguá do Sul, Santa Catarina, Brazil · On-site",
    "exp.live.desc":
      "I worked at Live!, a company specialized in textile products for fitness fashion. On-site with a 6-person development team, I used agile methodologies such as Scrum and Kanban to align and organize sprint demands. My responsibilities focused on developing key features for the factory's internal system. The project used React for the frontend and Java for the backend, including creating SQL scripts for database queries. I also applied good version control practices with Git.",
    "exp.live.skills":
      "Skills: Kanban · Oracle SQL Developer · Software development · Scrum · React.js · Operating systems · Communication · Java",

    "exp.itaipu.title": "Junior Software Developer",
    "exp.itaipu.company": "Parque Tecnológico Itaipu - Brazil",
    "exp.itaipu.period":
      "Sep 2021 - Nov 2022 · 1 year 3 months | Foz do Iguaçu, Paraná, Brazil",
    "exp.itaipu.desc":
      "I worked at Parque Tecnológico Itaipu, an innovation-focused organization. I worked in the GE.DT lab on energy projects, performing technical activities under guidance, supporting research and project development, maintaining equipment and installations, assisting with purchases and usage of machines/equipment, participating in research programs, inspecting activities, drafting projects, and creating/updating procedures and standards. I also updated documentation for a project monitoring energy production stations, generating breaker alerts based on system parameters. The system architecture was MVC, built with Java and PrimeFaces. I reported progress to Itaipu engineers in biweekly meetings.",
    "exp.itaipu.skills":
      "Skills: Kanban · PrimeFaces · Agile methodologies · Hyper-V · Software development · Scrum · JAXB · Meeting scheduling · MySQL · Testing · Minutes · Communication · Windows Server · Software implementation · Java",

    "exp.ibijus.title": "Junior Software Quality Analyst",
    "exp.ibijus.company": "IbiJus - Brazilian Institute of Law",
    "exp.ibijus.period": "May 2021 - Sep 2021 · 5 months | Remote",
    "exp.ibijus.desc":
      "I worked at IbiJus, a law-sector company offering professional courses (50–100 employees). My responsibilities focused on implementing and maintaining tests on the platform. I started by creating and documenting exploratory tests and mapping test scenarios. Then I implemented a test-fix-retest flow, managing the full cycle from bug reports (users/QA) through development fixes and validation. I also helped implement continuous integration, participated in knowledge-sharing meetings every 15 days, and used agile methodologies such as Scrum and Kanban. I supported the team with UX and helped achieve broad test coverage—from exploratory testing to automated tests—including implementing a process to map and manage bug reports.",
    "exp.ibijus.skills":
      "Skills: Git · Manual testing · Kanban · Agile methodologies · Continuous integration · Exploratory testing · DBeaver · Scrum · Test planning · JavaScript · Quality assurance · Attention to detail · Communication · Cypress · Test automation",

    "exp.intelltech.title": "Software Quality Analyst",
    "exp.intelltech.company": "IntellTech Intelligent Technologies",
    "exp.intelltech.period":
      "Apr 2019 - Jan 2021 · 1 year 10 months | Foz do Iguaçu Region, Brazil",
    "exp.intelltech.desc":
      "I worked at IntellTech, a company providing dam management solutions (a modular system with several features, 50–100 employees). As part of the QA team, I created and documented test scenarios to map system functionality, including load testing and black-box/white-box testing. I used Microsoft tools to manage and document reported bugs and created automated tests using Selenium. I participated in cross-team meetings to share system knowledge and plan sprints, and I also supported bug fixes to ensure system quality.",
    "exp.intelltech.skills":
      "Skills: Manual testing · Test execution · Kanban · C# · Agile methodologies · Load testing · Selenium testing · Selenium · Scrum · Software documentation · Test planning · Testing · Quality assurance · Attention to detail · Communication · User documentation · Test automation · Functional testing · Microsoft 365",
  },
};

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["pt-BR"];

  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (typeof value === "string") el.textContent = value;
  });

  // Atualiza estado visual dos botões
  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("lang-switch__btn--active", isActive);
  });

  try {
    localStorage.setItem("lang", lang);
  } catch {
    // ignore
  }
}

function initLanguageSwitch() {
  const saved =
    (() => {
      try {
        return localStorage.getItem("lang");
      } catch {
        return null;
      }
    })() || "pt-BR";

  applyLanguage(saved);

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang") || "pt-BR";
      applyLanguage(lang);
    });
  });
}

initLanguageSwitch();
