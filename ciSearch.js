module.exports = (ctx) => {
    if(ctx.payload !== ""){
        console.log(ctx.payload)
        ctx.reply('Searching...')
    }else{
        ctx.reply("CI not founded, insert a valid CI")
    }
}

