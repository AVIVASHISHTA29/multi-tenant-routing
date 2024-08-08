// pages/api/subdomain.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  content: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const hostname = req.headers.host || "";
  const subdomain = hostname.split(".")[0];

  if (subdomain === "blogs") {
    res.status(200).json({ content: "This is the blogs subdomain" });
  } else if (subdomain === "app") {
    res.status(200).json({ content: "This is the app subdomain" });
  } else if (subdomain === "pg") {
    res.status(200).json({ content: "This is the pg subdomain" });
  } else {
    res.status(200).json({ content: "This is the primary domain" });
  }
}
