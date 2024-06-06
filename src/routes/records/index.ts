import { Elysia } from "elysia";
import { getTravelRecords } from "./get";
import { postTravelRecord } from "./post";
import { getPartners } from "./getPartners";
import { addPartner } from "./addPartner";

export const records = new Elysia({ prefix: "/records" })
  .use(getTravelRecords)
  .use(postTravelRecord)
  .use(getPartners)
  .use(addPartner);
