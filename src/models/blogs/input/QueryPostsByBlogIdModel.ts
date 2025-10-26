import { SortDirection } from 'mongodb';

export type QueryPostsByBlogIdModel = {
    sortBy?: string
    sortDirection?: SortDirection
    pageNumber?: string
    pageSize?: string
}
