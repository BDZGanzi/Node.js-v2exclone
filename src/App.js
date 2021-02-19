import React, { useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main';
import PostPage from './components/PostPage'
import { useDispatch } from 'react-redux';
import { getHot } from './reducers/postListReducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHot())
  }, [dispatch])

  return (
    <div style={{ backgroundColor: '#f6f6f6', boxSizing:'border-box' }}>
      <BrowserRouter>
          <Header />

        <Switch>
          <Route path='/node/:name'>
            <Main />
          </Route>
          <Route path='/user'>

          </Route>
          <Route path='/post/:postid'>
            <PostPage />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
