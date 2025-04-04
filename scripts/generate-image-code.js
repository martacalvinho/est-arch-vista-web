/**
 * This script scans the project folders in the public directory and generates
 * the code needed to update the imageUtils.ts file for all projects.
 * 
 * Run this with: node scripts/generate-image-code.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const PROJECTS_DIR = path.join(PUBLIC_DIR, 'projects');
const OUTPUT_FILE = path.join(__dirname, 'project-images-output.txt');

// Generate code for imageUtils.ts
function generateImageMapCode() {
  const projectFolders = fs.readdirSync(PROJECTS_DIR)
    .filter(folder => folder.startsWith('project') && 
            fs.statSync(path.join(PROJECTS_DIR, folder)).isDirectory());

  let codeOutput = 'const projectImageMap: Record<number, string[]> = {\n';
  
  for (const folder of projectFolders) {
    // Extract project ID from folder name (project1 -> 1)
    const projectId = folder.replace('project', '');
    if (!projectId.match(/^\d+$/)) continue; // Skip if not a proper project folder
    
    const projectPath = path.join(PROJECTS_DIR, folder);
    const imageFiles = fs.readdirSync(projectPath)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
      });
    
    if (imageFiles.length === 0) continue; // Skip if no images
    
    codeOutput += `  ${projectId}: [\n`;
    for (const image of imageFiles) {
      codeOutput += `    '/projects/${folder}/${image}',\n`;
    }
    codeOutput += '  ],\n';
  }
  
  codeOutput += '  // Add more projects as you add images to them\n};';
  
  return codeOutput;
}

// Generate code for updating Projects.tsx
function generateProjectsCode() {
  const projectFolders = fs.readdirSync(PROJECTS_DIR)
    .filter(folder => folder.startsWith('project') && 
            fs.statSync(path.join(PROJECTS_DIR, folder)).isDirectory());
  
  let codeOutput = '// Add this to your Projects.tsx file\n';
  codeOutput += '// Replace the imageSrc property for each project\n\n';
  
  for (const folder of projectFolders) {
    // Extract project ID from folder name (project1 -> 1)
    const projectId = folder.replace('project', '');
    if (!projectId.match(/^\d+$/)) continue;
    
    const projectPath = path.join(PROJECTS_DIR, folder);
    const imageFiles = fs.readdirSync(projectPath)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
      });
    
    if (imageFiles.length === 0) continue;
    
    // Get the first image or one named main.* if it exists
    let mainImage = imageFiles.find(img => img.startsWith('main.')) || imageFiles[0];
    
    codeOutput += `// For Project ${projectId}\n`;
    codeOutput += `imageSrc: '/projects/${folder}/${mainImage}',\n\n`;
  }
  
  return codeOutput;
}

try {
  // Generate the code
  const imageMapCode = generateImageMapCode();
  const projectsCode = generateProjectsCode();
  
  // Combine and save to output file
  const fullOutput = 
`// Generated Image Map Code for imageUtils.ts
// Replace the projectImageMap object with this code:

${imageMapCode}

// -----------------------------------------

${projectsCode}

// -----------------------------------------
// After updating the code, make sure to:
// 1. Update imageUtils.ts with the projectImageMap
// 2. Update Projects.tsx with the imageSrc properties
// -----------------------------------------
`;

  fs.writeFileSync(OUTPUT_FILE, fullOutput);
  console.log(`Generated code has been written to: ${OUTPUT_FILE}`);
  console.log('Copy and paste the relevant sections into your code files.');
} catch (error) {
  console.error('Error generating code:', error);
}
