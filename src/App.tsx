import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import heroImg from "./assets/dra-hero.jpg";
import sobreImg from "./assets/dra-sobre.jpg";
import baGluteo from "./assets/ba-gluteo.jpg";
import baGaleria from "./assets/ba-galeria.jpg";

const WHATS = "5545991586092";
const MSG = encodeURIComponent(
  "Oi! Vim pelo site e quero agendar minha avaliação com a Dra. Jenniffer."
);
const WA = `https://wa.me/${WHATS}?text=${MSG}`;

const EASE = [0.22, 0.61, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  id,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      className={className}
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" strokeWidth="1.8">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const Pin = () => (
  <svg viewBox="0 0 24 24" strokeWidth="1.7">
    <path d="M12 21s-7-6.4-7-11a7 7 0 0 1 14 0c0 4.6-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const WaIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.2s-.7 1-.9 1.1c-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4Z" />
    <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.8.9.9-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
  </svg>
);

const PROCEDIMENTOS: [string, string][] = [
  ["Harmonização Facial", "Facial"],
  ["Botox", "Facial"],
  ["Preenchimento Labial e Facial", "Facial"],
  ["Bioestimuladores de Colágeno", "Facial · Corporal"],
  ["Fios de PDO", "Facial"],
  ["Skinbooster", "Facial"],
  ["Peeling Coreano", "Facial"],
  ["Peptídeos de Cobre", "Facial"],
  ["Enzimas Recombinantes", "Corporal"],
  ["Acupuntura Estética e Terapêutica", "Bem-estar"],
];

const FAQS: [string, string][] = [
  [
    "Como funciona a avaliação?",
    "Você pode fazer a avaliação online, gratuitamente, ou presencial em uma das unidades por R$100 — valor 100% abatido caso inicie o seu protocolo. Em ambas, entendemos seu objetivo antes de indicar qualquer procedimento.",
  ],
  [
    "A harmonização glútea é cirúrgica?",
    "Não. É um procedimento estético sem cirurgia e sem afastamento da rotina, focado em realçar o contorno e a projeção do glúteo de forma natural. O plano ideal é definido individualmente na avaliação.",
  ],
  [
    "Em quais cidades vocês atendem?",
    "Temos duas unidades em Santa Catarina: Itajaí (Centro Empresarial Marcos Konder) e Balneário Camboriú (Rua Julieta Lins, 330).",
  ],
  [
    "Quais outros procedimentos a Dra. realiza?",
    "Além da harmonização glútea, o portfólio inclui harmonização facial, botox, preenchimentos, bioestimuladores de colágeno, fios de PDO, skinbooster, peeling coreano, peptídeos de cobre, enzimas recombinantes e acupuntura estética e terapêutica.",
  ],
];

const MARCAS = [
  "Rennova",
  "Evofill",
  "Sofiderm",
  "Radiesse",
  "Sculptra",
  "Ellansé",
  "Allergan",
  "Galderma",
];

