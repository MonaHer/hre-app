import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://api.trello.com/1/boards/665f1c7c97f0f55f17c046be/lists?key=43cbd0cbe82e45a5a21b6dc4068f80f3&token=ATTA56e026f2d89b965c0230b06ed6df7b750cabc8c2fe431472dcf796824590cd50F2705FA2&cards=all",
  }),
  endpoints: (builder) => ({
    getAllCards: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllCardsQuery } = apiSlice;
