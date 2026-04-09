const IMG_BASE = `${import.meta.env.BASE_URL}images/`

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Overview', href: '#overview' },
  { label: 'Key Findings', href: '#findings' },
  { label: 'National Trends', href: '#national-trends' },
]

export const overviewCards = [
  { label: 'Study Period', value: '2000–2019' },
  { label: 'Unit of Analysis', value: 'State-year' },
  { label: 'Main Outcome', value: 'Gun-related deaths and crude death rates' },
  { label: 'Scope', value: 'Descriptive state-level analysis' },
  { label: 'Focus', value: 'Trends and comparisons' },
]

export const objectives = [
  'Examine national trends in gun-related deaths.',
  'Compare states by death rates and total deaths.',
]

export const findings = [
  'Gun-related deaths increased nationally from 2000 to 2019.',
  'The South showed the highest regional mortality pattern.',
]

export const nationalTrendsFigures = [
  {
    id: 'figure-1',
    title: 'Figure 1. U.S. Total Gun-Related Deaths by Year (2000–2019)',
    image: `${IMG_BASE}figure_1_us_total_firearm_deaths_by_year.png`,
    caption: 'National totals show a substantial upward pattern across the study period.',
  },
  {
    id: 'figure-2',
    title: 'Figure 2. U.S. Crude Gun-Related Death Rate by Year (2000–2019)',
    image: `${IMG_BASE}figure_2_us_crude_firearm_death_rate_by_year.png`,
    caption: 'Crude death rates also rose over time.',
  },
]

export const stateComparisonFigures = []
export const changeGroups = []
export const heatmapMapFigures = []
export const regionalFigures = []

export const policyCards = [
  {
    title: 'Lower-rate states with stricter firearm policy profiles',
    states: ['Massachusetts', 'New York'],
    points: ['Stronger background check systems'],
  },
  {
    title: 'Higher-rate states with more permissive firearm policy profiles',
    states: ['Wyoming', 'Alabama'],
    points: ['More permissive concealed carry environments'],
  },
]

export const manifestItems = [
  { label: 'Website Type', value: 'Frontend-only academic visualization site' },
  { label: 'Built With', value: 'React, Vite, Tailwind CSS' },
  { label: 'Figures Included', value: '25' },
]
