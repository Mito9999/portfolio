import Discord from "discord.js";
const client = new Discord.Client();

let channel;
let isReady = false;
client.on("ready", () => {
  channel = client.channels.cache.get("820419455405260830");
  isReady = true;
});

client.login(process.env.DISCORD_BOT_TOKEN.replace(/<###>/g, ""));

export default async function handler(req, res) {
  if (req.method === "POST") {
    const main = () => {
      try {
        const { name, email, subject, message } = req.body;
        const exampleEmbed = new Discord.MessageEmbed()
          .setColor("#E53E3E")
          .setTitle("Contact Form")
          .setURL("https://mito9999.vercel.app/contact")
          .addFields(
            { name: "Name", value: name },
            { name: "Email", value: email },
            { name: "Subject", value: subject },
            { name: "Message", value: message }
          )
          .setTimestamp(new Date());

        channel.send(exampleEmbed);
        res.status(200).json({ msg: "Message Sent." });
      } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error" });
      }
    };

    let i = 0;
    if (!isReady) {
      const checkerId = setInterval(() => {
        if (isReady) {
          main();
          clearInterval(checkerId);
        } else {
          i++;
        }
      }, 250);
    } else {
      main();
    }
  }
}
