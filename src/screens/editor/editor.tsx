import { useBucket } from "hooks";

import { useEffect, useState } from "react";

import { InputText, SolidButton } from "components";

import produce from "immer";

export default function Editor() {
  const { board } = useBucket();
  const [inputType, setInputType] = useState("password");
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    setBoardList(board);
  }, [board]);

  function handleChangeBoard(index: number, key: string, value: string) {
    const result = produce(boardList, (s: any) => {
      s[index][key] = value;
    });

    setBoardList(result);
  }

  function removeItem(index: number) {
    const result = produce(boardList, (s: any) => {
      delete s[index];
    });

    setBoardList(result.filter((r) => !!r));
  }

  function toggleKeys() {
    inputType == "password" ? setInputType("text") : setInputType("password");
  }

  console.log(boardList);

  return (
    <>
      <h1 style={{ marginBottom: 5 }}>Editor</h1>
      <small>Area para configuração do quadro de avisos</small>

      <br />
      <br />
      <h3>Acessos</h3>
      <InputText type={inputType} placeholder="Secret access key" />
      <br />
      <br />
      <InputText type={inputType} placeholder="Access key id" />
      <br />
      <br />
      <SolidButton block onClick={toggleKeys}>
        {inputType == "password" ? "Show Keys" : "Hide keys"}
      </SolidButton>
      <br />
      <br />

      <h3>Avisos</h3>
      {boardList.map((item: any, index) => (
        <div key={item.title}>
          <InputText
            type="text"
            placeholder="Title"
            value={item.title}
            onChange={(e) => handleChangeBoard(index, "title", e.target.value)}
          />
          <br />
          <textarea
            style={{ width: "100%", marginTop: 10, marginBottom: 5 }}
            rows={5}
            onChange={(e) =>
              handleChangeBoard(index, "description", e.target.value)
            }
          >
            {item.description}
          </textarea>
          <SolidButton block onClick={() => removeItem(index)}>
            Remover Aviso
          </SolidButton>
          <hr />
          <br />
          <br />
        </div>
      ))}
      {!boardList.length && <small>Nenum aviso no momento</small>}
      <br />
      <br />
      <SolidButton block onClick={() => {}}>
        Salvar avisos
      </SolidButton>
      <br />
      <br />
    </>
  );
}
