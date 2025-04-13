import { Languages, Screens } from "enums";

const i18n: I18n.Modules = {
  [Languages.PT_BT]: {
    [Screens.HOME]: {
      backBtn: "Voltar",
      teamTitle: "Time",
      addPlayerBtn: "Adicionar",
      sorteBtn: "Sortear",
      clearBtn: "Limpar",
      removePlayerBtn: "Remover",
      addLabel: "Adicionado",
    },
    [Screens.BOARD]: {
      example: "example",
    },
    [Screens.PLAYERS]: {
      addPlayeryBtn: "Adicionar Jogador",
      removePlayerBtn: "Remover",
      inputPlaceholder: "Nome do Jogador",
      noPlayers: "Nenhum jogador cadastrado",
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
    [Screens.ACHIEVEMENTS]: {
      searchPlayerPlaceholder: "Pesquisar jogador",
    },
  },
  [Languages.EN]: {
    [Screens.HOME]: {
      backBtn: "Voltar",
      teamTitle: "Team",
      addPlayerBtn: "Add",
      sorteBtn: "Sort",
      clearBtn: "Clear",
      removePlayerBtn: "Remove",
      addLabel: "Added",
    },
    [Screens.BOARD]: {
      example: "example",
    },
    [Screens.PLAYERS]: {
      addPlayeryBtn: "Add Player",
      removePlayerBtn: "Remove",
      inputPlaceholder: "Player's Name",
      noPlayers: "No players registered",
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
    [Screens.ACHIEVEMENTS]: {
      searchPlayerPlaceholder: "Search player",
    },
  },
};

export default i18n;
