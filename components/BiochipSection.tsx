'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const tileContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const tileItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const SIGNAL_AREAS = [
  {
    signal: 'Bladder Pressure',
    science: 'Intravesical pressure sensing may enable continuous mapping of detrusor overactivity — providing objective physiological data where symptom-based scoring currently dominates.',
    depth: 'Normal intravesical pressure remains below 15 cmH2O during the filling phase. In overactive bladder and IC/BPS, involuntary detrusor contractions generate pressure spikes that are the objective correlate of urgency — currently measurable only inside a urodynamics suite, under catheterisation, at a single point in time.',
  },
  {
    signal: 'Filling Pattern',
    science: 'Real-time bladder filling rate and capacity sensing could characterise functional bladder volume without urodynamic catheterisation — a fundamental shift in ambulatory urology.',
    depth: 'Cystometric capacity in IC/BPS averages 150–300 mL versus 400–600 mL in healthy adults. Continuous filling-pattern sensing across natural voiding cycles over days or weeks would reveal the true functional picture — not the snapshot a single catheter study provides.',
  },
  {
    signal: 'Urinary pH',
    science: 'Urothelial microenvironment pH fluctuations correlate with inflammatory states and infection cycles in IC/BPS. In-situ pH sensing brings this parameter out of the laboratory.',
    depth: 'Normal urinary pH ranges 5.5–6.5. Acidic shifts below 5.5 during IC/BPS flares correlate with Parsons\'s potassium sensitivity test (2002) — where intravesical KCl causes disproportionate pain, confirming that urothelial barrier compromise allows solute penetration to sub-urothelial afferent terminals.',
  },
  {
    signal: 'Temperature',
    science: 'Localised bladder wall temperature variation may serve as a proxy for hyperaemia and inflammatory flare — a signal invisible to conventional diagnostic workup.',
    depth: 'Temperature differentials as small as 0.3–0.8°C at the urothelial surface can indicate local hyperaemia. Bladder wall microvasculature dilation during inflammatory episodes is a physics-level signal requiring only a sensitive thermal element — no biochemical assay, no extraction, no delay.',
  },
  {
    signal: 'Inflammatory Flare Markers',
    science: 'IC/BPS is characterised by episodic inflammatory flares. Electrochemical sensing of relevant biomarkers within the bladder micro-environment could enable flare prediction rather than flare reporting.',
    depth: 'Validated IC/BPS urinary biomarkers include NGF (nerve growth factor), BDNF (brain-derived neurotrophic factor), IL-6, IL-8, and ATP. NGF and BDNF are elevated 2–10-fold in IC/BPS urine versus controls. Electrochemical immunosensors using antibody-functionalised microelectrodes can detect these mediators at picogram-per-millilitre concentrations.',
  },
  {
    signal: 'Urgency Signals',
    science: 'Correlating bladder sensory afferent activity with filling state and pressure may create the first objective basis for quantifying urgency — the most disabling symptom in overactive bladder and IC/BPS.',
    depth: 'Two afferent fibre types govern bladder sensation: A-delta fibres (myelinated; respond to wall distension) and C-fibres (unmyelinated; respond to chemical, thermal, and inflammatory stimuli). In IC/BPS, C-fibre sensitisation dominates. Pressure-fill correlation patterns from an intravesical sensor could serve as a continuous functional surrogate for afferent firing thresholds.',
  },
  {
    signal: 'Bladder Micro-environment',
    science: 'The biochemical micro-environment of the urothelium — ionic composition, osmolality, protein signatures — is largely unmeasured in clinical practice. An in-situ sensor array could open this domain entirely.',
    depth: 'The urothelium is not passive epithelium. Urothelial cells express TRPV1, TRPV4, P2X and P2Y receptors — responding to mechanical stretch, temperature, osmolality, and extracellular ATP. A miniaturised electrochemical array positioned at the urothelial interface would provide continuous access to the same molecular signals the urothelium itself is already transducing.',
  },
]

