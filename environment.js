import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import { config } from "./config.js";

const GIT_KEY = config.API_KEY;

export const octokit = new Octokit({
  auth: GIT_KEY,
});

await octokit.rest.users.getAuthenticated();
