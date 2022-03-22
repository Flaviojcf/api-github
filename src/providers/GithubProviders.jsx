import React, { useCallback, useState } from "react";
import { createContext } from "react";
import api from "../services/api";


export const GithubContext = createContext({
    hasUser:false,
    loading: false,
    user: {},
    repositories: [],
    starred: [],
})  


export default function GitHubProviders({children}) {
    
    const [gitHubState,setGitHubState] = useState({
        hasUser:false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name:undefined,
            html_url:undefined,
            blog:undefined,
            company:undefined,
            location:undefined,

            followers:0,
            followings:0,
            public_gists:0,
            public_repos:0,
        },
        repositories:[],
        starred:[],
    })

    function getUser(userName) {
        api
      .get(`users/${userName}`)
      .then(({ data }) => {
        setGitHubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            followings: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
          },
        }));
      })
      .finally(() => {
        setGitHubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      })
      .catch(() => alert('Usuário não encontrado'))
  };

  function getRepos(username) {
    api.get(`users/${username}/repos`)
  .then(({ data }) => {
    setGitHubState((prevState) => ({
      ...prevState,
      repositories: data,      
    }));
  })
}

const getStarred = (username) => {
  api.get(`users/${username}/starred`).then(({ data }) => {
    setGitHubState((prevState) => ({
      ...prevState,
      starred: data,
    }));
  });
};
  

    const contextValue = {
        gitHubState,
        getUser: useCallback((username) => getUser(username), []),
        getRepos: useCallback((username) => getRepos(username), []),
        getStarred: useCallback((username) => getStarred(username), []),
    }
    
    return(
        <div>
            <GithubContext.Provider value={contextValue}>
                 {children}
            </GithubContext.Provider>
        </div>
    )
}