const BIOCHIP_NARRATIVE = [
  `The therapeutic management of IC/BPS and overactive bladder has been constrained by a fundamental limitation: everything we know about the bladder comes from outside it. Symptom questionnaires, urodynamic studies, cystoscopy — all are indirect, time-sampled, and episodic. The bladder is generating continuous biological information that current medicine has no mechanism to receive.`,
  `The in-body biochip concept begins with a simple premise: what if a miniaturised sensor array, positioned within the bladder environment, could continuously transduce the signals that the urothelium is already producing? Not to treat — but to sense. Bladder pressure during the fill cycle. Local pH. Temperature gradient. Electrochemical signatures of inflammatory mediators at the tissue interface. These are not exotic parameters. They are the physics and biochemistry of a diseased or stressed bladder, rendered invisible only by the absence of a sensing mechanism.`,
  `The first clinical focus is IC/BPS flare sensing. Interstitial Cystitis / Bladder Pain Syndrome affects an estimated 3–8% of women globally, with a diagnostic journey averaging 5–7 years. Flares are unpredictable, severely disruptive, and currently managed entirely on patient-reported symptom escalation. A chip that can detect the pre-flare micro-environmental signature — before the patient experiences peak pain — would represent a categorical advance in disease management capability.`,
  `The disease biology supports this thesis at a molecular level. IC/BPS is not simply chronic pelvic pain — it is a demonstrable breakdown of the urothelial barrier, with mast cell infiltration, C-fibre sensitisation, and measurable biomarker elevation that precede and accompany symptomatic flares. The biology produces the signals. The chip reads them.`,
  `The concept draws on a validated scientific lineage. Implantable biosensing is not speculative — it is established. Cardiac pressure monitors (St Jude's CardioMEMS), continuous glucose monitors, and implantable loop recorders have all demonstrated that miniaturised electrochemical and physical sensors can operate safely and reliably within the body over clinically meaningful timeframes. The question for bladder sensing is not whether the physics works. It is whether a device can be designed, fabricated, and positioned to access the urothelial environment specifically.`,
]

const IC_BPS_BIOLOGY = [
  {
    mechanism: 'GAG Layer Defect',
    category: 'Urothelial Barrier',
    detail: 'The urothelium is protected by a glycosaminoglycan (GAG) surface coat — a molecular barrier composed of heparan sulphate, chondroitin sulphate, and hyaluronic acid. In IC/BPS, this barrier is structurally compromised. Urinary potassium, metabolic waste, and inflammatory solutes penetrate the damaged urothelium and activate sub-urothelial afferent C-fibre terminals directly, triggering the pain-urgency-frequency cycle that defines the condition.',
  },
  {
    mechanism: 'Mast Cell Infiltration',
    category: 'Immune Activation',
    detail: 'Bladder biopsies from IC/BPS patients consistently show 2–5-fold elevated mast cell density in the detrusor muscle versus healthy controls. Activated mast cells degranulate — releasing histamine, heparin, NGF, tryptase, and prostaglandins into the bladder wall. Each of these mediators diffuses into the urine. Each is a potential electrochemical biosensor target. The degranulation event itself may be detectable as a thermal, impedimetric, or biochemical signature.',
  },
  {
    mechanism: 'Neurogenic Sensitisation',
    category: 'Afferent Remodelling',
    detail: 'Chronic urothelial irritation drives peripheral C-fibre sensitisation and, over time, spinal cord central sensitisation. Elevated substance P, CGRP (calcitonin gene-related peptide), and BDNF in bladder tissue remodel the pain-processing axis. This is why IC/BPS frequently co-presents with fibromyalgia, irritable bowel syndrome, and vulvodynia — the same central sensitisation mechanism underlies all of them. Early flare detection, before sensitisation propagates, is the highest-value intervention window.',
  },
]

