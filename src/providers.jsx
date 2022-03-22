import React from "react";
import App from "./App";
import ResetCss  from "./global/ResetCss";
import GitHubProviders from "./providers/GithubProviders";


export default function providers() {
  return (
    <main>
      <GitHubProviders>
        <ResetCss/>
        <App />
      </GitHubProviders>
    </main>
  );
};

