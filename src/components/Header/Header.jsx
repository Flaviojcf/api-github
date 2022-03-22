import React, { useState } from "react";
import GitHubHooks from "../../hooks/GitHubHooks";
import * as S from "./styled";

export default function Header() {
    const { getUser } = GitHubHooks();
    const [usernameSearch, setUsernameSearch] = useState();
  
    const submitGetUser = () => {
      if (!usernameSearch) return;
      return getUser(usernameSearch);
    };
  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o UserName"
          onChange={(event) => setUsernameSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          Buscar
        </button>
      </S.Wrapper>
    </header>
  );
}
