import fs from 'fs';

for (const name of [
  'Moiz_Anwar_Data_Analyst_Resume.pdf',
  'Moiz_Anwar_Business_Analyst_Resume.pdf',
  'Moiz_Anwar_Business_Finance_Analyst_Resume.pdf',
  'Moiz_Anwar_AI_Data_Science_Resume.pdf'
]) {
  const buf = fs.readFileSync(`resumes/${name}`, 'latin1');
  // In PDF, /Type /Page (with exact whitespace and no 's') defines a page
  const pageMatches = buf.match(/\/Type\s*\/Page(?![a-zA-Z])/g);
  console.log(`${name}: ${pageMatches ? pageMatches.length : 0}`);
}
