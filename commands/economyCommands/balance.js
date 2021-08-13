const Loner = require("../../utlis/Loner.js");

module.exports = {
  name: "balance",
  alias: ["bal", "wallet"],
  description: "check your balance",
  execute(message, args, cmd, client, Discord) {
    if(Loner.checkUser(message.author) == false) return message.channel.send("Do `!create` to get started.");

    Loner.getUser(message.author, function(userres) {
      message.channel.send(userres.coins.toString());
    });
  }
};