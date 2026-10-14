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
  MapPin,
  Menu,
  Scale,
  BriefcaseBusiness,
  ShieldCheck,
  HeartHandshake,
  Users,
  Camera,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";
import { brand, contact, whatsapp, secondWhatsapp, whatsappFor, maps, reviews } from "./lib/brand";

function WhatsAppMark({size = 16, strokeWidth = 1.8}: {size?: number; strokeWidth?: number}) { return <Phone size={size} strokeWidth={strokeWidth} aria-hidden="true" />; }

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
    title: "Direito cível", icon: Scale,
    summary: "Cuidado com o seu patrimônio, suas relações e os direitos que fazem parte da sua vida.",
    details: "A Silva & Lopes oferece orientação para prevenir conflitos e acompanhar demandas cíveis. Cada situação é analisada com atenção aos documentos, às responsabilidades envolvidas e aos caminhos possíveis para a defesa de seus direitos.",
    topics: ["Proteção do patrimônio e das relações civis", "Análise de contratos e obrigações", "Orientação para prevenção de conflitos", "Acompanhamento de demandas e reparações, quando cabíveis"],
  },
  {
    title: "Direito criminal", icon: ShieldCheck,
    summary: "Assessoria estratégica para a defesa de direitos fundamentais e a proteção da liberdade.",
    details: "Questões criminais exigem uma análise responsável e atenção a cada etapa. O escritório orienta sobre os direitos envolvidos e acompanha a demanda, com uma atuação voltada à defesa e à proteção das garantias fundamentais.",
    topics: ["Orientação e assessoria em questões criminais", "Defesa de direitos e garantias fundamentais", "Análise da demanda e da documentação", "Acompanhamento das etapas da defesa"],
  },
  {
    title: "Direito previdenciário", icon: HeartHandshake,
    summary: "Orientação para compreender benefícios previdenciários e assistenciais e os requisitos do seu pedido.",
    details: "A assessoria considera sua situação, o histórico e os documentos disponíveis para esclarecer as possibilidades relativas a benefícios. O atendimento ajuda a organizar a demanda e acompanhar as etapas necessárias, conforme as particularidades de cada caso.",
    topics: ["Orientação sobre benefícios previdenciários", "Análise de benefícios assistenciais", "Organização e avaliação de documentos", "Acompanhamento de pedidos e demandas"],
  },
  {
    title: "Direito empresarial", icon: BriefcaseBusiness,
    summary: "Apoio às decisões do seu negócio, com atenção à prevenção de riscos e às relações comerciais.",
    details: "A Silva & Lopes acompanha questões jurídicas da atividade empresarial, buscando compreender a realidade de cada negócio. A orientação preventiva auxilia na análise de documentos, contratos e decisões, com clareza sobre responsabilidades e riscos.",
    topics: ["Assessoria jurídica preventiva", "Análise de contratos e relações comerciais", "Orientação para decisões empresariais", "Acompanhamento de demandas da empresa"],
  },
  {
    title: "Direito trabalhista", icon: Users,
    summary: "Assessoria nas relações de trabalho, com atenção aos direitos, às obrigações e à prevenção de conflitos.",
    details: "As relações de trabalho envolvem direitos e responsabilidades que merecem acompanhamento cuidadoso. O escritório analisa a demanda, esclarece dúvidas e orienta sobre os próximos passos, considerando os documentos e o contexto de cada situação.",
    topics: ["Orientação sobre direitos e obrigações laborais", "Análise de documentos e relações de trabalho", "Prevenção de riscos e conflitos", "Acompanhamento de demandas trabalhistas"],
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
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
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
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory text-ink">
          <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[104px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Silva & Lopes Advocacia — início"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src={brand.logo}
                width={1774}
                height={886}
                alt={brand.businessName}
                preload
                className="h-auto w-[140px] sm:w-[180px]"
                sizes="(max-width: 640px) 140px, 180px"
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
                aria-label="WhatsApp da Silva & Lopes Advocacia"
                className="grid size-10 place-items-center rounded-full border border-ink/20 text-brand-700 transition-colors hover:border-brand-700 hover:text-brand-800"
              >
                <WhatsAppMark size={17} strokeWidth={1.7} />
              </a>
              <GlowingButton
                href={whatsapp}
                target="_blank"
                size="sm"
                className="rounded-full"
              >
                WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-ink/20 lg:hidden"
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
                className="overflow-hidden border-t border-ink/10 bg-ivory px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
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
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-xs font-semibold text-white"
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
          className="brand-hero relative isolate overflow-hidden scroll-mt-24 border-b border-ink/10 bg-brand-900"
        >
          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[710px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial={false}
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.h1
                variants={reveal}
                className="max-w-[720px] font-serif text-[2.75rem] leading-[1.06] tracking-[-0.025em] text-white sm:text-[3.5rem] lg:text-[4.2rem]"
              >
                Proteção jurídica.{" "}<br />
                <span className="text-brand-700">Segurança para seguir.</span>
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Do cível ao criminal, uma parceria para cuidar dos seus direitos. A Silva & Lopes Advocacia orienta pessoas e empresas na prevenção de conflitos e na condução de demandas, com atenção a cada situação.
              </motion.p>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-full"
                >
                  <Phone size={16} /> Fale pelo WhatsApp
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
                className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-brand-700" />
                  Formiga · Minas Gerais
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone size={15} className="text-brand-700" />
                  {brand.phone}
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
              className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-3"
            >
              <div className="relative aspect-[5/6] overflow-hidden bg-brand-800">
                <Image
                  src={brand.portrait}
                  alt="Equipe da Silva & Lopes Advocacia em material institucional sobre parceria jurídica especializada"
                  fill
                  preload
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 40vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section
          aria-label="Informações de atendimento"
          className="border-b border-ink/10 bg-white/60"
        >
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["Prevenção", "Orientação antes de decidir"],
              ["Defesa", "Atenção aos seus direitos"],
              ["Assessoria", "Cuidado com pessoas e empresas"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl text-brand-700 sm:text-[1.7rem]">
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

                description="Questões pessoais e empresariais merecem análise cuidadosa. Conheça as áreas em que podemos orientar você."
              >
                Seus direitos, nossa{" "}
                <span className="text-brand-700">atenção.</span>
              </Heading>
              <p className="max-w-[250px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma área para conhecer os temas atendidos.
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
                    <h3 className="max-w-sm font-serif text-[1.8rem] leading-tight text-ink">
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

        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24 lg:px-12">
            <figure className="mx-auto w-full max-w-[460px]">
              <div className="relative aspect-[6/5] bg-ivory p-8 sm:p-10">
                <Image src={brand.logo} alt={brand.businessName} fill sizes="(max-width: 640px) 90vw, 460px" className="object-contain p-8 sm:p-10" />
              </div>
              <figcaption className="mt-4 text-sm leading-6 text-ink-soft">Silva & Lopes Advocacia · Formiga, Minas Gerais.</figcaption>
            </figure>
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.45rem]"
              >
                Uma parceria jurídica.{" "}
                <span className="text-brand-700">Um cuidado próximo.</span>
              </motion.h2>
              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Com sede em Formiga, Minas Gerais, a Silva & Lopes Advocacia oferece assessoria jurídica a pessoas e empresas. A atuação abrange as áreas cível, criminal, previdenciária, empresarial e trabalhista, com atenção à prevenção de conflitos e à defesa de direitos.
              </motion.p>
              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Mais do que acompanhar uma demanda, a proposta é ajudar você a compreender sua situação e tomar decisões com segurança. O atendimento começa pela escuta e pela análise das informações disponíveis, para orientar os próximos passos com clareza e responsabilidade.
              </motion.p>
              <motion.a
                variants={reveal}
                href={contact}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-700"
              >
                Converse com nossa equipe{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:px-12">
            <Heading

              light
              description="Ouvir sua situação, analisar as informações e explicar os caminhos possíveis são partes de uma assessoria próxima e responsável."
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
                  "Conhecer sua situação e suas dúvidas é o ponto de partida para uma orientação jurídica pertinente.",
                ],
                [
                  "Comunicação clara",
                  "Orientações acessíveis ajudam a compreender documentos, responsabilidades e decisões.",
                ],
                [
                  "Análise cuidadosa",
                  "Cada documento e demanda recebe atenção às particularidades do caso, com foco na prevenção de riscos e na defesa de direitos.",
                ],
              ].map(([title, description]) => (
                <motion.div
                  key={title}
                  variants={reveal}
                  className="py-6 first:pt-0 sm:py-7"
                >
                  <div>
                    <h3 className="font-serif text-2xl">{title}</h3>
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
            <h2 id="questions-title" className="font-serif text-3xl leading-tight text-ink sm:text-4xl">Antes da nossa primeira conversa.</h2>
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {[
                ["Como funciona o primeiro contato?", "Envie uma mensagem para um dos nossos WhatsApps e conte brevemente sua necessidade. A equipe orientará sobre disponibilidade, agendamento e informações iniciais."],
                ["Onde fica o escritório?", "Estamos na Rua Campos Altos, nº 276, em Formiga, Minas Gerais. Entre em contato pelo WhatsApp para combinar sua visita e consultar o formato de atendimento adequado à sua demanda."],
                ["Quais documentos devo separar?", "Separe os documentos relacionados à sua questão, como contratos, comunicações ou documentos de benefícios. A equipe indicará o que será necessário conforme a análise inicial."],
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
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <Heading

              description="Conheça as experiências compartilhadas no Google por quem foi atendido."
            >
              Experiências compartilhadas.{" "}
              <span className="text-brand-700">Conheça no Google.</span>
            </Heading>
            <div className="relative flex min-h-[245px] flex-col justify-between overflow-hidden border border-ink/10 bg-ivory p-7 sm:p-9">

              <div className="relative flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-serif text-2xl text-ink">
                    {brand.googleReviewCount} avaliações no Google
                  </p>
                </div>
              </div>
              <div className="relative mt-8 flex flex-wrap items-end justify-between gap-5">
                <p className="max-w-xs text-[13px] leading-6 text-ink-soft">
                  Conheça os relatos sobre a Silva & Lopes Advocacia. A quantidade de avaliações pode mudar; consulte o perfil para informações atualizadas.
                </p>
                <a
                  href={reviews}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Ver avaliações <ArrowUpRight size={14} />
                </a>
              </div>
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

                description="Sede em Formiga, Minas Gerais. Converse com nossa equipe pelo WhatsApp para consultar a disponibilidade e combinar seu atendimento."
              >
                Um primeiro contato com{" "}
                <span className="text-brand-700">tranquilidade.</span>
              </Heading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-full"
                >
                  <Phone size={16} /> Fale pelo WhatsApp
                </GlowingButton>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-brand-700 hover:text-brand-800"><WhatsAppMark size={16} /> WhatsApp principal: {brand.phone}</a>
                <a href={secondWhatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-brand-700 hover:text-brand-800"><WhatsAppMark size={16} /> Outro WhatsApp: {brand.secondPhone}</a>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 py-2 text-sm text-brand-700 hover:text-brand-800"><Camera size={16} /> {brand.instagramHandle}</a>
              </div>
            </div>
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-1 w-28 bg-brand-600" />
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ink">Nosso escritório em Formiga</h3>
                </div>
              </div>
              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
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
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
                Seus direitos merecem uma conversa com atenção.
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

        <footer className="bg-brand-50 px-5 py-12 text-ink sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <div className="inline-flex px-3 py-2">
                <Image
                  src={brand.logo}
                  width={1774}
                  height={886}
                  alt={brand.businessName}
                  className="h-auto w-[200px]"
                  sizes="200px"
                />
              </div>
              <p className="mt-4 max-w-xs text-xs leading-6 text-ink-soft">
                Advocacia e assessoria jurídica em Formiga, MG. Cuidado com seus direitos e com as decisões do seu negócio.
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
                  href={contact}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <WhatsAppMark size={14} /> WhatsApp: {brand.phone}
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
                <a href={secondWhatsapp} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-2"><WhatsAppMark size={14} /> WhatsApp: {brand.secondPhone}</a>
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
                  className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink"
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
                  className="mt-8 rounded-full"
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
