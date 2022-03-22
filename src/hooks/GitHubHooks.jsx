import { useContext } from "react";
import { GithubContext } from "../providers/GithubProviders";

export default function GitHubHooks(){
    
    const {gitHubState, getUser, getRepos, getStarred} = useContext(GithubContext)

    return {gitHubState, getUser, getRepos, getStarred}
}