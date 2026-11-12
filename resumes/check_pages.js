import fs from 'fs';

const files = [
  'resumes/Moiz_Anwar_Data_Analyst_Resume.pdf',
  'resumes/Moiz_Anwar_Business_Analyst_Resume.pdf',
  'resumes/Moiz_Anwar_Business_Finance_Analyst_Resume.pdf',
  'resumes/Moiz_Anwar_AI_Data_Science_Resume.pdf'
];

for (const f of files) {
  const content = fs.readFileSync(f, 'latin1');
  const matches = content.match(/\/Type\s*\/Page\b/g);
  console.log(`${f}: ${matches ? matches.length : 'unknown'} page(s)`);
}
