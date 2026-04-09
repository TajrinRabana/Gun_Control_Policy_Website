const IMG_BASE = `${import.meta.env.BASE_URL}images/`

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Overview', href: '#overview' },
  { label: 'Key Findings', href: '#findings' },
  { label: 'National Trends', href: '#national-trends' },
  { label: 'State Comparison', href: '#state-comparison' },
  { label: 'Changes Over Time', href: '#changes-over-time' },
  { label: 'Maps & Heatmaps', href: '#maps-heatmaps' },
  { label: 'Regional Analysis', href: '#regional-analysis' },
  { label: 'Policy Interpretation', href: '#policy-interpretation' },
  { label: 'Digital Manifest', href: '#digital-manifest' },
]

export const overviewCards = [
  { label: 'Study Period', value: '2000–2019' },
  { label: 'Unit of Analysis', value: 'State-year' },
  { label: 'Main Outcome', value: 'Gun-related deaths and crude death rates' },
  { label: 'Scope', value: 'Descriptive state-level analysis' },
  {
    label: 'Focus',
    value: 'Trends, comparisons, maps, heatmaps, and regional variation',
  },
]

export const objectives = [
  'Examine national trends in gun-related deaths.',
  'Compare states by death rates and total deaths.',
  'Identify states with the largest increases and decreases.',
  'Present regional and geographic variation.',
  'Discuss how firearm policy environments may align with observed differences.',
]

export const findings = [
  'Gun-related deaths increased nationally from 2000 to 2019.',
  'Louisiana, Wyoming, Mississippi, Alabama, and Alaska had the highest long-term crude death rates.',
  'Hawaii, Massachusetts, Rhode Island, New York, and New Jersey had the lowest long-term crude death rates.',
  'California, Texas, and Florida had the highest total deaths.',
  'Wyoming showed one of the sharpest increases.',
  'New York showed one of the clearest decreases.',
  'The South showed the highest regional mortality pattern.',
  'The Northeast showed the lowest regional mortality pattern.',
]

export const nationalTrendsFigures = [
  {
    id: 'figure-1',
    title: 'Figure 1. U.S. Total Gun-Related Deaths by Year (2000–2019)',
    image: `${IMG_BASE}figure_1_us_total_firearm_deaths_by_year.png`,
    caption:
      'National totals show a substantial upward pattern across the study period.',
  },
  {
    id: 'figure-2',
    title: 'Figure 2. U.S. Crude Gun-Related Death Rate by Year (2000–2019)',
    image: `${IMG_BASE}figure_2_us_crude_firearm_death_rate_by_year.png`,
    caption:
      'Crude death rates also rose over time, indicating that the increase was not only driven by population size.',
  },
]

export const stateComparisonFigures = [
  {
    id: 'figure-3',
    title: 'Figure 3. Top 10 States by Average Crude Gun-Related Death Rate',
    image: `${IMG_BASE}figure_3_top10_states_avg_crude_rate.png`,
    caption:
      'These states recorded the highest long-term average crude death rates across the study period.',
  },
  {
    id: 'figure-4',
    title: 'Figure 4. Lowest 10 States by Average Crude Gun-Related Death Rate',
    image: `${IMG_BASE}figure_4_least10_states_avg_crude_rate.png`,
    caption:
      'These states remained at the lower end of long-term average crude death rates.',
  },
]

