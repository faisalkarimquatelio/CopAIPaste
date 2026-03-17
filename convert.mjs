import fs from 'fs';
import path from 'fs';

function htmlToJsx(html) {
  let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--[\s\S]*?-->/g, '')
    // Replace inline styles with objects
    .replace(/style="([^"]*)"/g, (match, styleString) => {
      const styleObj = {};
      styleString.split(';').forEach(rule => {
        if (!rule.trim()) return;
        const parts = rule.split(':');
        if (parts.length >= 2) {
          const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
          let value = parts.slice(1).join(':').trim();
          value = value.replace(/&quot;/g, "'"); 
          styleObj[key] = value;
        }
      });
      return `style={${JSON.stringify(styleObj)}}`;
    })
    // Self-closing tags that are void in HTML
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<br([^>]*[^\/])?>/g, '<br />')
    .replace(/<hr([^>]*[^\/])?>/g, '<hr />')
    // SVG and ARIA attributes
    .replace(/ stroke-width=/g, ' strokeWidth=')
    .replace(/ stroke-linecap=/g, ' strokeLinecap=')
    .replace(/ stroke-linejoin=/g, ' strokeLinejoin=')
    .replace(/ fill-rule=/g, ' fillRule=')
    .replace(/ clip-rule=/g, ' clipRule=')
    .replace(/ tabindex=/g, ' tabIndex=')
    .replace(/ viewBox=/g, ' viewBox=');

  return jsx;
}

const filesToConvert = [
  { in: 'bi_analytics.html', out: 'BiAnalyticsPage.tsx', comp: 'BiAnalyticsPage' },
  { in: 'ai_discovery.html', out: 'AiDiscoveryPage.tsx', comp: 'AiDiscoveryPage' },
  { in: 'settings.html', out: 'SettingsPage.tsx', comp: 'SettingsPage' },
];

for (const file of filesToConvert) {
  if (!fs.existsSync(file.in)) continue;
  const html = fs.readFileSync(file.in, 'utf-8');

  const mainMatch = html.match(/<aside[\s\S]*?<\/aside>/);
  const mainContentMatch = html.match(/<main[\s\S]*?<\/main>/);

  if (mainMatch && mainContentMatch) {
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/body>/);
    if (rootMatch) {
       let rootContent = rootMatch[1];
       rootContent = rootContent.replace(/<\/div>\s*$/, '');
       let fullJsx = htmlToJsx(rootContent);
       
       const componentCode = `import React, { useState } from 'react';

const ${file.comp}: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      ${fullJsx}
    </>
  );
};

export default ${file.comp};
`;
      fs.writeFileSync(`src/${file.out}`, componentCode);
      console.log(`Successfully generated src/${file.out}`);
    }
  } else {
    console.log(`Could not find required tags in ${file.in}`);
  }
}
