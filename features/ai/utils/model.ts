import { google } from "@ai-sdk/google";
export const DEFAULT_CHAT_MODEL = "gemini-2.5-pro";
export function getChatModel(moedlId?: string | null) {
  return google(moedlId || DEFAULT_CHAT_MODEL);
}
