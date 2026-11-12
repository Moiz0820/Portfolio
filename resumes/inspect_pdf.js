import fs from 'fs';

// Let's check where the second page starts in the PDF text
const buf = fs.readFileSync('resumes/Moiz_Anwar_Data_Analyst_Resume.pdf', 'utf-8');
console.log('PDF length:', buf.length);
// Let's see what stream objects exist
const streams = buf.match(/stream[\s\S]*?endstream/g);
console.log('Stream count:', streams ? streams.length : 0);
