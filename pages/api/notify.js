export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      title: "Hello!",
      body: "This is a test push 🚀"
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}