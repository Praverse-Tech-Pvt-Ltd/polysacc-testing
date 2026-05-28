export const COMPANY = {
  name: 'Polysaccharide Chemistry Pvt Ltd',
  shortName: 'Polysaccharide Chemistry',
  address: {
    line1: '404 & 405, Floor 4, Sona Chambers',
    line2: 'Jagannath Shankarsheth Marg',
    line3: 'Kamathiwadi, Chira Bazar, Kalbadevi',
    city: 'Mumbai',
    pin: '400002',
    state: 'Maharashtra, India',
    full: '404 & 405, Floor 4, Sona Chambers, Jagannath Shankarsheth Marg, Kamathiwadi, Chira Bazar, Kalbadevi, Mumbai – 400002',
  },
  email: 'elmiron@elmiron.in',
  phone: '+91 80972 53466',
} as const

export const LEADERSHIP = [
  {
    name: 'Pratham Shrivastav',
    title: 'Chief Technology Officer',
    role: 'CTO & Promoter',
    email: 'pratham@polysacc.com',
    bio: 'Pratham Shrivastav is the CTO and Promoter of Polysaccharide Chemistry Pvt Ltd, overseeing the technology and digital infrastructure across the company\'s pharmaceutical and medical education platforms, including Elmiron® and the Missed Bladder Disease initiative.',
  },
] as const

export const PORTFOLIO = [
  {
    type: 'Product',
    name: 'Elmiron®',
    subtitle: 'Pentosan Polysulfate Sodium',
    description:
      "India's only oral PPS therapy. Among the best FDA-approved treatments for Interstitial Cystitis / Bladder Pain Syndrome. Available in 100mg oral capsules and 50mg/mL intravesical solution.",
    url: 'https://elmiron.in',
    cta: 'elmiron.in ↗',
    tag: 'Pharmaceutical',
    detail: 'Schedule H · Oral + Intravesical · IC/BPS Approved',
  },
  {
    type: 'Initiative',
    name: 'Missed Bladder Disease',
    subtitle: 'Physician Education Hub',
    description:
      "A structured physician education initiative addressing the diagnostic gap in women's bladder health across India. Led by Dr. Sanjay Pandey and Team BladderHealthWomen.",
    url: 'https://missedbladderdisease.com',
    cta: 'missedbladderdisease.com ↗',
    tag: 'Medical Education',
    detail: 'IC/BPS · Diagnostic Frameworks · GIBBS Method',
  },
] as const

export const SCIENCE_PILLARS = [
  {
    formula: 'C₁₂H₁₇O₁₇S₄⁻',
    name: 'Polysaccharide Architecture',
    description:
      'We work at the intersection of carbohydrate chemistry and clinical medicine. Polysaccharides — long-chain sugar polymers — are among the most structurally complex and biologically potent molecules in nature.',
  },
  {
    formula: 'GAG → PPS',
    name: 'Biomimetic Design',
    description:
      "Pentosan Polysulfate Sodium is engineered to mimic the glycosaminoglycan layer of the bladder urothelium. This biomimetic approach — restoring what disease has degraded — is the foundation of our therapeutic philosophy.",
  },
  {
    formula: '≥35 yrs',
    name: 'Clinical Validation',
    description:
      '35+ years of peer-reviewed evidence. 5 of 7 randomised controlled trials confirmed efficacy. A von Ophoven 2019 meta-analysis unequivocally confirmed PPS superiority over placebo in IC/BPS.',
  },
] as const

export const STATS = [
  { value: '35+', label: 'Years of global clinical evidence behind PPS', unit: 'yrs' },
  { value: '5/7', label: 'Randomised controlled trials confirming efficacy', unit: 'RCTs' },
  { value: '54%', label: 'Patients reporting >50% improvement (Ali et al, 2011)', unit: '' },
  { value: '2,809', label: 'Patients in landmark Hanno 1997 open-label study', unit: '' },
] as const

export const CLINICAL_STUDIES = [
  {
    authors: 'von Ophoven A, et al.',
    year: '2019',
    journal: 'Neurourology and Urodynamics',
    patients: 'Meta-analysis',
    finding:
      'Definitive meta-analysis confirming PPS superiority over placebo across all primary outcome measures in IC/BPS. Established PPS as the gold-standard pharmacological intervention.',
  },
  {
    authors: 'Hanno PM, et al.',
    year: '1997',
    journal: 'Journal of Urology',
    patients: '2,809',
    finding:
      'Landmark open-label study across multiple centres. Demonstrated sustained symptomatic improvement at 32 weeks with an excellent long-term safety profile, establishing the clinical durability of PPS.',
  },
  {
    authors: 'Ali S, et al.',
    year: '2011',
    journal: 'Urology',
    patients: '564',
    finding:
      '54% of patients reported greater than 50% reduction in symptom burden at 6 months. Confirmed dose-response relationship and durable benefit extending beyond treatment cessation.',
  },
  {
    authors: 'Nickel JC, et al.',
    year: '2015',
    journal: 'Canadian Urological Association Journal',
    patients: '380',
    finding:
      'Randomised controlled trial confirming statistically significant improvements in global response assessment, pain scores, and urinary frequency versus placebo over 24 weeks.',
  },
  {
    authors: 'Sant GR, et al.',
    year: '2003',
    journal: 'Journal of Urology',
    patients: '368',
    finding:
      'Randomised, double-blind, placebo-controlled trial. PPS demonstrated clinically meaningful reductions in bladder pain and urgency, with benefits appearing from week 4 onwards.',
  },
] as const

export const ENQUIRY_TYPES = [
  'Medical Affairs',
  'Business Partnership',
  'Investor Relations',
  'Prescribing Information',
  'Other',
] as const
