import { Languages, Screens } from "enums";

const i18n: I18n.Modules = {
  [Languages.PT_BT]: {
    [Screens.HOME]: {
      backBtn: "Voltar",
    },
    [Screens.BOARD]: {
      example: "example",
    },
    [Screens.PLAYERS]: {
      example: "example",
    },
    [Screens.SETTINGS]: {
      version: "Versão do App",
      language: "Língua",
      theme: "Tema",
      settingsListTitle: "Configurações",
      editor: "Editor",
    },
    [Screens.SHARED]: {},
    [Screens.EDITOR]: {},
  },
  [Languages.EN]: {
    [Screens.HOME]: {
      backBtn: "Voltar",
    },
    [Screens.BOARD]: {
      example: "example",
    },
    [Screens.PLAYERS]: {
      example: "example",
    },
    [Screens.SETTINGS]: {
      version: "App Version",
      language: "Language",
      theme: "Theme",
      settingsListTitle: "Settings",
      editor: "Editor",
    },
    [Screens.SHARED]: {},
    [Screens.EDITOR]: {},
  },
};

export default i18n;
