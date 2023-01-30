import React from "react";
const data = {
  health2010: {
    "HIV Incidences": "2,370,918",
    "Dementia Incidences": "5,275,998",
    "Tuberculosis Incidences": "161",
    "Polio Incidences": "1,412",

    "Infant Mortality": "37.2 per 1,000 births",
  },

  health2011: {
    "HIV Incidences": "2,342,046",
    "Dementia Incidences": "5,462,760",
    "Tuberculosis Incidences": 158,
    "Polio Incidences": 716,

    "Infant Mortality": "36 per 1,000 births",
  },

  health2012: {
    "HIV Incidences": "2,314,238",
    "Dementia Incidences": "5,665,887",
    "Tuberculosis Incidences": 155,
    "Polio Incidences": 293,

    "Infant Mortality": "35 per 1,000 births",
  },

  health2013: {
    "HIV Incidences": "2,285,709",
    "Dementia Incidences": "5,877,640",
    "Tuberculosis Incidences": 152,

    "Polio Incidences": 481,

    "Infant Mortality": "33 per 1,000 births",
  },

  health2014: {
    "HIV Incidences": "2,265,234",
    "Dementia Incidences": "6,094,468",
    "Tuberculosis Incidences": 149,

    "Polio Incidences": 415,

    "Infant Mortality": "32 per 1,000 births",
  },

  health2015: {
    "HIV Incidences": "2,243,665",
    "Dementia Incidences": "6,310,571",
    "Tuberculosis Incidences": 150,

    "Polio Incidences": 106,

    "Infant Mortality (per 1,000 births)": 31,
  },

  health2016: {
    "HIV Incidences": "2,196,714",
    "Dementia Incidences": "6,550,073",
    "Tuberculosis Incidences": 145,

    "Polio Incidences": 42,

    "Infant Mortality": "30 per 1,000 births",
  },

  health2017: {
    "HIV Incidences": "2,131,659",
    "Dementia Incidences": "6,794,975",
    "Tuberculosis Incidences": 141,
    "Polio Incidences": 118,

    "Infant Mortality": "29 per 1,000 births",
  },

  health2018: {
    "HIV Incidences": "2,042,488",
    "Dementia Incidences": "7,018,467",
    "Tuberculosis Incidences": 137,
    "Polio Incidences": 138,

    "Infant Mortality": "29 per 1,000 births",
  },

  health2019: {
    "HIV Incidences": "1,989,282",
    "Dementia Incidences": "7,236,385",
    "Tuberculosis Incidences": 134,
    "Polio Incidences": 554,

    "Infant Mortality": "28 per 1,000 births",
  },

  health2020: {
    "HIV Incidences": "",
    "Dementia Incidences": "",
    "Tuberculosis Incidences": 129,
    "Polio Incidences": "1,253",

    "Infant Mortality": "27 per 1,000 births",
  },

  energy2010: {
    "Renewable Energy": "19.41% of GEP",
    "Wind Power": "1.6% of GEP",
    "Solar Power": "0.16% of GEP",
    "Natural Gas": "22.7% of GEP",
  },
  energy2011: {
    "Renewable Energy": "19.8% of GEP",
    "Wind Power": "1.98% of GEP",
    "Solar Power": "0.29% of GEP",
    "Natural Gas": "22.2% of GEP",
  },
  energy2012: {
    "Renewable Energy)": "20.6% of GEP",
    "Wind Power": "2.32% of GEP",
    "Solar Power": "0.45% of GEP",
    "Natural Gas": "23% of GEP",
  },
  energy2013: {
    "Renewable Energy": "21.5% of GEP",
    "Wind Power": "2.71% of GEP",
    "Solar Power": "0.59% of GEP",
    "Natural Gas": "21.9% of GEP",
  },
  energy2014: {
    "Renewable Energy": "22% of GEP",
    "Wind Power": "2.93% of GEP",
    "Solar Power": "0.82% of GEP",
    "Natural Gas": "21.9% of GEP",
  },
  energy2015: {
    "Renewable Energy": "22.7% of GEP",
    "Wind Power": "3.42% of GEP",
    "Solar Power": "1.05% of GEP",
    "Natural Gas": "23.1% of GEP",
  },
  energy2016: {
    "Renewable Energy": "23.5% of GEP",
    "Wind Power": "3.86% of GEP",
    "Solar Power": "1.31% of GEP",
    "Natural Gas": "23.5% of GEP",
  },
  energy2017: {
    "Renewable Energy": "24.4% of GEP",
    "Wind Power": "4.45% of GEP",
    "Solar Power": "1.74% of GEP",
    "Natural Gas": "23.2% of GEP",
  },
  energy2018: {
    "Renewable Energy": "25% of GEP",
    "Wind Power": "4.76% of GEP",
    "Solar Power": "2.16% of GEP",
    "Natural Gas": "23.3% of GEP",
  },
  energy2019: {
    "Renewable Energy": "26% of GEP",
    "Wind Power": "5.25% of GEP",
    "Solar Power": "2.6% of GEP",
    "Natural Gas": "23.7% of GEP",
  },
  energy2020: {
    "Renewable Energy": " 27.9 % of GEP",
    "Wind Power": "5.94% of GEP",
    "Solar Power": "3.15% of GEP",
    "Natural Gas": "23.7% of GEP",
  },
  climate2010: {
    "Electric Cars": "0% new sales",
    Deforestation: "31.5%",
    "CO2 Emissions": "3.34 billion tons",
    "Methane Emissions": "7.91 million tons",
  },
  climate2011: {
    "Electric Cars": "0.11% new sales",
    Deforestation: "31.5%",
    "CO2 Emissions": "3.45 billion tons",
    "Methane Emissions": "8.05 million tons",
  },
  climate2012: {
    "Electric Cars": "0.19% new sales",
    Deforestation: "31.5%",
    "CO2 Emissions": "3.5 billion tons",
    "Methane Emissions": "8.14 million tons",
  },
  climate2013: {
    "Electric Cars": "0.31% new sales",
    Deforestation: "31.4%",
    "CO2 Emissions": "3.53 billion tons",
    "Methane Emissions": "8.11 million tons",
  },
  climate2014: {
    "Electric Cars": "0.41% new sales",
    Deforestation: "31.4%",
    "CO2 Emissions": "3.56 billion tons",
    "Methane Emissions": "8.27 million tons",
  },
  climate2015: {
    "Electric Cars": "0.68% new sales",
    Deforestation: "31.3%",
    "CO2 Emissions": "3.56  billion tons",
    "Methane Emissions": "8.32 million tons",
  },
  climate2016: {
    "Electric Cars": "0.89% new sales",
    Deforestation: "31.3,%",
    "CO2 Emissions": "3.55 billion tons",
    "Methane Emissions": "8.23 million tons",
  },
  climate2017: {
    "Electric Cars": "1.39% new sales",
    Deforestation: "31.3%",
    "CO2 Emissions": "3.61 billion tons",
    "Methane Emissions": "8.33 million tons",
  },
  climate2018: {
    "Electric Cars": "2.25% new sales",
    Deforestation: "31.2%",
    "CO2 Emissions": "3.68 billion tons",
    "Methane Emissions": "8.49 million tons",
  },
  climate2019: {
    "Electric Cars": "2.66% new sales",
    Deforestation: "31.2%",
    "CO2 Emissions": "3.71 billion tons",
    "Methane Emissions": "8.61 million tons",
  },
  climate2020: {
    "Electric Cars": "4.26% new sales",
    Deforestation: "31.2%",
    "CO2 Emissions": "3.53 billion tons",
    "Methane Emissions": "",
  },
  education2010: {
    "Human Development Index": "0.697",
    "Global Literacy Rate": "84.02%",
    "Children Not in Primary School": "8.87%",
    "Expected Years of Schooling": 11.73,
  },
  education2011: {
    "Human Development Index": 0.704,
    "Global Literacy Rate": "84.3%",
    "Children Not in Primary School": "8.89%",
    "Expected Years of Schooling": 11.96,
  },
  education2012: {
    "Human Development Index": 0.709,
    "Global Literacy Rate": "84.7%",
    "Children Not in Primary School": "8.62%",
    "Expected Years of Schooling": 12.11,
  },
  education2013: {
    "Human Development Index": 0.714,
    "Global Literacy Rate": "84.9%",
    "Children Not in Primary School": "8.37%",
    "Expected Years of Schooling": 12.26,
  },
  education2014: {
    "Human Development Index": 0.72,
    "Global Literacy Rate": "85.4%",
    "Children Not in Primary School": "8.78%",
    "Expected Years of Schooling": 12.42,
  },
  education2015: {
    "Human Development Index": 0.724,
    "Global Literacy Rate": "85.5%",
    "Children Not in Primary School": "8.99%",
    "Expected Years of Schooling": 12.53,
  },
  education2016: {
    "Human Development Index": 0.729,
    "Global Literacy Rate": "86%",
    "Children Not in Primary School": "8.8%",
    "Expected Years of Schooling": 12.69,
  },
  education2017: {
    "Human Development Index": 0.733,
    "Global Literacy Rate": "86.2%",
    "Children Not in Primary School": "8.78%",
    "Expected Years of Schooling": 12.71,
  },
  education2018: {
    "Human Development Index": 0.736,
    "Global Literacy Rate": "86.3%",
    "Children Not in Primary School": "8.55%",
    "Expected Years of Schooling": 12.71,
  },
  education2019: {
    "Human Development Index": 0.739,
    "Global Literacy Rate": "86.5%",
    "Children Not in Primary School": "8.64%",
    "Expected Years of Schooling": 12.73,
  },
  education2020: {
    "Human Development Index": 0.735,
    "Global Literacy Rate": "86.7%",
    "Children Not in Primary School": " 8.76%",
    "Expected Years of Schooling": 12.8,
  },

  economy2010: {
    "GDP per Capita": "$13,892 USD",
    "Foreign Aid": "$1.28 billion USD",
    "Economic Freedom": 59.4,
    "Economic Growth (GDP)": 6.49,
  },
  economy2011: {
    "GDP per Capita": "$14,260 USD",
    "Foreign Aid": "$1.39 billion USD",
    "Economic Freedom": 59.4,
    "Economic Growth (GDP)": 6.7,
  },
  economy2012: {
    "GDP per Capita (USD)": "$14,528 USD",
    "Foreign Aid": "$1.33 billion USD",
    "Economic Freedom": 59.5,
    "Economic Growth (GDP)": 6.88,
  },
  economy2013: {
    "GDP per Capita (USD)": "$14,824 USD",
    "Foreign Aid": "$1.51 billion USD",
    "Economic Freedom": 59.6,
    "Economic Growth (GDP)": 7.08,
  },
  economy2014: {
    "GDP per Capita (USD)": "$15,149 USD",
    "Foreign Aid": "$1.61 billion USD",
    "Economic Freedom": 60.3,
    "Economic Growth (GDP)": 7.29,
  },
  economy2015: {
    "GDP per Capita (USD)": "$15,480 USD",
    "Foreign Aid": "$1.46 billion USD",
    "Economic Freedom": 60.4,
    "Economic Growth (GDP)": 7.52,
  },
  economy2016: {
    "GDP per Capita (USD)": "$15,803 USD",
    "Foreign Aid": "$1.58 billion USD",
    "Economic Freedom": 60.7,
    "Economic Growth (GDP)": 7.73,
  },
  economy2017: {
    "GDP per Capita (USD)": "$16,211 USD",
    "Foreign Aid": "$1.64 billion USD",
    "Economic Freedom": 60.9,
    "Economic Growth (GDP)": 7.99,
  },
  economy2018: {
    "GDP per Capita (USD)": "$16,607 USD",
    "Foreign Aid": "$1.66 billion USD",
    "Economic Freedom": 61.1,
    "Economic Growth (GDP)": 8.25,
  },
  economy2019: {
    "GDP per Capita (USD)": "$16,897 USD",
    "Foreign Aid": "$1.62 billion USD",
    "Economic Freedom": 60.8,
    "Economic Growth (GDP)": 8.47,
  },
  economy2020: {
    "GDP per Capita (USD)": "$16,185 USD",
    "Foreign Aid": "$1.94 billion USD",
    "Economic Freedom": 61.6,
    "Economic Growth (GDP)": 8.19,
  },

  lifeQuality2010: {
    "Access to Internet": "29%",
    "Basic Drinking Water": "86.2%",
    "Safely Managed Sanitation": "40%",
    "Life Expectancy": "70.1 years",

    "Happy Planet Index": 43.6,
  },
  lifeQuality2011: {
    "Access to Internet": "31%",
    "Basic Drinking Water": "86.5%",
    "Safely Managed Sanitation": "41.3%",
    "Life Expectancy": "70.5 years",

    "Happy Planet Index": 44,
  },
  lifeQuality2012: {
    "Access to Internet": "34%",
    "Basic Drinking Water": "86.9%",
    "Safely Managed Sanitation": "42.8%",
    "Life Expectancy": "70.9 years",

    "Happy Planet Index": 44.1,
  },
  lifeQuality2013: {
    "Access to Internet": "36%",
    "Basic Drinking Water": "87.4%",
    "Safely Managed Sanitation": "44.2%",
    "Life Expectancy": "71.2 years",

    "Happy Planet Index": 44,
  },
  lifeQuality2014: {
    "Access to Internet": "38%",
    "Basic Drinking Water": "87.8%",
    "Safely Managed Sanitation": "45.7%",
    "Life Expectancy": "71.6 years",

    "Happy Planet Index": 44.6,
  },
  lifeQuality2015: {
    "Access to Internet": "40%",
    "Basic Drinking Water": "88.2%",
    "Safely Managed Sanitation": "47.1%",
    "Life Expectancy": "71.8 years",
    "Happy Planet Index": 44.3,
  },
  lifeQuality2016: {
    "Access to Internet": "43%",
    "Basic Drinking Water": "88.6%",
    "Safely Managed Sanitation": "48.6%",
    "Life Expectancy": "72.1 years",
    "Happy Planet Index": 44.5,
  },
  lifeQuality2017: {
    "Access to Internet": "46%",
    "Basic Drinking Water": "88.9%",
    "Safely Managed Sanitation": "50.1%",
    "Life Expectancy": "72.3 years",
    "Happy Planet Index": 44.3,
  },
  lifeQuality2018: {
    "Access to Internet": "49%",
    "Basic Drinking Water": "89.3%",
    "Safely Managed Sanitation": "51.6%",
    "Life Expectancy": "72.6 years",
    "Happy Planet Index": 44.2,
  },
  lifeQuality2019: {
    "Access to Internet": "54%",
    "Basic Drinking Water": "89.7%",
    "Safely Managed Sanitation": "53.0%",
    "Life Expectancy": "72.8 years",
    "Happy Planet Index": 44.1,
  },
  lifeQuality2020: {
    "Access to Internet": "60%",
    "Basic Drinking Water": "90%",
    "Safely Managed Sanitation": "54%",
    "Life Expectancy ": "72 years",
    "Happy Planet Index": 46,
  },
};

export default data;
