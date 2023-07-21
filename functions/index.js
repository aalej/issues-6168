import {
  beforeUserCreated,
  beforeUserSignedIn,
} from "firebase-functions/v2/identity";
import { logger } from "firebase-functions";

export const beforecreated = beforeUserCreated((event) => {
  logger.info(" ------------- beforeUserCreated -------------- ");
  logger.info(event);
  return;
});

export const beforesignedin = beforeUserSignedIn((event) => {
  logger.info(" ------------- beforeUserSignedIn --------------- ");
  logger.info(event);
});
