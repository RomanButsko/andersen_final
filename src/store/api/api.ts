import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
    IChangeCompleted,
    IChangeFavourite,
    IChangeTask,
    ITask,
} from '../../types/Tasks'

export const taskApi = createApi({
    reducerPath: 'tasksApi',
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://63f53b5f55677ef68bcb7172.mockapi.io',
    }),
    endpoints: (builder) => ({
        getTasks: builder.query<ITask[], void>({
            query: () => `/todos`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: 'Tasks' as const,
                              id,
                          })),
                          { type: 'Tasks', id: 'LIST' },
                      ]
                    : [{ type: 'Tasks', id: 'LIST' }],
        }),
        addTask: builder.mutation<ITask, ITask>({
            query: (task: ITask) => ({
                url: `/todos`,
                body: task,
                method: 'POST',
            }),
            invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
        }),
        changeTask: builder.mutation<ITask, IChangeTask>({
            query: ({ id, text }) => ({
                url: `todos/${id}`,
                method: 'PUT',
                body: { text },
            }),
            invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
        }),
        changeFavourite: builder.mutation<ITask, IChangeFavourite>({
            query: ({ id, isFavourite }) => ({
                url: `todos/${id}`,
                method: 'PUT',
                body: { isFavourite },
            }),
            invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
        }),
        changeCompleted: builder.mutation<ITask, IChangeCompleted>({
            query: ({ id, isCompleted }) => ({
                url: `todos/${id}`,
                method: 'PUT',
                body: { isCompleted },
            }),
            invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
        }),
        deleteTask: builder.mutation<ITask, number>({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
        }),
    }),
})

export const {
    useGetTasksQuery,
    useDeleteTaskMutation,
    useAddTaskMutation,
    useChangeTaskMutation,
    useChangeFavouriteMutation,
    useChangeCompletedMutation,
} = taskApi
