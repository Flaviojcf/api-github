import React, { useEffect, useState } from "react";
import GitHubHooks from "../../hooks/GitHubHooks";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import * as S from './styled'

export default function Repositories() {

    const {gitHubState, getRepos, getStarred} = GitHubHooks()
    const [hasUser, setHasUser] = useState(false)


    useEffect(()=>{
        if (gitHubState.user.login) {
            getRepos(gitHubState.user.login);
            getStarred(gitHubState.user.login);
           
          }
          setHasUser(gitHubState.repositories);
      
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [gitHubState.user.login]);


    return(
        <>
        {hasUser ? (
         <S.WrapperTabs
         selectedTabClassName="is-selected"
         selectedTabPanelClassName="is-selected"
       >
         <S.WrapperTabList>
           <S.WrapperTab>Repositories</S.WrapperTab>
           <S.WrapperTab>Starred</S.WrapperTab>
         </S.WrapperTabList>
         <S.WrapperTabPanel>
           <S.WrapperList >
             {gitHubState.repositories.map((item) => (
               <RepositoryItem
                 key={item.id}
                 name={item.name}
                 linkTo={item.full_name}
                 fullName={item.full_name}
               />
             ))}
           </S.WrapperList >
         </S.WrapperTabPanel>
         <S.WrapperTabPanel>
           <S.WrapperList >
             {gitHubState.starred.map((item) => (
               <RepositoryItem
                 key={item.id}
                 name={item.name}
                 linkTo={item.html_url}
                 fullName={item.full_name}
               />
             ))}
           </S.WrapperList >
         </S.WrapperTabPanel>
       </S.WrapperTabs>
        ) : <></>}</>
    )
}