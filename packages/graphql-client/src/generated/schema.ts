// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
    DateTime: any,
    Float: number,
}

export interface User {
    id: Scalars['ID']
    email: Scalars['String']
    name: Scalars['String']
    lastName: Scalars['String']
    avatar: Scalars['String']
    password: Scalars['String']
    isActive: Scalars['Boolean']
    __typename: 'User'
}

export interface UserBoard {
    id: Scalars['ID']
    email: Scalars['String']
    name: Scalars['String']
    lastName: Scalars['String']
    __typename: 'UserBoard'
}

export interface Query {
    getUsers: User[]
    getUser: (User | null)
    getUserByEmail: (UserBoard | null)
    getUserCategories: Category[]
    getCategory: (Category | null)
    getUserBoards: (Board | null)[]
    getTransaction: (Transaction | null)
    getCategoryTransactions: (Transaction | null)[]
    getBoardTransactions: (BoardTransaction | null)[]
    getDateTransactions: (Transaction | null)[]
    __typename: 'Query'
}

export interface Mutation {
    createUser: (Scalars['Boolean'] | null)
    updateUser: (Scalars['Boolean'] | null)
    deleteUser: (Scalars['Boolean'] | null)
    createCategory: (Scalars['Boolean'] | null)
    updateCategory: (Scalars['Boolean'] | null)
    deleteCategory: (Scalars['Boolean'] | null)
    createBoard: (Scalars['Boolean'] | null)
    updateBoard: (Scalars['Boolean'] | null)
    deleteBoard: (Scalars['Boolean'] | null)
    createTransaction: (Scalars['Boolean'] | null)
    updateTransaction: (Scalars['Boolean'] | null)
    deleteTransaction: (Scalars['Boolean'] | null)
    __typename: 'Mutation'
}

export interface Category {
    id: Scalars['ID']
    name: Scalars['String']
    type: Scalars['String']
    icon: Scalars['String']
    userId: Scalars['ID']
    __typename: 'Category'
}

export interface Board {
    id: Scalars['ID']
    name: Scalars['String']
    owner: UserBoard
    createdAt: Scalars['DateTime']
    boardPermissions: ((BoardPermission | null)[] | null)
    __typename: 'Board'
}

export interface BoardPermission {
    permissions: (Scalars['String'] | null)[]
    user: UserBoard
    __typename: 'BoardPermission'
}

export interface Transaction {
    id: Scalars['ID']
    description: Scalars['String']
    amount: Scalars['Float']
    date: Scalars['DateTime']
    categoryId: Scalars['ID']
    boardId: Scalars['ID']
    __typename: 'Transaction'
}

export interface BoardTransaction {
    id: Scalars['ID']
    description: Scalars['String']
    amount: Scalars['Float']
    date: Scalars['DateTime']
    category: CategoryTransaction
    boardId: Scalars['ID']
    __typename: 'BoardTransaction'
}

export interface CategoryTransaction {
    id: Scalars['ID']
    name: Scalars['String']
    type: Scalars['String']
    icon: Scalars['String']
    __typename: 'CategoryTransaction'
}

