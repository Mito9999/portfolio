import Discord from "discord.js";
const client = new Discord.Client();

let isReady = false;
let channel;
client.on("ready", () => {
  isReady = true;
  channel = client.channels.cache.get("820419455405260830");
});

client.login("ODQzNTkyMjczNDUxNDE3NjQx.YKGGhw.HX4ADGByOp9MXCHzoxRkqSJYMHQ");

export default async function handler(req, res) {
  const main = () => {
    try {
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Test")
        .setURL("https://mito9999.vercel.app/contact")
        .addFields(
          { name: "Name", value: "John Smith" },
          { name: "Email", value: "test@gmail.com" },
          { name: "Subject", value: "React.js Project Inquiry" },
          {
            name: "Message",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, lectus at hendrerit rhoncus, turpis lacus lacinia elit, quis accumsan justo erat lacinia orci. Nullam pellentesque mi ut lectus laoreet interdum. Vivamus nibh odio, aliquam eget feugiat ut, mollis in ligula. Fusce pharetra purus rutrum turpis viverra auctor. Suspendisse vitae leo non nulla hendrerit molestie eu vestibulum eros. Nulla in volutpat lectus. Suspendisse potenti. Nulla dictum tellus vel lorem consequat ornare. Donec vitae efficitur diam, at aliquet nunc.",
          }
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
