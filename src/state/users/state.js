export interface UserState {
    users: any,
    loadedUsers: any,
    currentUser: any
}

export const UserInitialState: UserState = {
    users: [],
    loadedUsers: [],
    currentUser: {}
};