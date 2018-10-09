export const meta = {
  title: `Tip Calculator`,
  description: `Tip Calculator – a single page React app built with Next.js, `
  + `Rebass, and Styled-components; deployed to now.sh with Docker.`,
}

export const initModel = {
  amount: 0,
  tipPercentage: 15,
  tip: 0,
  total: 0,
  showTipInput: false,
}

export const PERCENTAGES = [10, 15, 20, 25]