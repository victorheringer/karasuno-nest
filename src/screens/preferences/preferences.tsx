import { useStorage } from "hooks";
import {
  Select,
  List,
  ListItem,
  Float,
  PageContainer,
  Wrapper,
} from "components";
import { Languages, Screens, Themes } from "enums";
import { useEffect, useState } from "react";

import EasterImg from "../../assets/haikyuu-wat.gif";

export default function Preferences() {
  const { storage, actions, i18n } = useStorage(Screens.SETTINGS);
  const text: I18n.SettingsScreen = i18n as I18n.SettingsScreen;
  const [easter, setEaster] = useState(0);
  const [showEaster, setShowEaster] = useState(false);

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

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (easter == 10 && storage.preferences.theme === Themes.HAIKYUU) {
      console.log(easter);
      setShowEaster(true);
      timer = setTimeout(() => {
        setShowEaster(false);
        setEaster(0);
      }, 3830);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [easter, storage]);

  useEffect(() => {
    setShowEaster(false);
    setEaster(0);
  }, [storage.preferences.theme]);

  return (
    <PageContainer>
      <List>
        <ListItem onClick={() => easter < 10 && setEaster(easter + 1)}>
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
      </List>
      <Wrapper mt={10}>
        {showEaster && <img style={{ width: "100%" }} src={EasterImg} />}
      </Wrapper>
    </PageContainer>
  );
}
