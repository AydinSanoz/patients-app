import connectDB from "@/database/conn";
import { DELETE, GET, POST, PUT } from "@/database/controller";

export default async function handler(req, res) {
  connectDB().catch((err) => console.log(err));

  const { method } = req;

  switch (method) {
    case "GET":
      GET(req, res);
      break;
    case "POST":
      POST(req, res);
      break;
    case "PUT":
      PUT(req, res);
      break;
    case "DELETE":
      DELETE(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method : ${method} not allowed`);
      break;
  }
}