const BIOSENSOR_SCIENCE = [
  {
    method: 'Electrochemical Impedance Spectroscopy',
    analyte: 'Urothelial barrier integrity',
    significance: 'Measures electrical resistance and capacitance across the urothelial surface. Barrier compromise — the primary IC/BPS pathological event — produces measurable impedance shifts at frequencies that can distinguish structural from inflammatory change. Potentially the earliest quantifiable signal of an impending flare, detectable before pain onset.',
  },
  {
    method: 'Amperometric Immunosensor',
    analyte: 'NGF, BDNF, IL-8, ATP',
    significance: 'Antibody-functionalised microelectrodes generate oxidation current proportional to analyte concentration. NGF and BDNF — validated IC/BPS biomarkers elevated 2–10-fold in affected patients — are detectable at picogram-per-millilitre concentrations using this approach. ATP, released from stretched urothelial cells, provides a real-time mechanical surrogate.',
  },
  {
    method: 'Ion-Sensitive Field-Effect Transistor (ISFET)',
    analyte: 'Urinary pH, K⁺, Na⁺ ionic activity',
    significance: 'ISFETs enable miniaturised, reference-free measurement of pH and ionic activity at the sensor surface. The same technology proven in blood gas monitors and point-of-care diagnostic chips, adapted for continuous in-situ bladder micro-environment sensing. Potassium activity correlation with the Parsons KCl sensitivity test provides a direct clinical validation anchor.',
  },
  {
    method: 'Thin-Film Resistance Thermometry',
    analyte: 'Bladder wall surface temperature',
    significance: 'Platinum or nickel thin-film resistive elements, patterned onto a biocompatible polymer substrate, achieve thermal resolution of 0.1°C or better. Bladder wall hyperaemia during inflammatory flares produces localised temperature rises of 0.3–0.8°C — within the detection envelope of this approach and achievable without complex biochemistry.',
  },
]

