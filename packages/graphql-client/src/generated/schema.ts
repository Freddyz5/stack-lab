// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
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
    getVideoGames: VideoGame[]
    getVideoGame: (VideoGame | null)
    getVideoGameByTitle: (VideoGame | null)
    __typename: 'Query'
}

export interface Mutation {
    createUser: (Scalars['Boolean'] | null)
    updateUser: (Scalars['Boolean'] | null)
    deleteUser: (Scalars['Boolean'] | null)
    createVideoGame: (Scalars['Boolean'] | null)
    updateVideoGame: (Scalars['Boolean'] | null)
    deleteVideoGame: (Scalars['Boolean'] | null)
    __typename: 'Mutation'
}

export interface VideoGame {
    id: Scalars['ID']
    title: Scalars['String']
    description: Scalars['String']
    genre: Scalars['String']
    difficulty: Scalars['String']
    state: Scalars['String']
    isActive: Scalars['Boolean']
    __typename: 'VideoGame'
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
    getVideoGames?: VideoGameGenqlSelection
    getVideoGame?: (VideoGameGenqlSelection & { __args: {id: Scalars['ID']} })
    getVideoGameByTitle?: (VideoGameGenqlSelection & { __args: {title: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    createUser?: { __args: {input: createUserInput} }
    updateUser?: { __args: {input: updateUserInput} }
    deleteUser?: { __args: {id: Scalars['ID']} }
    createVideoGame?: { __args: {input: createVideoGameInput} }
    updateVideoGame?: { __args: {input: updateVideoGameInput} }
    deleteVideoGame?: { __args: {id: Scalars['ID']} }
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VideoGameGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    description?: boolean | number
    genre?: boolean | number
    difficulty?: boolean | number
    state?: boolean | number
    isActive?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface createVideoGameInput {title: Scalars['String'],description: Scalars['String'],genre: Scalars['String'],difficulty: Scalars['String'],state: Scalars['String']}

export interface updateVideoGameInput {id: Scalars['ID'],title?: (Scalars['String'] | null),description?: (Scalars['String'] | null),genre?: (Scalars['String'] | null),difficulty?: (Scalars['String'] | null),state?: (Scalars['String'] | null)}


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
    


    const VideoGame_possibleTypes: string[] = ['VideoGame']
    export const isVideoGame = (obj?: { __typename?: any } | null): obj is VideoGame => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVideoGame"')
      return VideoGame_possibleTypes.includes(obj.__typename)
    }
    