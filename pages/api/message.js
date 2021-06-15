import { connectToDatabase } from "../../utils/notion";

const NOTION_NAME_ID = "title";
const NOTION_EMAIL_ID = "{r@t";
const NOTION_SUBJECT_ID = "beK>";
const NOTION_MESSAGE_ID = "^O`M";
const database_id = process.env.NOTION_DATABASE_ID;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, subject, message } = req.body;

      const notion = await connectToDatabase(database_id);

      notion.pages.create({
        parent: { database_id },
        properties: {
          [NOTION_NAME_ID]: {
            title: [{ type: "text", text: { content: name || "___" } }],
          },
          [NOTION_EMAIL_ID]: { email: email || "___@___" },
          [NOTION_SUBJECT_ID]: {
            rich_text: [{ type: "text", text: { content: subject || "___" } }],
          },
          [NOTION_MESSAGE_ID]: {
            rich_text: [{ type: "text", text: { content: message || "___" } }],
          },
        },
      });

      res.status(200).json({ msg: "Message Sent." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  }
}