export const changeGroups = [
  {
    label: 'Largest increases',
    figures: [
      {
        id: 'figure-5',
        title: 'Figure 5. Top 10 States with the Largest Increase in Crude Death Rate',
        image: `${IMG_BASE}figure_5_top10_increase_crude_rate.png`,
        caption:
          'This figure identifies the states with the sharpest upward change in crude death rates.',
      },
      {
        id: 'figure-7',
        title: 'Figure 7. Top 10 States with the Largest Increase in Total Gun-Related Deaths',
        image: `${IMG_BASE}figure_7_top10_increase_deaths.png`,
        caption:
          'This figure highlights states with the greatest increase in absolute counts of gun-related deaths.',
      },
      {
        id: 'figure-11',
        title: 'Figure 11. Top 10 States by Absolute Change Slope, 2000–2019',
        image: `${IMG_BASE}figure_11_top10_absolute_change_slope_2000_2019.png`,
        caption:
          'This figure compares states by the magnitude of long-run upward or downward change over time.',
      },
    ],
  },
  {
    label: 'Largest decreases',
    figures: [
      {
        id: 'figure-6',
        title: 'Figure 6. Top 10 States with the Largest Decrease in Crude Death Rate',
        image: `${IMG_BASE}figure_6_top10_decrease_crude_rate.png`,
        caption:
          'This figure identifies the states with the clearest reductions in crude death rates.',
      },
      {
        id: 'figure-8',
        title: 'Figure 8. Top 10 States with the Largest Decrease in Total Gun-Related Deaths',
        image: `${IMG_BASE}figure_8_top10_decrease_deaths.png`,
        caption:
          'This figure highlights states that experienced the largest decline in total gun-related deaths.',
      },
    ],
  },
  {
    label: 'Start vs end year comparison',
    figures: [
      {
        id: 'figure-9',
        title: 'Figure 9. Top 10 States: 2019 vs 2000 Crude Death Rate',
        image: `${IMG_BASE}figure_9_top10_states_2019_vs_2000_crude_rate.png`,
        caption:
          'This figure compares crude death rates between the beginning and end of the study period for selected higher-rate states.',
      },
      {
        id: 'figure-10',
        title: 'Figure 10. Lowest 10 States: 2019 vs 2000 Crude Death Rate',
        image: `${IMG_BASE}figure_10_least10_states_2019_vs_2000_crude_rate.png`,
        caption:
          'This figure compares crude death rates between 2000 and 2019 for lower-rate states.',
      },
      {
        id: 'figure-12',
        title: 'Figure 12. Top 10 States: 2019 vs 2000 Total Gun-Related Deaths',
        image: `${IMG_BASE}figure_12_top10_states_2019_vs_2000_deaths.png`,
        caption:
          'This figure compares total gun-related deaths in 2000 and 2019 for selected states.',
      },
    ],
  },
]

export const heatmapMapFigures = [
  {
    id: 'figure-13',
    title: 'Figure 13. Full State-Year Heatmap of Crude Gun-Related Death Rate',
    image: `${IMG_BASE}figure_13_full_state_year_heatmap_crude_rate.png`,
    caption:
      'The complete heatmap shows that death-rate patterns remained highly uneven across states over time.',
  },
  {
    id: 'figure-14',
    title: 'Figure 14. Top 20 States Heatmap of Crude Gun-Related Death Rate',
    image: `${IMG_BASE}figure_14_top20_states_heatmap_crude_rate.png`,
    caption:
      'This heatmap focuses on higher-rate states and shows persistent concentration across the study period.',
  },
  {
    id: 'figure-15',
    title: 'Figure 15. Lowest 20 States Heatmap of Crude Gun-Related Death Rate',
    image: `${IMG_BASE}figure_15_least20_states_heatmap_crude_rate.png`,
    caption:
      'This heatmap shows the lower-rate states and their relatively stable position over time.',
  },
  {
    id: 'figure-16',
    title: 'Figure 16. U.S. Map of Average Crude Gun-Related Death Rate',
    image: `${IMG_BASE}figure_16_us_map_average_crude_rate.png`,
    caption:
      'The national map shows geographic clustering in average crude death rates across states.',
  },
  {
    id: 'figure-17',
    title: 'Figure 17. U.S. Map of Total Gun-Related Deaths',
    image: `${IMG_BASE}figure_17_us_map_total_deaths.png`,
    caption:
      'This map highlights the states with the largest overall number of gun-related deaths.',
  },
  {
    id: 'figure-18',
    title: 'Figure 18. U.S. Map of Crude Death Rate Change, 2000–2019',
    image: `${IMG_BASE}figure_18_us_map_crude_rate_change_2000_2019.png`,
    caption:
      'This map shows that the direction and scale of change were not evenly distributed across the country.',
  },
]

