import { Elysia } from "elysia";
import { getTravelRecords } from "./get";
import { postTravelRecord } from "./post";
import { getPartners } from "./getPartners";

export const records = new Elysia({ prefix: "/records" })
  .use(getTravelRecords)
  .use(postTravelRecord)
  .use(getPartners);
