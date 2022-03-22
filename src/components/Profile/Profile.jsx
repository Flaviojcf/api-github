import React from "react";
import GitHubHooks from "../../hooks/GitHubHooks";
import * as S from "./styled";
export default function Profile() {
  const { gitHubState } = GitHubHooks();

  return (
    <S.Wrapper>
      <S.WrapperImg
        src={gitHubState.user.avatar}
        alt="Userlogo"
      />
      <S.WrapperInfo>
        <div>
          <h1>{gitHubState.user.name}</h1>
          <S.WrapperUserName>
            <h3> Username: </h3>
            <a
              target="_blank"
              rel="noreferrer"
              href={gitHubState.user.html_url}
            >
              {gitHubState.user.login}
            </a>
          </S.WrapperUserName>

          <S.WrapperUserName>
            <h3>Company:</h3>
            <span>{gitHubState.user.company}</span>
          </S.WrapperUserName>
          <S.WrapperUserName>
            <h3>Location:</h3>
            <span>{gitHubState.user.location}</span>
          </S.WrapperUserName>
          <S.WrapperUserName>
            <h3>Blog:</h3>
            <a href={gitHubState.user.blog} target="_blank" rel="noreferrer">
              {gitHubState.user.blog}
            </a>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{gitHubState.user.followers}</span>
          </div>

          <div>
            <h4>Followings</h4>
            <span>{gitHubState.user.followings}</span>
          </div>
          <div>
            <h4>Gitst</h4>
            <span>{gitHubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{gitHubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfo>
    </S.Wrapper>
  );
}
