import * as dotenv from 'dotenv';
dotenv.config();
import figlet from 'figlet';
import { Command } from 'commander';
import hexToRgb from './utils/hexToRgb';
import { supabase } from './lib/supabase';

const hexColour = '#00fe49';
const titleText = figlet.textSync('Stasia CLI', {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
});

const commander = new Command();
commander.version('0.0.1');
commander.description('A CLI tool to interface with Stasia');
commander.option('-h, --help', 'Display help');
commander.parse(process.argv);

const args = process.argv.slice(2) as string[];

if (args.length === 0) {
    console.log(`\u001b[38;2;${hexToRgb(hexColour)}m${titleText}\u001b[0m`);
    commander.help();
}
else
{
    // Switch statement for checking the type.
    switch (args[0])
    {
        case 'me':
            supabase.auth.getSession().then(async res => {
                console.log(res);
            });
            break;
        case 'login':
            // loginto supabase
            console.log(`\u001b[38;2;${hexToRgb(hexColour)}m${titleText}\u001b[0m`);
            // read from stdin without readlinesync USER TYPES THE INPUT
            const email = args[1] ?? '';
            const password = args[2] ?? '';
            console.log(process.argv);

            if (email && password)
            {
                supabase.auth.signInWithPassword({
                    email: email,
                    password: password
                }).then(async res => {
                    console.log(res);
                });
            }
            else
            {
                console.log('Invalid username or password.');
            }
            break;
        case 'setup':
            console.log('SETUP!!!');
            break;
        case 'projects':
            console.log('PROJECTS!!!');
            break;
        default:
            console.log(`\u001b[38;2;${hexToRgb(hexColour)}m${titleText}\u001b[0m`);
            commander.help();
    }
}