import { UserState } from "./users/state";
import { UiState } from './ui/state';

export type State = {
    users: UserState,
    ui: UiState
};