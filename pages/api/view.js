import axios from "axios";

const discordWebookUrl =
  "https://discord.com/api/webhooks/845405585562140724/ZtO2y12RZlRBOmgbuI21xH6ZXmYI7FjkUZCcsDdG16Vluw6ZEA2NtnmU1EY6DJ8ZxK6Q";
export default async function handler(req, res) {
  try {
    const now = new Date();
    const { path } = req.body;
    const discordEmbed = {
      username: "View",
      avatar_url: "https://avatars.githubusercontent.com/u/58613559",
      embeds: [
        {
          title: "New Page View",
          url: "https://mito9999.vercel.app" + path,
          fields: [{ name: "Path", value: path }],
          footer: {
            text: now.toLocaleDateString() + " at " + now.toLocaleTimeString(),
          },
        },
      ],
    };

    await axios.post(discordWebookUrl, discordEmbed);

    res.status(200).json({ msg: "Success" });
  } catch {
    res.status(500).json({ msg: "Error" });
  }
}
