const Loner = require("../../utlis/Loner.js");

module.exports = {
  name: "create",
  alias: [],
  description: "get started",
  execute(message, args, cmd, client, Discord) {
    if(Loner.checkUser(message.author) == true) return message.reply("Looks like you already did this.");

    Loner.createUser(message.author);
    message.reply("Done!");
  }
};