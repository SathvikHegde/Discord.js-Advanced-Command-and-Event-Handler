// eslint-disable-next-line no-unused-vars
exports.run = (client, message, args) => {
  message.channel.send("pong!").catch(console.error);
};