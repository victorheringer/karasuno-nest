import { useStorage } from "hooks";
import { Screens } from "enums";
import { useRef } from "react";
import { generateId } from "helpers";
import {
  InputText,
  SolidButton,
  Wrapper,
  List,
  ListItem,
  Float,
  TextBox,
} from "components";

export default function Players() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { players, actions, i18n } = useStorage(Screens.PLAYERS);

  const text: I18n.PlayersScreen = i18n as I18n.PlayersScreen;

  return (
    <Wrapper mt={20}>
      <InputText
        type="text"
        ref={inputRef}
        placeholder={text.inputPlaceholder}
      />
      <Wrapper mb={10} mt={10}>
        <SolidButton
          block
          onClick={() => {
            if (!inputRef?.current?.value) return;

            actions.addPlayer({
              name: `${inputRef?.current?.value}`,
              id: generateId(),
            });

            if (inputRef?.current) {
              inputRef.current.value = "";
            }
          }}
        >
          {text.addPlayeryBtn}
        </SolidButton>
      </Wrapper>
      <List>
        {players?.map((player) => (
          <>
            <ListItem>
              <label>{player.name}</label>
              <Float>
                <SolidButton
                  block={false}
                  onClick={() => actions.removePlayer(player.id)}
                >
                  {text.removePlayerBtn}
                </SolidButton>
              </Float>
            </ListItem>
          </>
        ))}
      </List>
      {!players?.length && <TextBox text={text.noPlayers} />}
    </Wrapper>
  );
}
