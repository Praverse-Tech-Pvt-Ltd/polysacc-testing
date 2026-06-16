const URO_DEVICES = [
  {
    name: 'Catheters',
    types: 'Foley, intermittent, suprapubic',
    story: 'The most fundamental urological device. From post-operative drainage to long-term management of neurogenic bladder — catheter selection determines patient comfort, infection risk, and clinical outcomes.',
  },
  {
    name: 'Ureteral Stents',
    types: 'Double-J stents, ureteral access sheaths',
    story: 'When the ureter is obstructed — by a stone, a stricture, or a tumour — the stent is the bridge that preserves renal function while the definitive treatment takes effect.',
  },
  {
    name: 'Urodynamic Systems',
    types: 'Uroflowmetry, cystometry, pressure-flow studies',
    story: 'You cannot manage what you do not measure. Urodynamic assessment answers the question that symptoms alone cannot: is this a storage problem, a voiding problem, or both?',
  },
  {
    name: 'Cystoscopes',
    types: 'Flexible & rigid endoscopy systems',
    story: 'Direct visualisation of the bladder urothelium — for diagnosis of tumours, stones, strictures, and interstitial cystitis. The endoscope closes the gap between clinical suspicion and histological certainty.',
  },
  {
    name: 'Bladder Scanners',
    types: 'Portable ultrasound-based PVR measurement',
    story: 'Post-void residual measurement without catheterisation. A non-invasive step that prevents unnecessary instrumentation and immediately informs the management decision tree.',
  },
  {
    name: 'Lithotripsy Systems',
    types: 'ESWL, pneumatic, laser intracorporeal',
    story: 'Stone disease is one of the most recurrent urological conditions. The device landscape — from external shockwave to in-vivo laser fragmentation — mirrors the stone burden and patient suitability.',
  },
]

const GYNO_DEVICES = [
  {
    name: 'Intrauterine Devices (IUDs)',
    types: 'Copper non-hormonal, levonorgestrel-releasing (hormonal)',
    story: 'Among the most effective forms of long-acting reversible contraception available. The hormonal IUD additionally addresses heavy menstrual bleeding — a condition affecting 1 in 5 women — making it simultaneously contraceptive and therapeutic.',
  },
  {
    name: 'Hysteroscopy Systems',
    types: 'Diagnostic & operative hysteroscopes',
    story: 'The uterine cavity viewed directly. From polyp and fibroid resection to targeted biopsy — hysteroscopy has replaced many open surgical procedures, offering day-case intervention with rapid recovery.',
  },
  {
    name: 'Colposcopes',
    types: 'Digital colposcopy systems with imaging integration',
    story: 'The gateway to cervical cancer prevention. When a Pap smear or HPV test raises concern, the colposcope enables magnified inspection and directed biopsy — catching disease before it progresses.',
  },
  {
    name: 'Endometrial Ablation Systems',
    types: 'Thermal balloon, radiofrequency, cryoablation',
    story: 'For women with treatment-resistant heavy menstrual bleeding who do not want hysterectomy, endometrial ablation offers a minimally invasive, office-based alternative with high rates of satisfaction and amenorrhoea.',
  },
  {
    name: 'Fertility Assessment Devices',
    types: 'Ovulation monitors, HSG systems, folliculometry probes',
    story: 'Fertility is a window into systemic health. The devices used in its assessment — from transvaginal ultrasound probes to hysterosalpingography systems — form the diagnostic infrastructure of reproductive medicine.',
  },
  {
    name: 'Cervical Screening Systems',
    types: 'Liquid-based cytology, HPV co-testing platforms',
    story: 'Cervical cancer remains almost entirely preventable. Yet screening gaps persist. Liquid-based cytology and integrated HPV testing represent the current clinical standard — and a space where reliable device supply matters enormously.',
  },
]

export default function DevicesSection() {
  return (
    <section
      id="devices"
      style={{
        background: 'var(--hero-grey)',
        padding: '7rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Medical Devices · Uro &amp; Gynaecology
          </p>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}
            className="responsive-split"
          >
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.15,
              }}
            >
              Where{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>pharmacology</span>{' '}
              meets instrumentation.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.85,
              }}
            >
              The pharmaceutical molecule is one half of the clinical equation. The device that
              delivers the diagnosis — or enables the procedure — is the other. In urology and
              gynaecology, devices are not accessories to the drug; they are co-equal components
              of patient care. Our device portfolio reflects the same niche discipline as our
              pharmaceutical one: clinically meaningful, technically demanding, and underserved.
            </p>
          </div>
        </div>

        {/* Two-column device grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
          }}
          className="responsive-split"
        >
          {/* Urology Devices */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                paddingBottom: '1.25rem',
                borderBottom: '0.5px solid rgba(138,171,138,0.3)',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 24,
                  background: 'var(--sage)',
                  flexShrink: 0,
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  color: 'var(--charcoal)',
                  margin: 0,
                }}
              >
                Urology Devices
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {URO_DEVICES.map((d) => (
                <div key={d.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'var(--charcoal)',
                        margin: 0,
                      }}
                    >
                      {d.name}
                    </h4>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.65rem',
                        fontWeight: 300,
                        color: 'var(--sage-deep)',
                        flexShrink: 0,
                        textAlign: 'right',
                        lineHeight: 1.3,
                      }}
                    >
                      {d.types}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      color: 'var(--muted)',
                      lineHeight: 1.75,
                      margin: '0 0 1rem',
                    }}
                  >
                    {d.story}
                  </p>
                  <div style={{ height: '0.5px', background: 'rgba(138,171,138,0.2)' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Gynaecology Devices */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                paddingBottom: '1.25rem',
                borderBottom: '0.5px solid rgba(138,171,138,0.3)',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 24,
                  background: 'var(--amber)',
                  flexShrink: 0,
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  color: 'var(--charcoal)',
                  margin: 0,
                }}
              >
                Gynaecology Devices
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {GYNO_DEVICES.map((d) => (
                <div key={d.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'var(--charcoal)',
                        margin: 0,
                      }}
                    >
                      {d.name}
                    </h4>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.65rem',
                        fontWeight: 300,
                        color: 'var(--amber)',
                        flexShrink: 0,
                        textAlign: 'right',
                        lineHeight: 1.3,
                      }}
                    >
                      {d.types}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      color: 'var(--muted)',
                      lineHeight: 1.75,
                      margin: '0 0 1rem',
                    }}
                  >
                    {d.story}
                  </p>
                  <div style={{ height: '0.5px', background: 'rgba(138,171,138,0.2)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
