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
  Gavel,
  Clock3,
  LockKeyhole,
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
    title: "Defesa criminal", icon: ShieldCheck,
    summary: "Acompanhamento de processos criminais, com atenção aos fatos, às provas e aos seus direitos.",
    details: "A defesa criminal começa pela compreensão da situação e pela análise dos documentos disponíveis. O acompanhamento envolve orientação sobre o processo, preparação da defesa e comunicação sobre cada etapa, respeitando as particularidades do caso.",
    topics: ["Análise da situação e dos documentos", "Orientação ao longo do processo criminal", "Preparação e acompanhamento da defesa", "Atenção aos direitos e garantias individuais"],
  },
  {
    title: "Investigação e inquérito", icon: ScrollText,
    summary: "Orientação desde os primeiros esclarecimentos, intimações e atos da investigação.",
    details: "Receber uma intimação ou tomar conhecimento de uma investigação pode gerar dúvidas. A orientação jurídica ajuda a compreender o contexto, organizar as informações e acompanhar os atos pertinentes à apuração, com cuidado e confidencialidade.",
    topics: ["Análise de intimações e documentos", "Orientação para depoimentos", "Acompanhamento de inquéritos", "Esclarecimento das etapas da investigação"],
  },
  {
    title: "Prisão e audiência de custódia", icon: LockKeyhole,
    summary: "Atendimento para situações urgentes, com análise da prisão e orientação aos familiares.",
    details: "Em uma situação de prisão, o primeiro contato permite compreender os fatos e identificar as providências adequadas. Cada situação exige análise individual das informações, das condições da prisão e dos direitos da pessoa envolvida.",
    topics: ["Orientação em situações de prisão", "Análise de documentos relacionados à custódia", "Acompanhamento de audiência de custódia", "Comunicação e orientação aos familiares"],
  },
  {
    title: "Recursos e execução penal", icon: Gavel,
    summary: "Análise de decisões e acompanhamento jurídico durante o cumprimento da pena.",
    details: "A atuação criminal também abrange a análise de decisões e o acompanhamento da execução penal. A orientação considera os documentos do processo e a situação individual para avaliar os caminhos cabíveis, sem antecipar resultados.",
    topics: ["Análise de decisões judiciais", "Avaliação de recursos cabíveis", "Acompanhamento da execução penal", "Orientação sobre direitos durante o cumprimento da pena"],
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
          <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[104px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Eduardo Cury — início"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src={brand.logo}
                width={1961}
                height={802}
                alt={brand.businessName}
                preload
                className="h-auto w-[155px] sm:w-[190px]"
                sizes="(max-width: 640px) 155px, 190px"
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
                aria-label="WhatsApp do Eduardo Cury"
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
                Sua liberdade merece{" "}
                <span className="text-brand-300">uma defesa à altura.</span>
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Advocacia criminal em Ituiutaba, Minas Gerais. Eduardo Cury oferece orientação e defesa com escuta, sigilo e atenção a cada detalhe do seu caso.
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
                  <WhatsAppMark size={17} /> Fale com Eduardo Cury
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
                  Ituiutaba · Minas Gerais
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={15} className="text-brand-700" />
                  {brand.hours}
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
              <div className="relative aspect-[408/510] overflow-hidden bg-brand-900">
                <Image
                  src={brand.portrait}
                  alt="Eduardo Cury, advogado criminalista em Ituiutaba"
                  fill
                  preload
                  sizes="(max-width: 450px) 90vw, 408px"
                  className="object-contain"
                />
              </div>
              <figcaption className="relative flex items-center justify-between gap-4 bg-brand-950 pb-1 pt-5 text-brand-100">
                <span className="font-display text-lg text-brand-300">Eduardo Cury</span>
                <span className="text-[10px] uppercase tracking-[0.12em]">Advogado criminalista</span>
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
              ["Defesa", "Atenção aos seus direitos"],
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

                description="Da investigação ao acompanhamento do processo, uma atuação voltada à proteção dos seus direitos."
              >
                Defesa em cada{" "}
                <span className="text-brand-700">etapa.</span>
              </Heading>
              <p className="max-w-[250px] pb-1 text-xs leading-6 text-ink-soft">
                Conheça os temas da atuação criminal e saiba como iniciar o atendimento.
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
            <figure className="mx-auto w-full max-w-[340px] lg:ml-0">
              <Image src={brand.office} alt="Eduardo Cury em seu escritório, com o logo dourado da marca na parede" width={282} height={506} sizes="(max-width: 390px) 88vw, 340px" className="h-auto w-full" />
              <figcaption className="mt-4 text-xs leading-6 text-ink-soft">Escritório Eduardo Cury · Ituiutaba, Minas Gerais.</figcaption>
            </figure>
            <div>
              <h2 className="max-w-2xl font-display text-4xl leading-[1.16] text-ink sm:text-5xl">Conheça quem cuida da <span className="text-brand-700">sua defesa.</span></h2>
              <p className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft">Eduardo Cury é advogado criminalista em Ituiutaba, Minas Gerais. Seu trabalho parte de uma convicção: cada pessoa merece ser ouvida e compreender os caminhos da própria defesa.</p>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft">A proposta é unir análise cuidadosa, comunicação acessível e respeito à confidencialidade. Do primeiro contato ao acompanhamento da demanda, a atenção está nas particularidades do caso e nos direitos de quem precisa de orientação.</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-y border-ink/15 py-5 text-sm text-brand-800">
                <span className="inline-flex items-center gap-2"><Scale size={18} strokeWidth={1.5} /> Advocacia criminal</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={18} strokeWidth={1.5} /> {brand.hours}</span>
              </div>
              <a href={contact} target="_blank" rel="noopener noreferrer" className="group mt-7 inline-flex min-h-11 items-center gap-2 border-b border-brand-700/40 py-2 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-700">Converse com Eduardo Cury <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:px-12">
            <Heading

              light
              description="Quando uma questão criminal afeta sua vida, compreender o que acontece e quais são os próximos passos faz diferença."
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
                  "Explicações acessíveis sobre a situação, as possibilidades da defesa e o andamento da demanda.",
                ],
                [
                  "Análise cuidadosa",
                  "Atenção aos fatos e aos documentos, com respeito ao sigilo e às particularidades de cada defesa.",
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
                ["Como funciona o primeiro contato?", "Envie uma mensagem pelo WhatsApp ou ligue para (34) 99111-6365. Conte brevemente sua situação para receber orientação sobre o atendimento e as informações iniciais necessárias."],
                ["Onde fica o escritório?", "O escritório fica no Edifício Ituiutaba, na Av. 13, 658, sala 801, Centro, Ituiutaba, MG, CEP 38300-140. Entre em contato para combinar sua visita."],
                ["O atendimento funciona 24 horas?", "Sim. O contato para atendimento criminal está disponível 24 horas pelo telefone e WhatsApp (34) 99111-6365. Para visitas ao escritório, combine o atendimento previamente."],
                ["Quais documentos devo separar?", "Tenha em mãos um documento de identificação e, se disponíveis, intimações, boletins de ocorrência, decisões ou o número do processo. Os documentos necessários serão indicados conforme sua situação."],
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
              <Heading description="Relatos de quem conhece o atendimento do Eduardo Cury, publicados no Google.">
                Confiança que se{" "}
                <span className="text-brand-700">compartilha.</span>
              </Heading>
              <div className="flex shrink-0 items-center gap-4 text-brand-700">
                <p className="font-display text-5xl leading-none tabular-nums" aria-label={`Nota ${brand.googleRating} de 5 no Google`}>
                  {brand.googleRating}
                </p>
                <div>
                  <span className="flex gap-1" role="img" aria-label="5 de 5 estrelas">
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
                    <p className="mt-1 text-xs text-ink-soft">Avaliação no Google</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="max-w-xl text-xs leading-6 text-ink-soft">
                Seleção de avaliações publicadas no Google. Nota e quantidade conforme os dados fornecidos; consulte o perfil para informações atualizadas.
              </p>
              <a
                href={reviews}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
              >
                Ver todas as avaliações <ArrowUpRight size={14} />
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

                description="Em uma situação urgente ou para esclarecer uma dúvida, fale com Eduardo Cury. Atendimento criminal 24 horas por telefone e WhatsApp."
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
                  <WhatsAppMark size={17} /> Fale com Eduardo Cury
                </GlowingButton>
                <a href={telephone} className="inline-flex min-h-11 items-center gap-2 text-sm text-brand-700 hover:text-brand-800"><Phone size={16} /> Ligue: {brand.phone}</a>
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
                  <h3 className="font-display text-2xl text-ink">Escritório em Ituiutaba</h3>
                </div>
              </div>
              <p className="mt-6 text-sm font-semibold text-brand-700">{brand.building}</p>
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
                Sua defesa começa com uma conversa.
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
                  width={1961}
                  height={802}
                  alt={brand.businessName}
                  className="h-auto w-[200px]"
                  sizes="200px"
                />
              </div>
              <p className="mt-4 max-w-xs text-xs leading-6 text-ink-soft">
                Advocacia criminal em Ituiutaba, MG. Defesa, orientação e atenção a cada detalhe do seu caso.
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
