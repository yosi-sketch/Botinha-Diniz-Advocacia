"use client";

import Image from "next/image";
import { useEffect, useState, useRef, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  Scale,
  ShieldCheck,
  Plane,
  HeartHandshake,
  Accessibility,
  ScrollText,
  Camera,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";
import { brand, testimonials, contact, whatsapp, telephone, whatsappFor, maps, reviews } from "./lib/brand";

function WhatsAppMark({size = 16, strokeWidth = 1.8}: {size?: number; strokeWidth?: number}) { return <MessageCircle size={size} strokeWidth={strokeWidth} aria-hidden="true" />; }

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

const areas = [
  {
    title: "Direito Previdenciário", icon: ScrollText,
    summary: "Orientação sobre aposentadorias e benefícios do INSS, com atenção à sua trajetória e aos seus documentos.",
    details: "Cada história de trabalho e contribuição merece uma análise individual. O escritório orienta sobre aposentadorias, salário-maternidade, pensão por morte e benefícios por incapacidade, desde a organização dos documentos até o acompanhamento da demanda.",
    topics: ["Aposentadorias e análise de contribuições", "Benefícios por incapacidade e auxílio-acidente", "Salário-maternidade e pensão por morte", "Análise de benefícios negados pelo INSS"],
  },
  {
    title: "Benefícios assistenciais", icon: Accessibility,
    summary: "Atenção às famílias que precisam de orientação sobre o BPC/LOAS para pessoas idosas ou com deficiência.",
    details: "O atendimento considera a realidade de cada família e os documentos disponíveis para analisar uma solicitação de benefício assistencial. A equipe esclarece as etapas, orienta a organização das informações e avalia os caminhos possíveis diante de uma negativa.",
    topics: ["Análise individual para o BPC/LOAS", "Orientação a pessoas idosas e com deficiência", "Organização de documentos e relatórios", "Acompanhamento de pedidos e negativas"],
  },
  {
    title: "Direito do Consumidor", icon: ShieldCheck,
    summary: "Análise de cobranças indevidas, problemas com produtos e serviços e situações que possam gerar reparação de danos.",
    details: "Problemas nas relações de consumo exigem atenção aos fatos, contratos e registros de atendimento. O escritório analisa a situação para orientar sobre as medidas adequadas, seja na busca de uma solução extrajudicial, seja no acompanhamento de uma demanda.",
    topics: ["Cobranças e negativações indevidas", "Problemas com produtos e serviços", "Análise de danos materiais e morais", "Orientação e acompanhamento de demandas"],
  },
  {
    title: "Direito Aéreo", icon: Plane,
    summary: "Orientação para passageiros em casos de voos atrasados ou cancelados, problemas com bagagem e perda de conexão.",
    details: "Quando uma viagem não acontece como o planejado, a análise dos comprovantes e dos registros da ocorrência ajuda a compreender os próximos passos. O escritório acompanha demandas envolvendo companhias aéreas e avalia a possibilidade de reparação conforme cada caso.",
    topics: ["Atrasos, cancelamentos e perda de conexão", "Bagagem extraviada, danificada ou atrasada", "Negativas de reembolso", "Análise dos prejuízos e da documentação da viagem"],
  },
];

function Heading({
  children,
  description,
  light = false,
}: {
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">

      <h2
        className={
          light
            ? "font-display text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-display text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-brand-100"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] =
    useState<(typeof areas)[number] | null>(null);

  const dialogRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!activeArea) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const content = contentRef.current;
    content?.setAttribute("inert", "");
    const timer = window.setTimeout(() => dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus(), 0);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
      if (event.key !== "Tab") return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
      content?.removeAttribute("inert");
      previousFocus?.focus();
    };
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-ivory text-ink">
        <div ref={contentRef}>
        <a href="#inicio" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-white focus:p-4 focus:text-ink">Ir para o conteúdo</a>
        <header className="brand-header sticky top-0 z-40 border-b border-brand-300/20 bg-brand-950 text-brand-100">
          <div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[120px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Raynne Lopes — início"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src={brand.logo}
                width={1774}
                height={887}
                alt={brand.businessName}
                preload
                className="h-auto w-[176px] sm:w-[208px]"
                sizes="(max-width: 640px) 176px, 208px"
              />
            </a>
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#atuacao">
                Atuação
              </a>
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={contact}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Raynne Lopes"
                className="grid size-10 place-items-center rounded-full border border-brand-300/40 text-brand-200 transition-colors hover:border-brand-300 hover:text-brand-300"
              >
                <WhatsAppMark size={17} strokeWidth={1.7} />
              </a>
              <GlowingButton
                href={whatsapp}
                target="_blank"
                size="sm"
                className="rounded-sm"
              >
                WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-sm border border-brand-300/40 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="absolute inset-x-0 top-full overflow-hidden border-b border-ink/10 bg-ivory px-6 lg:hidden"
              >
                <div className="mx-auto flex max-h-[calc(100dvh-104px)] max-w-7xl flex-col gap-1 overflow-y-auto py-4 sm:max-h-[calc(100dvh-120px)]">
                  {[
                    ["Início", "#inicio"],
                    ["Atuação", "#atuacao"],
                    ["Sobre", "#sobre"],
                    ["Avaliações no Google", "#avaliacoes"],
                    ["Contato", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-ink-soft transition-colors hover:text-brand-700"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-300 px-5 py-3.5 text-xs font-semibold text-brand-950"
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <Phone size={15} /> WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <section
          id="inicio"
          className="brand-hero relative isolate overflow-hidden scroll-mt-24 border-b border-ink/10 bg-brand-950"
        >
          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial={false}
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.h1
                variants={reveal}
                className="max-w-[720px] font-display text-[2.4rem] leading-[1.16] tracking-[-0.025em] text-ivory sm:text-[3.3rem] lg:text-[3.65rem]"
              >
                Seus direitos merecem{" "}
                <span className="text-brand-300">uma atenção especial.</span>
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Benefícios do INSS, direitos do consumidor e problemas com viagens aéreas. Raynne Lopes e sua equipe oferecem orientação clara e cuidado com cada detalhe da sua história.
              </motion.p>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-sm"
                >
                  <WhatsAppMark size={17} /> Fale com a Dra. Raynne
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-ink transition-colors hover:text-brand-700"
                >
                  Áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-5 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-brand-700" />
                  {brand.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <HeartHandshake size={15} className="text-brand-700" />
                  Atendimento com atenção e sigilo
                </span>
                <a href="#avaliacoes" className="inline-flex items-center gap-2 py-2 text-sm text-brand-200 underline underline-offset-4">
                  <Star size={15} aria-hidden="true" /> Avaliações no Google
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[408px] lg:ml-auto lg:mr-0"
            >
              <figure className="hero-portrait">
              <div className="relative aspect-[614/803] overflow-hidden bg-brand-900">
                <Image
                  src={brand.portrait}
                  alt="Raynne Lopes, advogada em Sete Lagoas, com terno vinho e camisa branca"
                  fill
                  preload
                  sizes="(max-width: 450px) 90vw, 408px"
                  className="object-contain"
                />
              </div>
              <figcaption className="relative flex items-center justify-between gap-4 bg-brand-950 pb-1 pt-5 text-brand-100">
                <span className="font-display text-lg text-brand-300">Raynne Lopes</span>
                <span className="text-[10px] uppercase tracking-[0.12em]">Advogada</span>
              </figcaption>
              </figure>
            </motion.div>
          </div>
        </section>

        <section
          aria-label="Informações de atendimento"
          className="border-b border-ink/10 bg-white/60"
        >
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["Escuta", "Atenção à sua história"],
              ["Sigilo", "Respeito à sua história"],
              ["Presença", "Orientação em cada etapa"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-display text-2xl text-brand-700 sm:text-[1.7rem]">
                  {value}
                </span>
                <span className="max-w-[145px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading

                description="Do benefício do INSS aos imprevistos de uma viagem, orientação jurídica para momentos que importam na sua vida."
              >
                Cuidado com o que é{" "}
                <span className="text-brand-700">seu por direito.</span>
              </Heading>
              <p className="max-w-[250px] pb-1 text-xs leading-6 text-ink-soft">
                Conheça nossas áreas de atuação e converse com a equipe sobre a sua situação.
              </p>
            </motion.div>
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 divide-y divide-ink/15 border-y border-ink/15"
            >
              {areas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.title}
                    variants={reveal}
                    className="group grid items-start gap-5 py-8 sm:grid-cols-[48px_1fr_auto] sm:gap-7 sm:py-9"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                        <Icon size={21} strokeWidth={1.5} />
                      </span>
                    </div>
                    <div>
                    <h3 className="max-w-xl font-display text-[1.55rem] sm:text-[1.8rem] leading-tight text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[13px] leading-6 text-ink-soft">
                      {area.summary}
                    </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      aria-haspopup="dialog"
                      aria-label={`Saiba mais sobre ${area.title.toLowerCase()}`}
                      className="group/link inline-flex min-h-11 w-fit items-center gap-2 text-xs font-semibold text-brand-800 hover:text-brand-700 sm:self-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
                    >
                      Saiba mais{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
            <figure className="mx-auto w-full max-w-[420px] bg-brand-950 px-7 py-12 sm:px-10 sm:py-16 lg:ml-0">
              <Image src={brand.logo} alt={brand.businessName} width={1774} height={887} sizes="(max-width: 450px) 80vw, 340px" className="h-auto w-full" />
              <figcaption className="mt-10 border-t border-brand-300/25 pt-6 text-center text-xs leading-6 text-brand-100">Direito Previdenciário, do Consumidor e Aéreo.<br />Sete Lagoas, Minas Gerais.</figcaption>
            </figure>
            <div>
              <h2 className="max-w-2xl font-display text-4xl leading-[1.16] text-ink sm:text-5xl">Ao seu lado, com técnica e <span className="text-brand-700">sensibilidade.</span></h2>
              <p className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft">Raynne Lopes é advogada e professora de Prática Previdenciária. À frente do escritório Raynne Lopes Advocacia Especializada, em Sete Lagoas, une sua atuação em benefícios do INSS à defesa dos direitos de consumidores e passageiros aéreos.</p>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft">Por trás de cada pedido, existe uma história. Por isso, o atendimento parte da escuta e da análise cuidadosa dos documentos, com explicações acessíveis sobre as possibilidades e os próximos passos de cada demanda.</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-y border-ink/15 py-5 text-sm text-brand-800">
                <span className="inline-flex items-center gap-2"><Scale size={18} strokeWidth={1.5} /> Advocacia especializada</span>
                <span className="inline-flex items-center gap-2"><HeartHandshake size={18} strokeWidth={1.5} /> Atenção individual</span>
              </div>
              <a href={contact} target="_blank" rel="noopener noreferrer" className="group mt-7 inline-flex min-h-11 items-center gap-2 border-b border-brand-700/40 py-2 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-700">Converse com a nossa equipe <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:px-12">
            <Heading

              light
              description="Buscar um benefício ou lidar com um direito desrespeitado pode trazer insegurança. Entender as possibilidades é o primeiro passo para decidir com tranquilidade."
            >
              Clareza para compreender cada{" "}
              <span className="text-brand-200">etapa.</span>
            </Heading>
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "Escuta e compreensão",
                  "Um atendimento que começa ouvindo sua história, suas dúvidas e as circunstâncias do caso.",
                ],
                [
                  "Comunicação clara",
                  "Explicações acessíveis sobre a situação, os caminhos possíveis e o andamento da demanda.",
                ],
                [
                  "Análise cuidadosa",
                  "Atenção aos fatos e aos documentos, com respeito ao sigilo e às particularidades de cada caso.",
                ],
              ].map(([title, description]) => (
                <motion.div
                  key={title}
                  variants={reveal}
                  className="py-6 first:pt-0 sm:py-7"
                >
                  <div>
                    <h3 className="font-display text-2xl">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-brand-100">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-brand-50 py-20 sm:py-24" aria-labelledby="questions-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <h2 id="questions-title" className="font-display text-3xl leading-tight text-ink sm:text-4xl">Antes da nossa primeira conversa.</h2>
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {[
                ["Como funciona o primeiro contato?", `Envie uma mensagem pelo WhatsApp ou ligue para ${brand.phone}. Conte brevemente sua situação para receber informações sobre o atendimento e os documentos iniciais necessários.`],
                ["Onde fica o escritório?", `Estamos na ${brand.address}. Entre em contato com a equipe para combinar sua visita.`],
                ["Meu benefício foi negado. Posso conversar com a equipe?", "Sim. Informe qual benefício você solicitou e separe a resposta recebida do INSS, caso tenha acesso a ela. A equipe poderá explicar como funciona a análise individual da sua situação."],
                ["Tive um problema com meu voo. Como iniciar o atendimento?", "Conte o que aconteceu pelo WhatsApp e informe se possui passagens, comprovantes de despesas e registros de atendimento da companhia aérea. A equipe indicará os documentos necessários para analisar o caso."],
              ].map(([question, answer]) => (
                <details key={question} className="group py-6">
                  <summary className="cursor-pointer text-base font-semibold text-ink marker:text-brand-700">{question}</summary>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <Heading description="Relatos de quem conhece o atendimento da Dra. Raynne e de sua equipe, publicados no Google.">
                Confiança que se{" "}
                <span className="text-brand-700">compartilha.</span>
              </Heading>
              <div className="flex shrink-0 items-center gap-4 text-brand-700">
                <p className="font-display text-5xl leading-none tabular-nums" aria-label={`Nota ${brand.googleRating} de 5 no Google`}>
                  {brand.googleRating}
                </p>
                <div>
                  <span className="flex gap-1" role="img" aria-label={`Avaliação média de ${brand.googleRating} de 5 estrelas`}>
                    {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={16} fill="currentColor" aria-hidden="true" />)}
                  </span>
                  <p className="mt-2 text-xs text-ink-soft">{brand.googleReviewCount} avaliações no Google</p>
                </div>
              </div>
            </div>
            <div className="mt-12 grid divide-y divide-ink/15 border-y border-ink/15 md:grid-cols-3 md:divide-x md:divide-y-0">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="flex flex-col justify-between gap-7 py-8 md:px-7 md:py-10 md:first:pl-0 md:last:pr-0">
                  <blockquote className="text-[15px] leading-7 text-ink">
                    <p>“{testimonial.text}”</p>
                  </blockquote>
                  <figcaption>
                    <p className="font-display text-xl text-brand-700">{testimonial.name}</p>
                    <p className="mt-1 text-xs text-ink-soft">Trecho de avaliação no Google</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="max-w-xl text-xs leading-6 text-ink-soft">
                Trechos de avaliações publicadas no Google. Nota e quantidade conforme o material fornecido; consulte o Google Maps para informações atualizadas.
              </p>
              <a
                href={reviews}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
              >
                Consultar no Google Maps <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </section>

        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading

                description="Conte sua história para a nossa equipe e saiba como iniciar o atendimento. Converse sobre benefícios do INSS, relações de consumo ou problemas com viagens aéreas."
              >
                Um primeiro contato com{" "}
                <span className="text-brand-700">tranquilidade.</span>
              </Heading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-sm"
                >
                  <WhatsAppMark size={17} /> Fale com a Dra. Raynne
                </GlowingButton>
                <a href={telephone} className="inline-flex min-h-11 items-center gap-2 text-sm text-brand-700 hover:text-brand-800"><Phone size={16} /> Ligue: {brand.phone}</a>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 py-2 text-sm text-brand-700 hover:text-brand-800"><Camera size={16} /> {brand.instagramHandle}</a>
                <a href={brand.threads} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 py-2 text-sm text-brand-700 hover:text-brand-800"><MessageCircle size={16} /> Acompanhe também no Threads <ArrowUpRight size={14} /></a>
              </div>
            </div>
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-1 w-28 bg-brand-600" />
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">Escritório em Sete Lagoas</h3>
                </div>
              </div>
              <p className="mt-6 text-sm font-semibold text-brand-700">{brand.businessName}</p>
              <address className="mt-2 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                {brand.address}
              </address>
              <div className="my-7 h-px bg-ink/10" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Consulte a localização antes de sua visita.
                </p>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Abrir no mapa <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-linen px-5 py-14 text-ink sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                O primeiro passo é conversar.
              </h2>
            </div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-800 transition-transform hover:-translate-y-0.5"
            >
              Fale pelo WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <footer className="brand-footer bg-brand-950 px-5 py-12 text-brand-100 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <div className="inline-flex px-3 py-2">
                <Image
                  src={brand.logo}
                  width={1774}
                  height={887}
                  alt={brand.businessName}
                  className="h-auto w-[200px]"
                  sizes="200px"
                />
              </div>
              <p className="mt-4 max-w-xs text-xs leading-6 text-ink-soft">
                Direito Previdenciário, do Consumidor e Aéreo em Sete Lagoas, MG. Orientação clara e atenção à sua história.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-ink-soft">
                <a className="footer-link" href="#atuacao">
                  Áreas de atuação
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre o escritório
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Perfil no Google
                </a>
                <a className="footer-link" href="#contato">
                  Contato e endereço
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                Informações
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-ink-soft">
                <a
                  href={telephone}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={14} /> {brand.phone}
                </a>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {brand.address}
                </a>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-2"><Camera size={14} /> {brand.instagramHandle}</a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-ink/15 pt-5 text-[10px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {brand.businessName}. Todos os direitos
              reservados.
            </p>
            <p>
              Conteúdo informativo. Cada situação deve ser analisada
              individualmente.
            </p>
          </div>
        </footer>

        </div>
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90dvh] w-full overflow-y-auto rounded-t-2xl bg-ivory p-7 shadow-card sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:text-brand-700"
                >
                  <X size={18} />
                </button>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-display text-[1.7rem] leading-tight text-ink sm:text-3xl"
                >
                  {activeArea.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>
                <ul className="mt-6 space-y-3">
                  {activeArea.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-sm leading-6 text-ink"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-700" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <GlowingButton
                  href={whatsappFor(activeArea.title.toLowerCase())}
                  target="_blank"
                  size="md"
                  className="mt-8 w-full rounded-sm sm:w-auto"
                >
                  <Phone size={15} /> Conversar sobre esta área
                  <ArrowUpRight size={15} />
                </GlowingButton>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
