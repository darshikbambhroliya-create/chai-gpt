import { tool } from "ai";
import { z } from "zod";

export const webSearchTool = tool({
  description: "Search the web for recent information.",

  inputSchema: z.object({
    query: z.string(),
  }),

  execute: async ({ query }) => {
    // Call Tavily / Brave / Exa / SerpAPI here

    return {
      results: "...search results...",
    };
  },
});
