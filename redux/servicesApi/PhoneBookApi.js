import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().contact.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['PhoneBook'],

  endpoints: builder => ({

signUpUser: builder.mutation({
      query: ({ name, email, password } ) => ({
          url: '/users/signup',
          method: 'POST',
          body: {
            name,
            email,
            password,
          },
      }),
      invalidatesTags: ['PhoneBook'],
    }),
signInUser: builder.mutation({
      query: ({ email, password }) => ({
         url: '/users/login',
        method: 'POST',
        body: {
          email,
          password,
        },
    }),
    invalidatesTags: ['PhoneBook'],
  }),
    signOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    authRefresh: builder.query({
      query: () => '/users/current',
      providesTags: ['PhoneBook'],
    }),
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['PhoneBook'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['PhoneBook'],
    }),
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contacts/${ id }`,
        method: 'DELETE',
        body: { id }
      }),
      invalidatesTags: ['PhoneBook'],
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useSignInUserMutation,
  useSignOutUserMutation,
  useAuthRefreshQuery,
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = phoneBookApi;
