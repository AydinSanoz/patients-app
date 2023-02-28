import connectDB from "../../../database/conn";
import { DELETEBYID, GETBYID, PUT } from "../../../database/controller";

export default async function handler(req, res) {
  connectDB().catch((err) => console.log(err));

  const { method } = req;
  const { patientId } = req.query;

  switch (method) {
    case "GET":
      GETBYID(req, res);
      break;
    case "DELETE":
      DELETEBYID(req, res);
      break;
    case "PUT":
      PUT(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
}
