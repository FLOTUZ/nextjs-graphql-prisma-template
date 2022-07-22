import "reflect-metadata";

import { NextApiRequest, NextApiResponse } from "next";
import { startServer, apolloServer } from "../../graphql/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
