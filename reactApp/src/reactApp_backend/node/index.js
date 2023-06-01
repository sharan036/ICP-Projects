import fetch from "isomorphic-fetch";
import { HttpAgent } from "@dfinity/agent";
import { createRequire } from "node:module";
import { canisterId, createActor } from "../declarations/nft/index.js";
import { identity } from "./identity.js";

// Require syntax is needed for JSON file imports
const require = createRequire(import.meta.url);
const localCanisterIds = require("../../.dfx/local/canister_ids.json");

// Use `process.env` if available provoded, or fall back to local
const effectiveCanisterId =
  canisterId?.toString() ?? localCanisterIds.nft.local;

const agent = new HttpAgent({
  identity: await identity,
  host: "http://127.0.0.1:4943",
  fetch,
});

const actor = createActor(effectiveCanisterId, {
  agent,
});