import { createGSSPFactory, type ServerPageContext } from "nextjs-effector";
import { createEvent, sample } from "effector";

export const slaveGSSP = createGSSPFactory({
  sharedEvents: []
})