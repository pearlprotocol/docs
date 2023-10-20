import type { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import React from "react";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | RayAuth",
      };
    }
    return {};
  },

  logo: (
    <>
      <span
        style={{
          marginLeft: ".4em",
          marginTop: ".1em",
          fontWeight: 600,
          fontSize: "1.2em",
        }}
      >
        Pearlx Docs
      </span>
    </>
  ),
  docsRepositoryBase:
    "https://github.com/pearlprotocol/docs",
  project: {
    link: "https://github.com/pearlprotocol/",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://docs.pearlx.com" target="_blank" rel="noreferrer">
          Pearlx
        </a>
        .
      </span>
    ),
  },
  feedback: {
    content: "Feedback? Submit an issue",
  },
};

export default config;