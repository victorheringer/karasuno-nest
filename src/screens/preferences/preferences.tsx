import { NavLink } from "react-router-dom";

import { useStorage } from "hooks";
import { Select, List, ListItem, Float, SolidButton } from "components";
import { Languages, Screens, Themes } from "enums";

export default function Preferences() {
  const { storage, actions, i18n } = useStorage(Screens.SETTINGS);
  const text: I18n.SettingsScreen = i18n as I18n.SettingsScreen;

  const settingsOptions = {
    languages: [
      { value: Languages.EN, label: "En" },
      { value: Languages.PT_BT, label: "Pt-br" },
    ],
    themes: [
      { value: Themes.HAIKYUU, label: "Haikyuu" },
      { value: Themes.CRABFC, label: "Crab FC" },
    ],
  };

  return (
    <>
      <List>
        <ListItem>
          <label>
            {text.version}
            <span style={{ float: "right" }}>
              {storage.preferences.version}
            </span>
          </label>
        </ListItem>
        <ListItem>
          <label>{text.language}</label>
          <Float>
            <Select
              options={settingsOptions.languages}
              value={storage.preferences.language}
              onChange={actions.updateLanguage}
            />
          </Float>
        </ListItem>
        <ListItem>
          <label>{text.theme}</label>
          <Float>
            <Select
              options={settingsOptions.themes}
              value={storage.preferences.theme}
              onChange={actions.updateTheme}
            />
          </Float>
        </ListItem>
        {/* 
          <ListItem>
            <label>{text.editor}</label>
            <Float>
              <NavLink aria-label="Board" to={Screens.EDITOR}>
                <SolidButton block={false} onClick={() => {}}>
                  Acessar
                </SolidButton>
              </NavLink>
            </Float>
          </ListItem>
          */}
      </List>
    </>
  );
}
