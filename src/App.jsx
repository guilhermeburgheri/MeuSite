import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Dados do portfólio
const dados = {
  nome: "Guilherme Burgheri",
  cargo: "Desenvolvedor Full Stack",
  descricao:
    "Sou um jovem apaixonado por programação e desenvolvimento. Sempre estudando para me aperfeiçoar e me tornar cada vez melhor, meu foco é em Back-end, mas também possuo conhecimento e projetos em Front-End. Sou uma pessoa muito tranquila, sem problemas para trabalhar em equipe, sou focado e de fácil adaptação. Qualquer curiosidade, oportunidade, dicas ou até mesmo um bate papo, estou aberto para uma conversa.",
  foto: "/FotoPerfil.jpg",
  contato: {
    email: "guilherme.burgheri@hotmail.com",
    telefone: "(11) 99942-1659",
    linkedin: "https://www.linkedin.com/in/guilherme-burgheri/",
    github: "https://github.com/guilhermeburgheri",
  },
  educacao: [
    {
      curso: "Bacharelado em Ciência da Computação",
      instituicao: "ENIAC",
      periodo: "Cursando 2025/2028",
    },
    {
      curso: "Pós-Graduação em Desenvolvimento Full Stack",
      instituicao:
        "FIAP / Faculdade de Informática e Administração Paulista",
      periodo: "2024/2025",
    },
    {
      curso: "Bacharelado em Design de Games",
      instituicao: "Universidade Anhembi Morumbi",
      periodo: "2020/2023",
    },
  ],
  experiencia: [
    {
      cargo: "Analista de Pós Venda I",
      empresa: "Empresa Teleperformance",
      periodo: "Maio 2025 - Presente",
      descricao:
        "Abertura de chamados para empresas nos cenários de Pós-venda, alinhamento do SLA para resolução do caso e preencher no sistema corretamente para os engenheiros/especialistas responsáveis seguirem com as tratativas.",
    },
    {
      cargo: "Expert em interação",
      empresa: "Empresa Teleperformance",
      periodo: "Março 2024 - Maio 2025",
      descricao:
        "Suporte técnico aos clientes nos cenários de Pós-venda, realização do acesso remoto para processos e comandos/scripts no CMD e realização de CBA para cenários mais complexos.",
    },
  ],
  projetos: [
    {
      titulo: "Projeto Pizzas",
      imagens: [
        "/projects/Pizzaria/Pizza1.png",
        "/projects/Pizzaria/Pizza2.png",
        "/projects/Pizzaria/Pizza3.png",
        "/projects/Pizzaria/Pizza4.png",
        "/projects/Pizzaria/Pizza5.png",
        "/projects/Pizzaria/Pizza6.png",
        "/projects/Pizzaria/Pizza7.png",
        "/projects/Pizzaria/Pizza8.png",
        "/projects/Pizzaria/Pizza9.png",
        "/projects/Pizzaria/Pizza10.png",
      ],
      descricao: "Projeto real para uma pizzaria local, com sistema de pedidos e painel administrativo. Desenvolvido com as tecnologias: React, Node.js, Express e SQLite3.",
    },
    {
      titulo: "Hackaton FIAP",
      imagens: [
        "/projects/Hackaton/Hackaton1.png",
        "/projects/Hackaton/Hackaton2.png",
        "/projects/Hackaton/Hackaton3.png",
        "/projects/Hackaton/Hackaton4.png",
        "/projects/Hackaton/Hackaton5.png",
        "/projects/Hackaton/Hackaton6.png",
        "/projects/Hackaton/Hackaton7.png",
        "/projects/Hackaton/Hackaton8.png",
      ],
      descricao:
        "Projeto final do Hackaton da FIAP, um sistema para auxiliar os alunos a encontrarem estágios e vagas de emprego. Desenvolvido com as tecnologias: React, Node.js, Typescript, Express, Postgres, Tailwind e Docker.",
      link: "https://www.youtube.com/watch?v=M7BHiQPskoA",
    },
    {
      titulo: "Projeto ONG animais",
      imagens: [
        "/projects/ONG/ONG1.png",
        "/projects/ONG/ONG2.png",
        "/projects/ONG/ONG3.png",
        "/projects/ONG/ONG4.png",
        "/projects/ONG/ONG5.png",
        "/projects/ONG/ONG6.png"
      ],
      descricao:
        "Site para uma ONG na qual faz o resgate, tratamente e adoção de animais abandonados. Desenvolvido com as tecnologias: HTML, CSS e JavaScript.",
    },
  ],
  habilidades: [
    { nome: "React", imagem: "/icons/react-icon.png", link: "https://reactjs.org" },
    { nome: "JavaScript", imagem: "/icons/js-icon.png", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
    { nome: "TypeScript", imagem: "/icons/ts-icon.png", link: "https://www.typescriptlang.org" },
    { nome: "CSS", imagem: "/icons/css-icon.png", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
    { nome: "Next.js", imagem: "/icons/nextjs-icon.png", link: "https://nextjs.org" },
    { nome: "Node.js", imagem: "/icons/nodejs-icon.png", link: "https://nodejs.org" },
    { nome: "C#", imagem: "/icons/csharp-icon.png", link: "https://learn.microsoft.com/pt-br/dotnet/csharp/" },
  ],
};

// Componentes 
const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">{children}</div>
);

const Header = () => {
  const [aberto, setAberto] = React.useState(false);

  const linkItem =
    "px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800";

  React.useEffect(() => {
    const close = () => setAberto(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <Container>
        <nav className="relative flex items-center justify-between gap-3 py-3">
          <NavLink
            to="/"
            className="flex items-center gap-3 flex-1 min-w-0"
            onClick={() => setAberto(false)}
          >
            <div className="min-w-0">
              <p className="text-sm text-neutral-500">{dados.cargo}</p>
              <h1 className="text-base sm:text-lg font-semibold leading-tight break-normal whitespace-normal">{dados.nome}</h1>
            </div>
          </NavLink>

          <button
            type="button"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 bg-white/70 dark:bg-neutral-900/70 shrink-0"
            onClick={() => setAberto(a => !a)}
          >
            {aberto ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811Z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" /></svg>
            )}
          </button>

          {aberto && (
            <div
              className="absolute left-0 right-0 top-full mt-2 mx-0 sm:mx-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg p-2"
              role="menu"
            >
              <div className="flex flex-col">
                <NavLink to="/" onClick={() => setAberto(false)} className={linkItem}>Home</NavLink>
                <NavLink to="/experiencia" onClick={() => setAberto(false)} className={linkItem}>Experiências</NavLink>
                <NavLink to="/projetos" onClick={() => setAberto(false)} className={linkItem}>Projetos</NavLink>
                <NavLink to="/habilidades" onClick={() => setAberto(false)} className={linkItem}>Habilidades</NavLink>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

const Footer = () => (
  <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800 py-8 text-center text-sm text-neutral-500">
    <Container>
      <p>
        © {new Date().getFullYear()} {dados.nome}. Feito com React + Tailwind.
      </p>
    </Container>
  </footer>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

// Páginas
const PagHome = () => (
  <main className="py-10">
    <Container>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-6 items-start">
          <Card className="p-6">
            <div className="flex items-center gap-6">
              <img
                src={dados.foto}
                alt="Foto de perfil"
                className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-lg ring-2 ring-neutral-200"
              />
              <div>
                <h2 className="text-xl font-semibold">{dados.nome}</h2>
                <p className="text-neutral-600 dark:text-neutral-400">{dados.cargo}</p>
                <div className="mt-3 space-y-1 text-sm">
                  <a
                    className="flex items-center gap-2 hover:underline text-sm max-w-full overflow-hidden"
                    href={`mailto:${dados.contato.email}`}
                    title={dados.contato.email}
                  >
                    <Mail size={16} />
                    <span className="break-all">{dados.contato.email}</span>
                  </a>
                  <p className="flex items-center gap-2">
                    <Phone size={16} /> {dados.contato.telefone}
                  </p>
                  <a
                    className="flex items-center gap-2 hover:underline"
                    href={dados.contato.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a
                    className="flex items-center gap-2 hover:underline"
                    href={dados.contato.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Sobre</h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{dados.descricao}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Educação</h3>
              <ul className="space-y-3">
                {dados.educacao.map((e, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-neutral-900 dark:bg-white"></div>
                    <div>
                      <p className="font-medium">{e.curso}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{e.instituicao} • {e.periodo}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </motion.div>
    </Container>
  </main>
);

const PagExperiencia = () => (
  <main className="py-10">
    <Container>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-6">Experiências</h2>
        <div className="grid gap-4">
          {dados.experiencia.map((exp, i) => (
            <Card key={i} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.cargo}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{exp.empresa}</p>
                </div>
                <p className="text-sm text-neutral-500">{exp.periodo}</p>
              </div>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">{exp.descricao}</p>
            </Card>
          ))}
        </div>
      </motion.div>
    </Container>
  </main>
);

const Carousel = ({ projeto }) => {
  const imagens = Array.isArray(projeto?.imagens)
    ? projeto.imagens
    : projeto?.imagem
      ? [projeto.imagem]
      : [];

  if (!imagens.length) {
    return (
      <div className="text-sm text-neutral-500">
        Nenhuma imagem encontrada para “{projeto?.titulo ?? 'Projeto'}”.
      </div>
    );
  }

  const { titulo, descricao, link } = projeto;
  const [idx, setIdx] = React.useState(0);
  const next = () => setIdx((p) => (p + 1) % imagens.length);
  const prev = () => setIdx((p) => (p - 1 + imagens.length) % imagens.length);

  return (
    <div className="relative">
      <div className="mb-4 text-center">
        <h4 className="text-lg font-semibold">{titulo}</h4>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 group">
        <motion.img
          key={imagens[idx]}
          src={imagens[idx]}
          alt={`${titulo ?? 'Projeto'} - imagem ${idx + 1}`}
          className="block w-full max-w-full h-auto object-contain"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <button
          onClick={prev}
          aria-label="Imagem anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center gap-4">
        {descricao && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl text-center">
            {descricao}
          </p>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm hover:underline"
          >
            Ver projeto <ExternalLink size={14} />
          </a>
        )}

        <div className="flex items-center justify-between w-full">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:opacity-90"
          >
            Anterior
          </button>

          <p className="text-xs text-neutral-500">
            {idx + 1} / {imagens.length}
          </p>

          <button
            onClick={next}
            className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:opacity-90"
          >
            Próximo
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {imagens.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === idx
                ? "bg-neutral-900 dark:bg-white"
                : "bg-neutral-300 dark:bg-neutral-700"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PagProjetos = () => (
  <main className="py-10">
    <Container>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-6">Projetos</h2>

        <div className="grid gap-6">
          {dados.projetos.map((p, i) => (
            <Card key={i} className="p-6">
              <Carousel projeto={p} />
            </Card>
          ))}
        </div>
      </motion.div>
    </Container>
  </main>
);

const SkillBubble = ({ nome, imagem, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="group flex flex-col items-center gap-3"
  >
    <div
      className="h-24 w-24 rounded-full grid place-items-center shadow-sm border border-neutral-200 dark:border-neutral-800 transition-transform group-hover:scale-105"
      style={{ backgroundColor: "#3f3f3fff" }}
    >
      <img src={imagem} alt={nome} className="h-12 w-12 object-contain" />
    </div>
    <span className="text-sm font-medium">{nome}</span>
  </a>
);

const PagHabilidades = () => (
  <main className="py-10">
    <Container>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-6">Habilidades</h2>
        <Card className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {dados.habilidades.map((h, i) => (
              <SkillBubble key={i} {...h} />
            ))}
          </div>
        </Card>
      </motion.div>
    </Container>
  </main>
);

// O App principal
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
        <Header />
        <Routes>
          <Route path="/" element={<PagHome />} />
          <Route path="/experiencia" element={<PagExperiencia />} />
          <Route path="/projetos" element={<PagProjetos />} />
          <Route path="/habilidades" element={<PagHabilidades />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