function Marquee() {
  const row = [...MARCAS, ...MARCAS];
  return (
    <section className="marquee-band">
      <p className="marquee-label">
        Trabalhamos com as principais marcas do mercado
      </p>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"qa" + (open ? " open" : "")}>
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {q}
        <span className="pm" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ margin: "0 0 22px", color: "var(--espresso-soft)", fontSize: 16, maxWidth: "64ch" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <>
      <header>
        <div className="wrap navrow">
          <div className="brand">
            Dra. Jenniffer Miotto<span>Estética Avançada</span>
          </div>
          <nav className="links">
            <a href="#gluteo">Harmonização Glútea</a>
            <a href="#procedimentos">Procedimentos</a>
            <a href="#avaliacao">Avaliação</a>
            <a href="#unidades">Unidades</a>
            <a href="#sobre">A Dra. Jenniffer</a>
          </nav>
          <motion.a
            className="btn btn-gold"
            href="#avaliacao"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Agendar avaliação
          </motion.a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <motion.div
          className="hero-photo"
          style={{ backgroundImage: `url(${heroImg})`, y: photoY }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
        />
        <div className="wrap">
          <motion.div
            className="hero-copy"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span className="eyebrow" variants={item}>
              Itajaí &amp; Balneário Camboriú
            </motion.span>
            <motion.h1 variants={item}>
              O glúteo dos seus sonhos, com <em>ciência e delicadeza</em>.
            </motion.h1>
            <motion.p className="lead" variants={item}>
              Harmonização glútea de alto padrão — contorno, projeção e realce
              natural das suas curvas, conduzido pessoalmente pela Dra. Jenniffer
              Miotto.
            </motion.p>
            <motion.div className="hero-cta" variants={item}>
              <motion.a
                className="btn btn-gold"
                href="#avaliacao"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Agendar minha avaliação <Arrow />
              </motion.a>
              <motion.a
                className="btn btn-ghost"
                href="#gluteo"
                whileHover={{ y: -2 }}
              >
                Conhecer o procedimento
              </motion.a>
            </motion.div>
            <motion.div className="hero-meta" variants={item}>
              <div>
                <span className="dot" /> <b>Avaliação online</b>&nbsp;gratuita
              </div>
              <div>
                <span className="dot" /> Resultado <b>natural</b>
              </div>
              <div>
                <span className="dot" /> <b>2 unidades</b>&nbsp;em SC
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* HARMONIZAÇÃO GLÚTEA */}
      <section className="band ink" id="gluteo">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">O carro-chefe</span>
            <h2>Harmonização Glútea</h2>
            <p>
              O procedimento que realça o contorno e a projeção do seu glúteo,
              respeitando a sua anatomia — para curvas mais harmônicas, com
              resultado natural e feito sob medida.
            </p>
          </Reveal>
          <Reveal className="sig">
            <div
              className="sig-visual"
              style={{ backgroundImage: `url(${baGluteo})` }}
            >
              <span className="sig-tag">Antes &amp; depois · resultado real</span>
            </div>
            <div className="sig-body">
              <div className="sig-kicker">Assinatura da clínica</div>
              <h3>
                Realce as suas
                <br />
                curvas naturais.
              </h3>
              <p className="sig-desc">
                Cada plano é individualizado após a avaliação. O foco é valorizar
                o que já é seu — com técnica, segurança e um resultado que
                respeita a sua naturalidade.
              </p>
              <ul className="sig-list">
                <li>
                  <Check /> Contorno e projeção mais harmônicos
                </li>
                <li>
                  <Check /> Estímulo natural de colágeno
                </li>
                <li>
                  <Check /> Sem cirurgia e sem afastamento da rotina
                </li>
                <li>
                  <Check /> Protocolo individualizado, do plano ao acompanhamento
                </li>
              </ul>
              <div className="sig-foot">
                <p className="note">
                  O plano e o investimento são definidos sob medida na sua
                  avaliação. Comece pela avaliação online — é gratuita.
                </p>
                <motion.a
                  className="btn btn-ghost"
                  href="#avaliacao"
                  style={{ borderColor: "rgba(246,241,232,.32)", color: "var(--ivory)" }}
                  whileHover={{ y: -2 }}
                >
                  Começar pela avaliação <Arrow />
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AVALIAÇÃO */}
      <section className="band alt" id="avaliacao">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Como começar</span>
            <h2>Sua avaliação, do seu jeito</h2>
            <p>
              Escolha como prefere dar o primeiro passo. Toda avaliação é
              individual — a Dra. entende seu objetivo antes de indicar qualquer
              protocolo.
            </p>
          </Reveal>
          <div className="aval">
            <Reveal delay={0.05}>
              <motion.div className="aval-card" whileHover={{ y: -4 }}>
                <div className="tier">Online</div>
                <h3>Avaliação Online</h3>
                <div className="p">Gratuita</div>
                <p className="d">
                  Uma conversa inicial sem sair de casa, para entender seu
                  objetivo e tirar as primeiras dúvidas com a nossa equipe.
                </p>
              </motion.div>
            </Reveal>
            <Reveal delay={0.15}>
              <motion.div className="aval-card feat" whileHover={{ y: -4 }}>
                <span className="badge">Recomendada</span>
                <div className="tier">Presencial</div>
                <h3>Avaliação Presencial</h3>
                <div className="p">Na clínica</div>
                <p className="d">
                  Avaliação completa e presencial em uma das unidades, com toda a
                  atenção da nossa equipe.
                </p>
              </motion.div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <motion.a
                className="btn btn-gold"
                href={WA}
                target="_blank"
                rel="noopener"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Falar no WhatsApp e agendar <Arrow />
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCEDIMENTOS */}
      <section className="band" id="procedimentos">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Estética avançada</span>
            <h2>Muito além do glúteo</h2>
            <p>
              Um portfólio completo de procedimentos faciais e corporais, sempre
              com a mesma assinatura: técnica, segurança e naturalidade.
            </p>
          </Reveal>
          <div className="proc-grid">
            {PROCEDIMENTOS.map(([nome, tag], i) => (
              <Reveal key={nome} delay={(i % 2) * 0.06}>
                <div className="proc">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nm">{nome}</span>
                  <span className="tl">{tag}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UNIDADES */}
      <section className="band ink" id="unidades">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Onde te atendemos</span>
            <h2>Duas unidades, o mesmo cuidado</h2>
          </Reveal>
          <div className="units">
            <Reveal delay={0.05}>
              <div className="unit">
                <div className="pin">
                  <Pin /> Itajaí
                </div>
                <div className="city">Centro Empresarial Marcos Konder</div>
                <div className="addr">
                  Av. Cel. Marcos Konder, 805 — Sala 1002
                  <br />
                  Centro, Itajaí — SC
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="unit">
                <div className="pin">
                  <Pin /> Balneário Camboriú
                </div>
                <div className="city">Unidade Balneário</div>
                <div className="addr">
                  Rua Julieta Lins, 330
                  <br />
                  Balneário Camboriú — SC
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="band alt" id="sobre">
        <div className="wrap auth">
          <Reveal>
            <div
              className="auth-visual"
              style={{ backgroundImage: `url(${sobreImg})` }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Quem vai cuidar de você</span>
            <h2>Dra. Jenniffer Miotto</h2>
            <p>
              Especialista em estética avançada, a Dra. Jenniffer conduz
              pessoalmente cada avaliação e protocolo. Sua marca é unir técnica de
              ponta a um olhar atento para a naturalidade e o bem-estar de cada
              paciente.
            </p>
            <p>
              Do glúteo à face, o compromisso é o mesmo: resultado real, seguro e
              feito sob medida para você — nunca um padrão de prateleira.
            </p>
            <div className="crm">
              Registro profissional&nbsp;·&nbsp;<b>CRBM 875/PR</b>
            </div>
            <div className="sign">Dra. Jenniffer Miotto</div>
          </Reveal>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="band" id="resultados">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Resultados reais</span>
            <h2>O antes e depois fala por si</h2>
            <p>
              Resultados reais de pacientes da Dra. Jenniffer Miotto. Cada plano é
              individual e os resultados variam de pessoa para pessoa.
            </p>
          </Reveal>
          <Reveal>
            <div className="ba-wrap">
              <div className="ba">
                <img
                  loading="lazy"
                  alt="Antes e depois de harmonização glútea — Dra. Jenniffer Miotto"
                  src={baGaleria}
                />
              </div>
              <p className="ba-note">
                Imagens reais de pacientes, divulgadas com autorização.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="band alt">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow center">Dúvidas frequentes</span>
            <h2>Antes de agendar</h2>
          </Reveal>
          <Reveal className="faq">
            {FAQS.map(([q, a]) => (
              <Faq key={q} q={q} a={a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* FINAL */}
      <section className="final">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow center">Seu próximo passo</span>
            <h2>
              Pronta para se sentir ainda mais <em>você</em>?
            </h2>
            <p>
              Comece pela avaliação online gratuita e descubra o protocolo ideal
              para o seu objetivo.
            </p>
            <div className="hero-cta">
              <motion.a
                className="btn btn-gold"
                href={WA}
                target="_blank"
                rel="noopener"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Agendar no WhatsApp <Arrow />
              </motion.a>
              <motion.a
                className="btn btn-ghost"
                href="#procedimentos"
                whileHover={{ y: -2 }}
              >
                Ver todos os procedimentos
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-row">
            <div>
              <div className="brand">
                Dra. Jenniffer Miotto<span>Estética Avançada</span>
              </div>
              <p
                style={{
                  maxWidth: "26em",
                  margin: "18px 0 0",
                  color: "rgba(246,241,232,.6)",
                  fontSize: 14,
                }}
              >
                Harmonização glútea, facial e corporal com técnica e
                naturalidade. Itajaí &amp; Balneário Camboriú.
              </p>
            </div>
            <div className="foot-links">
              <div className="foot-col">
                <b>Navegar</b>
                <a href="#gluteo">Harmonização Glútea</a>
                <a href="#procedimentos">Procedimentos</a>
                <a href="#avaliacao">Avaliação</a>
                <a href="#unidades">Unidades</a>
              </div>
              <div className="foot-col">
                <b>Contato</b>
                <a href={WA} target="_blank" rel="noopener">
                  WhatsApp
                </a>
                <a href="#avaliacao">Agendar avaliação</a>
              </div>
            </div>
          </div>
          <div className="foot-base">
            <span>© Dra. Jenniffer Miotto · Estética Avançada · CRBM 875/PR</span>
            <span>Feito por Nexus Health</span>
          </div>
        </div>
      </footer>

      <motion.a
        className="fab"
        href={WA}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: EASE }}
        whileHover={{ scale: 1.05 }}
      >
        <WaIcon />
        WhatsApp
      </motion.a>
    </>
  );
}
