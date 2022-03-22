import React from "react";
import Header from "../Header/Header";
import * as S from './styled'

export default function Layout({children}) {
  

  return (
    <S.WrapperLayout>
      <Header/>
      {children}
    </S.WrapperLayout>
  );

  
}
