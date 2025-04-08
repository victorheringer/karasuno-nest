import { Languages, Themes, Actions } from "enums";

export interface SetLanguage {
  type: Actions.SET_LANGUAGE;
  payload: { language: Languages };
}

export interface SetTheme {
  type: Actions.SET_THEME;
  payload: { theme: Themes };
}

export interface AddPlayer {
  type: Actions.ADD_PLAYER;
  payload: { player: Player };
}

export interface RemovePlayer {
  type: Actions.REMOVE_PLAYER;
  payload: { id: string };
}

export type StorageActionsTypes =
  | SetLanguage
  | SetTheme
  | AddPlayer
  | RemovePlayer;
