const { Client, Intents } = require("discord.js");
const fs = require("fs");
require("dotenv");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Client.Collection();

loadCommands(client.commands, "./commands");
console.log("Loaded Commands");

function loadCommands(collection, directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const path=`${directory}/${file}`;

    if(file.endsWith(".js")) {
      const command = require(path);
      collection.set(command.name, command);
    }
    else if(fs.lstatSync(path).isDirectory()) {
      loadCommands(collection, path);
    }
  }
}

client.login(process.env.TOKEN);