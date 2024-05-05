module.exports = (ctx) => {
    if(ctx.payload !== ""){
        if(ctx.payload === Math.floor(Math.random() * (5 - 1 + 1) + 1)){
            ctx.reply("You Win!!")
        } else{ ctx.reply("you lost ;C Try Again /guess" }
    }else{
        ctx.reply("CI not founded, insert a valid CI")
    }
}

