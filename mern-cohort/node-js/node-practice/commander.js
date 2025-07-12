// using cli package commander to create cli 
const { Command } = require('commander');
const program = new Command;
const fs = require('fs');

program
    .name('Counter app')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of words in a file')
    .argument('<file>', 'input the file path')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) =>{
            if(err){
                console.log(err);
            }else{
                const words = data.split(" ").length
                console.log(`there are ${ words} words in ${file}`)
            }
        });
    });

program.parse();