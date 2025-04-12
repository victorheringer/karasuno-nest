import { Languages, Themes, Screens, Actions } from "enums";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Action } from "react-redux";
import type { StorageActionsTypes } from "types";

declare global {
  export type Callback = () => void;

  export type Theme = {
    backgroundColor: string;
    separatorColor: string;
    mainFontColor: string;
    primaryColor: string;
    successColor: string;
    errorColor: string;
    menuIconsColor: string;
    fontFamily: string;
    borderInputColor: string;
    solidBtnBgColor: string;
    solidBtnBorder: string;
    solidBtnFontColor: string;
    mutedFontColor: string;
    boxBackgroundColor: string;
    boxBorderColor: string;
    boxFontColor: string;
    inputBackgroundColor: string;
  };

  export type ThemeOptions = {
    [Themes.HAIKYUU]: Theme;
    [Themes.CRABFC]: Theme;
  };

  export type Preferences = {
    version: string;
    language: Languages;
    theme: Themes;
    screen: Screens;
    isDevMode: boolean;
  };

  export type Player = {
    name: string;
    id: string;
  };

  export type LocalStorage = {
    id: string;
    preferences: Preferences;
    players: Player[];
  };

  declare module I18n {
    export type Modules = {
      [Languages.PT_BT]: Screens;
      [Languages.EN]: Screens;
    };

    export type HomeScreen = {
      backBtn: string;
      teamTitle: string;
      addPlayerBtn: string;
      sorteBtn: string;
      clearBtn: string;
      removePlayerBtn: string;
      addLabel: string;
    };

    export type SettingsScreen = {
      version: string;
      language: string;
      theme: string;
      settingsListTitle: string;
      editor: string;
    };

    export type BoardScreen = {};

    export type PlayersScreen = {
      addPlayeryBtn: string;
      removePlayerBtn: string;
      inputPlaceholder: string;
      noPlayers: string;
    };

    export type SharedScreen = {};

    export type EditorScreen = {};

    export type Screens = {
      [Screens.HOME]: HomeScreen;
      [Screens.SETTINGS]: SettingsScreen;
      [Screens.BOARD]: BoardScreen;
      [Screens.PLAYERS]: PlayersScreen;
      [Screens.SHARED]: SharedScreen;
      [Screens.EDITOR]: EditorScreen;
    };
  }

  declare module ActionTypes {
    export type StorageActions = StorageActionsTypes;
  }
}
