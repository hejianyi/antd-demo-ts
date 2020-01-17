import React from 'react';
import { HashRouter as Router, Link, NavLink, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import './App.css';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)



const Topics = () => {
  let match = useRouteMatch()
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Prop V.State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic></Topic>
        </Route>
        <Route path={match.path}>
          <h3>please select a topic</h3>
        </Route>
      </Switch>
    </div>
  )
}

const Topic = () => {
  let { topicId } = useParams()
  return (
<h3>request topic ID: { topicId }</h3>
  )
}

const App: React.FC = () => {
  return (
    <Router>
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><NavLink exact to="/" activeClassName="hurray">首页</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/About" activeClassName="hurray">about</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to="/Product" activeClassName="hurray">product</NavLink></Menu.Item>
        <Menu.Item key="4"><NavLink to="/topics" activeClassName="hurray">Topics</NavLink></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>何建议的个人主页</Breadcrumb.Item>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
      </Breadcrumb>

        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/topics">
              <Topics></Topics>
            </Route>
          </Switch>
        </div>
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </Router>
  );
}

export default App;
