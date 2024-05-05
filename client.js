const {Telegraf} = require("telegraf");
const config = require('./configs/config.js');
const variable = require('./configs/variables.js')
const client = new Telegraf(config.TOKEN);

const ciSearch = require('./src/commands/utilities/guessNumber.js')

client.start((ctx) => {
    ctx.reply(`Hola!!! ${ctx.from.first_name}`)
    ctx.reply(variable.startMsg[Math.floor(Math.random()*(2 - 0 + 1)+ 0)]);
});

//help
client.help((ctx) =>{
    ctx.reply(variable.listOfCommands)
})

// Commands
client.command(['CI', 'Ci', 'ci'], (ctx) => guessNumber(ctx)); 

//ping!
client.command(['ping', 'Ping'], (ctx, msg) =>{
    ctx.reply('Pong!')
})



client.launch()


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

