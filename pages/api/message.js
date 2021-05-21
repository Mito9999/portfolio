import axios from "axios";

const discordWebookUrl =
  "https://discord.com/api/webhooks/845393858006876200/2vzH-gltHQG67dwlDddIp5yDRoVphtySVR02tsLtDiq63fBuFgeckZGL7mLLeacw7y8C";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const now = new Date();
      const { name, email, subject, message } = req.body;
      const discordEmbed = {
        username: "mito9999",
        avatar_url: "https://avatars.githubusercontent.com/u/58613559",
        content: "<@570383339811504159>",
        embeds: [
          {
            title: "Contact Form",
            url: "https://mito9999.vercel.app/contact",
            color: 15548997,
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Email", value: email, inline: true },
              { name: "Subject", value: subject },
              { name: "Message", value: message },
            ],
            footer: {
              text:
                now.toLocaleDateString() + " at " + now.toLocaleTimeString(),
            },
          },
        ],
      };

      await axios.post(discordWebookUrl, discordEmbed);

      res.status(200).json({ msg: "Message Sent." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  }
}
