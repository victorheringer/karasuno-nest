import { useStorage } from "hooks";
import { Screens } from "enums";
import { useRef } from "react";
import { generateId } from "helpers";

export default function Players() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { players, actions } = useStorage(Screens.PLAYERS);

  return (
    <>
      <h1>Players DB</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          actions.addPlayer({
            name: `${inputRef?.current?.value}`,
            id: generateId(),
          });

          if (inputRef?.current) {
            inputRef.current.value = "";
          }
        }}
      >
        Add
      </button>
      {players?.map((player) => (
        <>
          <p>{player.name}</p>
          <button onClick={() => actions.removePlayer(player.id)}>
            Remover
          </button>
        </>
      ))}
    </>
  );
}
