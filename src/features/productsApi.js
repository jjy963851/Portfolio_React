import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Staticdata from "../Staticdata.json";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: () => Staticdata, // 스태틱 데이터로 변경
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => Staticdata, // 스태틱 데이터로 변경
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