export interface UserGenqlSelection{
    id?: boolean | number
    email?: boolean | number
    name?: boolean | number
    lastName?: boolean | number
    avatar?: boolean | number
    password?: boolean | number
    isActive?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBoardGenqlSelection{
    id?: boolean | number
    email?: boolean | number
    name?: boolean | number
    lastName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface createUserInput {email: Scalars['String'],lastName: Scalars['String'],name: Scalars['String'],password: Scalars['String'],avatar?: (Scalars['String'] | null)}

export interface updateUserInput {id: Scalars['ID'],email?: (Scalars['String'] | null),lastName?: (Scalars['String'] | null),name?: (Scalars['String'] | null),password?: (Scalars['String'] | null),avatar?: (Scalars['String'] | null)}

export interface QueryGenqlSelection{
    getUsers?: UserGenqlSelection
    getUser?: (UserGenqlSelection & { __args: {id: Scalars['ID']} })
    getUserByEmail?: (UserBoardGenqlSelection & { __args: {email: Scalars['String']} })
    getUserCategories?: (CategoryGenqlSelection & { __args: {userId: Scalars['ID']} })
    getCategory?: (CategoryGenqlSelection & { __args: {id: Scalars['ID']} })
    getUserBoards?: (BoardGenqlSelection & { __args: {userId: Scalars['ID']} })
    getTransaction?: (TransactionGenqlSelection & { __args: {id: Scalars['ID']} })
    getCategoryTransactions?: (TransactionGenqlSelection & { __args: {categoryId: Scalars['ID']} })
    getBoardTransactions?: (BoardTransactionGenqlSelection & { __args: {boardId: Scalars['ID']} })
    getDateTransactions?: (TransactionGenqlSelection & { __args: {date: Scalars['DateTime']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    createUser?: { __args: {input: createUserInput} }
    updateUser?: { __args: {input: updateUserInput} }
    deleteUser?: { __args: {id: Scalars['ID']} }
    createCategory?: { __args: {input: createCategoryInput} }
    updateCategory?: { __args: {input: updateCategoryInput} }
    deleteCategory?: { __args: {id: Scalars['ID']} }
    createBoard?: { __args: {input: createBoardInput} }
    updateBoard?: { __args: {input: updateBoardInput} }
    deleteBoard?: { __args: {id: Scalars['ID']} }
    createTransaction?: { __args: {input: createTransactionInput} }
    updateTransaction?: { __args: {input: updateTransactionInput} }
    deleteTransaction?: { __args: {id: Scalars['ID']} }
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoryGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    type?: boolean | number
    icon?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface createCategoryInput {name: Scalars['String'],type: Scalars['String'],icon: Scalars['String'],userId: Scalars['ID']}

export interface updateCategoryInput {id: Scalars['ID'],name?: (Scalars['String'] | null),type?: (Scalars['String'] | null),icon?: (Scalars['String'] | null),userId?: (Scalars['ID'] | null)}

export interface BoardGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    owner?: UserBoardGenqlSelection
    createdAt?: boolean | number
    boardPermissions?: BoardPermissionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BoardPermissionGenqlSelection{
    permissions?: boolean | number
    user?: UserBoardGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface createBoardInput {owner: Scalars['ID'],name: Scalars['String']}

export interface updateBoardInput {owner: Scalars['ID'],name?: (Scalars['String'] | null)}

export interface TransactionGenqlSelection{
    id?: boolean | number
    description?: boolean | number
    amount?: boolean | number
    date?: boolean | number
    categoryId?: boolean | number
    boardId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BoardTransactionGenqlSelection{
    id?: boolean | number
    description?: boolean | number
    amount?: boolean | number
    date?: boolean | number
    category?: CategoryTransactionGenqlSelection
    boardId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoryTransactionGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    type?: boolean | number
    icon?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface createTransactionInput {description: Scalars['String'],amount: Scalars['Float'],date: Scalars['DateTime'],categoryId: Scalars['ID'],boardId: Scalars['ID']}

export interface updateTransactionInput {id: Scalars['ID'],description?: (Scalars['String'] | null),amount?: (Scalars['Float'] | null),date?: (Scalars['DateTime'] | null),categoryId?: (Scalars['ID'] | null),boardId?: (Scalars['ID'] | null)}


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const UserBoard_possibleTypes: string[] = ['UserBoard']
    export const isUserBoard = (obj?: { __typename?: any } | null): obj is UserBoard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBoard"')
      return UserBoard_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Category_possibleTypes: string[] = ['Category']
    export const isCategory = (obj?: { __typename?: any } | null): obj is Category => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategory"')
      return Category_possibleTypes.includes(obj.__typename)
    }
    


    const Board_possibleTypes: string[] = ['Board']
    export const isBoard = (obj?: { __typename?: any } | null): obj is Board => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBoard"')
      return Board_possibleTypes.includes(obj.__typename)
    }
    


    const BoardPermission_possibleTypes: string[] = ['BoardPermission']
    export const isBoardPermission = (obj?: { __typename?: any } | null): obj is BoardPermission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBoardPermission"')
      return BoardPermission_possibleTypes.includes(obj.__typename)
    }
    


    const Transaction_possibleTypes: string[] = ['Transaction']
    export const isTransaction = (obj?: { __typename?: any } | null): obj is Transaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTransaction"')
      return Transaction_possibleTypes.includes(obj.__typename)
    }
    


    const BoardTransaction_possibleTypes: string[] = ['BoardTransaction']
    export const isBoardTransaction = (obj?: { __typename?: any } | null): obj is BoardTransaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBoardTransaction"')
      return BoardTransaction_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryTransaction_possibleTypes: string[] = ['CategoryTransaction']
    export const isCategoryTransaction = (obj?: { __typename?: any } | null): obj is CategoryTransaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryTransaction"')
      return CategoryTransaction_possibleTypes.includes(obj.__typename)
    }
    