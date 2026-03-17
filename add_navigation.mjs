import fs from 'fs';

const pages = [
  'src/DashboardPage.tsx',
  'src/BiAnalyticsPage.tsx',
  'src/AiDiscoveryPage.tsx',
  'src/SettingsPage.tsx',
];

pages.forEach((pagePath) => {
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');

  // Add useNavigate import if it doesn't exist
  if (!content.includes('useNavigate')) {
    if (content.includes("import React")) {
      content = content.replace(/import React(.*?);/, "import React$1;\nimport { useNavigate } from 'react-router-dom';");
    } else {
      content = "import { useNavigate } from 'react-router-dom';\n" + content;
    }
  }

  // Add navigate initialization
  if (!content.includes('const navigate = useNavigate();')) {
     // match the component declaration
     content = content.replace(/(const \w+Page: React\.FC = \(\) => {)/, "$1\n  const navigate = useNavigate();");
  }

  // Replace buttons with onClick handlers
  content = content.replace(/<button([^>]*)title="xERPredict"([^>]*)>/g, '<button$1title="xERPredict" onClick={() => navigate("/dashboard")}$2>');
  content = content.replace(/<button([^>]*)title="AI Discovery"([^>]*)>/g, '<button$1title="AI Discovery" onClick={() => navigate("/ai-discovery")}$2>');
  content = content.replace(/<button([^>]*)title="BI Analytics Engine"([^>]*)>/g, '<button$1title="BI Analytics Engine" onClick={() => navigate("/bi-analytics")}$2>');
  content = content.replace(/<button([^>]*)title="Einstellungen"([^>]*)>/g, '<button$1title="Einstellungen" onClick={() => navigate("/settings")}$2>');

  fs.writeFileSync(pagePath, content);
  console.log(`Updated navigation in ${pagePath}`);
});
