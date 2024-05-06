import NodeCache from "node-cache";

export const tokenCache = new NodeCache({
  stdTTL: 3600,
  checkperiod: 60,
  useClones: false,
  deleteOnExpire: true,
});
