import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PostList from './pages/PostList';
import AddPost from './pages/AddPost';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/posts' component={PostList} exact />
            <Route path='/posts/add' component={AddPost} />
            <Route path='/posts/:id' component={SinglePost} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