export default function BiochipSection() {
  const diseaseRef = useRef<HTMLDivElement>(null)
  const diseaseInView = useInView(diseaseRef, { once: true, margin: '-60px' })
  const signalRef = useRef<HTMLDivElement>(null)
  const signalInView = useInView(signalRef, { once: true, margin: '-60px' })

  return (
    <>
    {/* Hero */}
    <section
      style={{ background: 'var(--hero-grey)', padding: '7rem 6rem 5rem', borderBottom: '0.5px solid rgba(138,171,138,0.22)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '8rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <p className="section-tag" style={{ margin: 0 }}>Basket 08</p>
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--sage-deep)',
                  background: 'rgba(138,171,138,0.12)',
                  border: '0.5px solid rgba(138,171,138,0.35)',
                  padding: '0.2rem 0.6rem',
                }}
              >
                Concept Stage
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              Uro-Gyn<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>Bladder Biochip</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: '0 0 2rem' }}>
              In-body bladder biochip concept starting with urology. The first focus is IC/BPS flare sensing through bladder-health sensor chips.
            </p>
            <div
              style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(138,171,138,0.08)',
                border: '0.5px solid rgba(138,171,138,0.25)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage-deep)', margin: '0 0 0.5rem' }}>
                Concept Note
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>
                Concept stage only. No clinical or regulatory claim to be made until evaluation and approvals.
              </p>
            </div>
          </div>
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Sensor Signal Areas — Chip Concept</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {SIGNAL_AREAS.map((s) => (
                <span
                  key={s.signal}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    color: 'var(--sage-deep)',
                    background: 'rgba(138,171,138,0.1)',
                    border: '0.5px solid rgba(138,171,138,0.3)',
                    padding: '0.4rem 0.9rem',
                  }}
                >
                  {s.signal}
                </span>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(138,171,138,0.18)' }}>
              {[
                { val: '3–8%', label: 'Women globally affected by IC/BPS' },
                { val: '5–7 yr', label: 'Average delay to IC/BPS diagnosis' },
                { val: 'IC/BPS', label: 'First sensor focus — flare detection' },
                { val: 'Urology', label: 'Primary clinical domain for chip concept' },
              ].map((s) => (
                <div key={s.val} style={{ padding: '1.25rem 1.5rem', background: 'var(--sage-pale)' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', color: 'var(--muted)', margin: 0, lineHeight: 1.4 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Science narrative */}
    <section
      style={{ background: 'var(--sage-pale)', padding: '5rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.2)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <p className="section-tag" style={{ marginBottom: '1.5rem' }}>The Sensing Thesis</p>
            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.55rem, 2.4vw, 2.1rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--charcoal)',
                lineHeight: 1.35,
                margin: '0 0 2rem',
                paddingLeft: '1.5rem',
                borderLeft: '3px solid var(--sage)',
              }}
            >
              "The bladder is generating continuous biological information. Current medicine has no mechanism to receive it."
            </blockquote>
            <div
              style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(138,171,138,0.08)',
                border: '0.5px solid rgba(138,171,138,0.25)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage-deep)', margin: '0 0 0.5rem' }}>
                Scientific Framing
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
                The chip concept may explore bladder pressure, filling pattern, urinary pH, temperature, inflammatory flare markers, urgency signals and bladder micro-environment signals — all from within the in-body sensor environment.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {BIOCHIP_NARRATIVE.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  margin: 0,
                  borderTop: i > 0 ? '0.5px solid rgba(138,171,138,0.2)' : 'none',
                  paddingTop: i > 0 ? '1.25rem' : 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* IC/BPS Disease Biology */}
    <section
      style={{ background: 'var(--cream)', padding: '6rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.22)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>The Disease Architecture</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2 }}>
            IC/BPS is not simply{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>chronic pelvic pain</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: '680px', marginTop: '1.25rem' }}>
            It is a demonstrable breakdown of the urothelial barrier — with measurable molecular events at every stage of disease progression. These events produce detectable signals. They are the scientific foundation for an in-situ biosensor concept.
          </p>
        </div>

        <motion.div
          ref={diseaseRef}
          variants={tileContainer}
          initial="hidden"
          animate={diseaseInView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(138,171,138,0.18)' }}
          className="responsive-three"
        >
          {IC_BPS_BIOLOGY.map((item, i) => (
            <motion.div
              key={item.mechanism}
              variants={tileItem}
              style={{ background: 'var(--cream)', padding: '2.25rem 2rem' }}
            >
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                margin: '0 0 0.75rem',
              }}>
                {item.category}
              </p>
              <p style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.35rem',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.2,
                margin: '0 0 1rem',
              }}>
                {item.mechanism}
              </p>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.82rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.82,
                margin: 0,
              }}>
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', background: 'var(--sage-pale)', border: '0.5px solid rgba(138,171,138,0.3)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }} className="responsive-three">
          {[
            { ref: 'Parsons, C.L. (2002)', finding: 'Urothelial permeability as the primary IC/BPS pathological event — potassium sensitivity test' },
            { ref: 'Theoharides et al. (2012)', finding: 'Mast cell-nerve unit in IC/BPS: NGF, substance P and neurogenic inflammation cascade' },
            { ref: 'Bornstein et al. (2020)', finding: 'Central sensitisation and co-morbid pain syndromes in bladder pain — BDNF as a convergence biomarker' },
          ].map((r) => (
            <div key={r.ref}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--sage-deep)', margin: '0 0 0.35rem', letterSpacing: '0.04em' }}>{r.ref}</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{r.finding}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Biosensor Platform Science */}
    <section
      style={{ background: 'var(--hero-grey)', padding: '6rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.22)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '7rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <p className="section-tag" style={{ marginBottom: '1.5rem' }}>Sensor Architecture — Concept</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.75rem, 3vw, 2.6rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2, margin: '0 0 1.5rem' }}>
              The science that{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>already works at smaller scale</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.85, margin: '0 0 2rem' }}>
              Implantable biosensing is not speculative. Cardiac pressure monitors, continuous glucose monitors, and implantable loop recorders have demonstrated that miniaturised electrochemical and physical sensors operate safely and reliably within the body. The foundational physics and chemistry of these modalities are the same as those applicable to bladder micro-environment sensing.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { precedent: 'CardioMEMS (St Jude Medical)', note: 'MEMS pressure sensor implanted in the pulmonary artery — continuous haemodynamic monitoring without external power in heart failure patients' },
                { precedent: 'Continuous Glucose Monitor (Dexcom, Abbott)', note: 'Subcutaneous electrochemical biosensor detecting glucose at interstitial fluid concentration — validated biocompatibility model for chronic implantable sensing' },
                { precedent: 'Implantable Loop Recorder (Medtronic)', note: 'Single-lead cardiac monitor implanted subcutaneously — demonstrates multi-year in-body operation of miniaturised signal acquisition hardware' },
              ].map((p) => (
                <div key={p.precedent} style={{ padding: '1.1rem 1.3rem', background: 'var(--sage-pale)', border: '0.5px solid rgba(138,171,138,0.3)' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--sage-deep)', margin: '0 0 0.35rem', letterSpacing: '0.04em' }}>{p.precedent}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{p.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-tag" style={{ marginBottom: '1.5rem' }}>Sensing Modalities Under Concept Exploration</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {BIOSENSOR_SCIENCE.map((bs, i) => (
                <div
                  key={bs.method}
                  style={{
                    padding: '1.75rem 0',
                    borderTop: '0.5px solid rgba(138,171,138,0.25)',
                    borderBottom: i === BIOSENSOR_SCIENCE.length - 1 ? '0.5px solid rgba(138,171,138,0.25)' : 'none',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--charcoal)', margin: '0 0 0.4rem', lineHeight: 1.2 }}>{bs.method}</p>
                      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', fontWeight: 500, color: 'var(--sage)', letterSpacing: '0.06em', margin: 0 }}>{bs.analyte}</p>
                    </div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>{bs.significance}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.75rem', padding: '1.25rem 1.5rem', background: 'rgba(138,171,138,0.08)', border: '0.5px solid rgba(138,171,138,0.25)' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage-deep)', margin: '0 0 0.4rem' }}>
                Biocompatibility Framework
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>
                Any implantable sensor design would require evaluation under ISO 10993 (Biological Evaluation of Medical Devices). Substrate materials under concept consideration include parylene-C (USP Class VI; established implant coating), PDMS (polydimethylsiloxane; proven in cochlear implants and retinal prosthetics), and medical-grade SU-8 photoresist for microfluidic channel fabrication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Signal breakdown */}
    <section
      id="biochip"
      style={{ background: 'var(--cream)', padding: '6rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.25)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Sensor Science — Concept Exploration</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2 }}>
            Seven{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>sensing domains</span>
          </h2>
        </div>
        <motion.div
          ref={signalRef}
          variants={tileContainer}
          initial="hidden"
          animate={signalInView ? 'visible' : 'hidden'}
          style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
        >
          {SIGNAL_AREAS.map((s, i) => (
            <motion.div
              key={s.signal}
              variants={tileItem}
              style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: '3rem',
                padding: '2rem 0',
                borderTop: '0.5px solid rgba(138,171,138,0.25)',
                borderBottom: i === SIGNAL_AREAS.length - 1 ? '0.5px solid rgba(138,171,138,0.25)' : 'none',
                alignItems: 'start',
              }}
              className="biochip-row"
            >
              <div>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', fontWeight: 300, color: 'var(--charcoal)', margin: '0 0 0.25rem', lineHeight: 1.2 }}>{s.signal}</p>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    color: 'var(--sage)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Sensor signal {i + 1}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.82, margin: 0 }}>
                  {s.science}
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--sage-deep)', lineHeight: 1.75, margin: 0, paddingTop: '0.65rem', borderTop: '0.5px solid rgba(138,171,138,0.2)' }}>
                  {s.depth}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div
          style={{
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'var(--sage-pale)',
            border: '0.5px solid rgba(138,171,138,0.3)',
          }}
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage-deep)', margin: '0 0 0.5rem' }}>
            Concept Stage Only
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
            No clinical or regulatory claim to be made until evaluation and approvals. This basket represents a concept-stage in-body sensor initiative. No monitoring platform, clinical dashboard, or patient data application is proposed at this stage.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
