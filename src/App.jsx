import Layout from './components/Layout/Layout';
import Profile from './components/Profile/Profile';
import Repositories from './components/Repositories/Repositories';
import Search from './components/Search/Search';
import GitHubHooks from './hooks/GitHubHooks';
import './index.css'


function App() {

  const { gitHubState } = GitHubHooks()

  return (
      <Layout>
        {gitHubState.hasUser? <> {gitHubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}</> : (
           <Search/>
          ) }
     
        
      </Layout>
     
  )
}

export default App;