export const regionalFigures = [
  {
    id: 'figure-19',
    title: 'Figure 19. Total Gun-Related Deaths by Region',
    image: `${IMG_BASE}figure_19_total_firearm_deaths_by_region.png`,
    caption:
      'Regional totals show that the South carried the highest concentration of deaths.',
  },
  {
    id: 'figure-20',
    title: 'Figure 20. Average Crude Gun-Related Death Rate by Region',
    image: `${IMG_BASE}figure_20_average_crude_rate_by_region.png`,
    caption:
      'Average regional crude death rates show a clear contrast between the South and the Northeast.',
  },
  {
    id: 'figure-21',
    title: 'Figure 21. Median Crude Gun-Related Death Rate by Region',
    image: `${IMG_BASE}figure_21_median_crude_rate_by_region.png`,
    caption:
      'Median values support the broader regional pattern observed in the average rates.',
  },
  {
    id: 'figure-22',
    title: 'Figure 22. Regional Crude Gun-Related Death Rate Trends',
    image: `${IMG_BASE}figure_22_regional_crude_rate_trends.png`,
    caption:
      'This figure tracks how regional crude death rates changed over time.',
  },
  {
    id: 'figure-23',
    title: 'Figure 23. Regional Total Gun-Related Death Trends',
    image: `${IMG_BASE}figure_23_regional_total_deaths_trends.png`,
    caption:
      'This figure compares long-term regional movement in total gun-related deaths.',
  },
  {
    id: 'figure-24',
    title: 'Figure 24. Regional Crude Gun-Related Death Rate: 2000 vs 2019',
    image: `${IMG_BASE}figure_24_regional_crude_rate_2000_vs_2019.png`,
    caption:
      'This figure compares regional crude death rates at the start and end of the study period.',
  },
  {
    id: 'figure-25',
    title: 'Figure 25. Regional Gun-Related Deaths: 2000 vs 2019',
    image: `${IMG_BASE}figure_25_regional_deaths_2000_vs_2019.png`,
    caption:
      'This figure compares regional totals in gun-related deaths between 2000 and 2019.',
  },
]

export const policyCards = [
  {
    title: 'Lower-rate states with stricter firearm policy profiles',
    states: ['Massachusetts', 'New Jersey', 'Hawaii', 'New York'],
    points: [
      'Purchaser licensing or permit-to-purchase frameworks',
      'Stronger background check systems',
      'Safe-storage requirements',
      'Child-access prevention laws',
      'Stricter regulation of public carry',
      'Broader sales regulation',
    ],
  },
  {
    title: 'Higher-rate states with more permissive firearm policy profiles',
    states: ['Wyoming', 'Mississippi', 'Alabama', 'Louisiana', 'Alaska'],
    points: [
      'Weaker purchaser screening systems',
      'Fewer waiting period requirements',
      'More permissive concealed carry environments',
      'Weaker safe-storage controls in some cases',
      'Weaker child-access prevention controls in some cases',
    ],
  },
]

export const manifestItems = [
  {
    label: 'Website Type',
    value: 'Frontend-only academic visualization site',
  },
  {
    label: 'Built With',
    value: 'React, Vite, Tailwind CSS',
  },
  {
    label: 'Content Type',
    value: 'Static figures and descriptive interpretation',
  },
  {
    label: 'Figures Included',
    value: '25',
  },
  {
    label: 'Repository',
    value: 'GitHub-hosted project repository',
  },
  {
    label: 'Deployment',
    value: 'Published through GitHub Pages',
  },
]
