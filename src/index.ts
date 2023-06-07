import * as figlet from 'figlet';
import { Command } from 'commander';
import hexToRgb from './utils/hexToRgb';

const hexColour = '#00fe49';
const titleText = figlet.textSync('Stasia CLI', {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
});

console.log(`\u001b[38;2;${hexToRgb(hexColour)}m${titleText}\u001b[0m`);

const commander = new Command();
commander.version('0.0.1');
commander.description('A CLI tool to interface with Stasia');
commander.option('-h, --help', 'Display help');
commander.option('-l, --login', 'Login to Stasia');
commander.parse(process.argv);
// Now print out the help text

const options = commander.opts();

// If --login flag, console log
if (options.login) {
    console.log('Logging in...');
}