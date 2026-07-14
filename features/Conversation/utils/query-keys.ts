export const queryKeys = {
  conversation: {
    all: ["conversation"] as const,
    details: (id: string) => ["conversation", id] as const,
  },
  messages: {
    byConversation: (conversationId: string) => {
      return ["messages", conversationId] as const;
    },
  },
};
