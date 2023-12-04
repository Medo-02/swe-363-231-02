const fs = require('fs');
const path = require('path');
const commander = require('commander');

//Determine the options of the commandline
commander
  .option('-s, --source <sourceDir>', 'Source directory')
  .option('-t, --target <targetDir>', 'Target directory')
  .option('-e, --extensions <extensions>', 'File extensions to filter')

//Parse the options to the commander then assign it to the program that will
//handle the acitons
commander.parse();
const program = commander.opts();

// Check if required options are provided
console.log(program.source)
if (!program.source || !program.target) {
  console.error('Error: Source and target directories are required.');
  process.exit(1);
}

// Read the contents of the source directory
//if the directory exists create new file if needed
fs.readdir(program.source, (err, files) => {
  if (err) {
    console.error(`Error reading source directory: ${err}`);
  } else {

    if (!fs.existsSync(program.target)) {
        fs.mkdirSync(program.target);
      }

      //Determine the extensions
      const allowedExtensions = program.extensions.split(',');
    
      // Filter for files with specific extensions
      const filteredFiles = files.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return allowedExtensions.includes(ext);
      });
      
      //Select the files
      filteredFiles.forEach((file) => {
        const sourcePath = path.join(program.source, file);
        const targetPath = path.join(program.target, file);
    
        // Copy the file with error handling
        fs.copyFile(sourcePath, targetPath, (err) => {
          if (err) {
            console.error(`Error copying file: ${err}`);
          } else {
            console.log(`Copied: ${file}`);
          }
        });
      });
  }
});
