import { CUSTOMERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const customersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => ({
        url: CUSTOMERS_URL,
        method: "GET",
      }),
      providesTags: ["Customer"],
    }),
    addNewCustomer: builder.mutation({
      query: (customerData) => ({
        url: CUSTOMERS_URL,
        method: "POST",
        body: customerData,
      }),
      invalidatesTags: ["Customer"],
    }),
  }),
});

export const { useGetCustomersQuery, useAddNewCustomerMutation } =
  customersApiSlice;
