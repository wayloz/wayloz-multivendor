/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 ******************************/

import * as Updates from "expo-updates";
import { useContext } from "react";
import { ConfigurationContext } from "./lib/context/global/configuration.context";

const getEnvVars = (env = Updates.channel) => {
  const configuration = useContext(ConfigurationContext);

  if (env === "production" || env === "staging") {
    return {
      GRAPHQL_URL: "https://wayloz-api-production.up.railway.app/graphql",
      WS_GRAPHQL_URL: "wss://wayloz-api-production.up.railway.app/graphql",
      SENTRY_DSN:
        configuration?.restaurantAppSentryUrl ??
        "https://73c7b539e27881c71e1d173a8949713f@o4510319447703552.ingest.de.sentry.io/4510544432726096",
    };
  }
  return {

      GRAPHQL_URL: "https://wayloz-api-production.up.railway.app/graphql",
      WS_GRAPHQL_URL: "wss://wayloz-api-production.up.railway.app/graphql",
      // GRAPHQL_URL: "http://192.168.18.107:8001/graphql",
      // WS_GRAPHQL_URL: "ws://192.168.18.107:8001/graphql",

    SENTRY_DSN:
      configuration?.restaurantAppSentryUrl ??
      "https://73c7b539e27881c71e1d173a8949713f@o4510319447703552.ingest.de.sentry.io/4510544432726096",
  };
};

export default getEnvVars;
