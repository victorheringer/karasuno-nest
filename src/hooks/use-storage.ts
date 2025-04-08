import { useReducer, useEffect, useContext } from "react";
import { StorageService } from "services";
import { Actions, Languages, Screens, Themes } from "enums";
import { themes, i18n } from "static";
import { StorageContext } from "contexts";
import produce from "immer";

export function reducer(
  state: LocalStorage,
  action: ActionTypes.StorageActions
): LocalStorage {
  switch (action.type) {
    case Actions.SET_LANGUAGE: {
      return produce(state, (s) => {
        s.preferences.language = action.payload.language;
      });
    }
    case Actions.SET_THEME: {
      return produce(state, (s) => {
        s.preferences.theme = action.payload.theme;
      });
    }
    case Actions.ADD_PLAYER: {
      return produce(state, (s) => {
        s.players.push(action.payload.player);
      });
    }
    case Actions.REMOVE_PLAYER: {
      return produce(state, (s) => {
        s.players = s.players.filter(({ id }) => id !== action.payload.id);
      });
    }
    default:
      return state;
  }
}

export default function useStorage(target: Screens) {
  const { storage, setStorage } = useContext(StorageContext);
  const [local, dispatch] = useReducer(reducer, storage);

  useEffect(() => {
    StorageService.put(storage);
    setStorage(local);
  }, [local, setStorage, storage]);

  const updateLanguage = (language: Languages) =>
    dispatch({ type: Actions.SET_LANGUAGE, payload: { language } });

  const updateTheme = (theme: Themes) =>
    dispatch({ type: Actions.SET_THEME, payload: { theme } });

  const addPlayer = (player: Player) =>
    dispatch({ type: Actions.ADD_PLAYER, payload: { player } });

  const removePlayer = (id: string) =>
    dispatch({ type: Actions.REMOVE_PLAYER, payload: { id } });

  return {
    players: local.players,
    theme: themes[local.preferences.theme],
    i18n: i18n[local.preferences.language][target],
    storage: local,
    actions: {
      updateLanguage,
      updateTheme,
      addPlayer,
      removePlayer,
    },
  };
}
