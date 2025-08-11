import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

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
      titulo: "Projeto 1",
      imagem: "/projects/projeto1.png",
      descricao:
        "Aplicação full stack com autenticação e dashboard. (Exemplo — substitua pela sua imagem e descrição)",
      link: "#",
    },
    {
      titulo: "Projeto 2",
      imagem: "/projects/projeto2.png",
      descricao:
        "API Node.js com documentação OpenAPI e testes automatizados. (Exemplo)",
      link: "#",
    },
    {
      titulo: "Projeto 3",
      imagem: "/projects/projeto3.png",
      descricao:
        "Jogo Web com Canvas/Three.js. (Exemplo)",
      link: "#",
    },
  ],
  habilidades: [
    {
      nome: "React",
      imagem: "/icons/react-icon.png",
      link: "https://reactjs.org",
    },
    {
      nome: "JavaScript",
      imagem: "/icons/js-icon.png",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      nome: "TypeScript",
      imagem: "/icons/ts-icon.png",
      link: "https://www.typescriptlang.org",
    },
    { nome: "CSS", imagem: "/icons/css-icon.png", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
    { nome: "Next.js", imagem: "/icons/nextjs-icon.png", link: "https://nextjs.org" },
    { nome: "Node.js", imagem: "/icons/nodejs-icon.png", link: "https://nodejs.org" },
    { nome: "C#", imagem: "/icons/csharp-icon.png", link: "https://learn.microsoft.com/pt-br/dotnet/csharp/" },
  ],
};

// Componentes 
const Container = ({ children }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Header = () => {
  const linkBase =
    "px-4 py-2 rounded-xl text-sm font-medium transition hover:opacity-90";
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <Container>
        <nav className="flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={dados.foto}
              alt="Foto de perfil"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-200"
            />
            <div>
              <p className="text-sm text-neutral-500">{dados.cargo}</p>
              <h1 className="text-lg font-semibold">{dados.nome}</h1>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? "bg-neutral-900 text-white" : "bg-neutral-100 dark:bg-neutral-800"}`}>Home</NavLink>
            <NavLink to="/experiencia" className={({ isActive }) => `${linkBase} ${isActive ? "bg-neutral-900 text-white" : "bg-neutral-100 dark:bg-neutral-800"}`}>Experiências</NavLink>
            <NavLink to="/projetos" className={({ isActive }) => `${linkBase} ${isActive ? "bg-neutral-900 text-white" : "bg-neutral-100 dark:bg-neutral-800"}`}>Projetos</NavLink>
            <NavLink to="/habilidades" className={({ isActive }) => `${linkBase} ${isActive ? "bg-neutral-900 text-white" : "bg-neutral-100 dark:bg-neutral-800"}`}>Habilidades</NavLink>
          </div>
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
  <div className={`rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm ${className}`}>
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
                className="w-50 h-50 object-cover rounded-lg ring-2 ring-neutral-200"
              />
              <div>
                <h2 className="text-xl font-semibold">{dados.nome}</h2>
                <p className="text-neutral-600 dark:text-neutral-400">{dados.cargo}</p>
                <div className="mt-3 space-y-1 text-sm">
                  <a
                    className="flex items-center gap-2 hover:underline"
                    href={`mailto:${dados.contato.email}`}
                  >
                    <Mail size={16} /> {dados.contato.email}
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

const Carousel = ({ itens }) => {
  const [idx, setIdx] = React.useState(0);
  const next = () => setIdx((p) => (p + 1) % itens.length);
  const prev = () => setIdx((p) => (p - 1 + itens.length) % itens.length);
  const atual = itens[idx];
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <motion.img
          key={atual.imagem}
          src={atual.imagem}
          alt={atual.titulo}
          className="w-full h-80 object-cover"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button onClick={prev} className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:opacity-90">Anterior</button>
        <div className="text-center">
          <h4 className="font-semibold">{atual.titulo}</h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">{atual.descricao}</p>
          {atual.link && (
            <a href={atual.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm mt-2 hover:underline">
              Ver projeto <ExternalLink size={14} />
            </a>
          )}
        </div>
        <button onClick={next} className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:opacity-90">Próximo</button>
      </div>
      <div className="mt-2 flex justify-center gap-2">
        {itens.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-2 w-2 rounded-full ${i === idx ? "bg-neutral-900 dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700"}`}
          />
        ))}
      </div>
    </div>
  );
};

const PagProjetos = () => (
  <main className="py-10">
    <Container>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-6">Projetos</h2>
        <Card className="p-6">
          <Carousel itens={dados.projetos} />
        </Card>
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
    <div className="h-24 w-24 rounded-full grid place-items-center shadow-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-transform group-hover:scale-105">
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
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
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
