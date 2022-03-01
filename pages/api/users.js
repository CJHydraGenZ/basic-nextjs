// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect } from "../../utils/db";
import { User } from "../../models/usersSchema";
export default async function handler(req, res) {
  await connect();

  switch (req.method) {
    case "GET":
      // console.log(req.method);
      const user = await User.find();
      res.status(200).json(user);
      break;
    case "POST":
      const userPost = await User.create({
        name: req.body.name,
        password: req.body.password,
      });
      res.status(200).json(userPost);
      break;

    default:
      res.status(200).json({ msg: "belum tersedian" });
      break;
  }
  // if (req.method === "POST") {
  // } else {
  //   throw new Error("http method tidak suport di link ini");
  // }
  // if (req.method === "GET") {
  //   const user = await User.find();
  //   res.status(200).json(user);
  // } else {
  //   throw new Error("http ini tidak bisa di get");
  // }
}
