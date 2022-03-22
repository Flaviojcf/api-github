import React from "react";
import * as S from "./styled";

export default function RepositoryItem({ name, linkTo, fullName }) {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperLink href={linkTo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
}
