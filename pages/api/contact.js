import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://mabdellatif411:sWVnxjNU9YN2Mwnw@cluster0.hybw0wo.mongodb.net/my-blog?retryWrites=true&w=majority&appName=Cluster0";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(MONGODB_URI);
    } catch (error) {
      res.status(501).json({ message: "Could not connect to database" });
      return;
    }
    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Storing message failed" });
    }

    client.close();

    res.status(201).json({
      message: "Successfully stored message!",
      message: newMessage,
    });
  }
};

export default handler;
