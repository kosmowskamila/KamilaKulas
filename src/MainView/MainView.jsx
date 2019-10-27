import React from 'react';
import {Layout} from 'antd';
import styled from 'styled-components';
import background from '../assets/background.png';

import SideBar from "../components/SideBar";

const {Sider, Content, Footer} = Layout;

const BackgroundLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  
  .no-background {
    background: unset;
  }
`;

const BorderedSider = styled(Sider)`
  background: unset;
  border-right: 1px solid ${props => props.theme.lightGray};
`;

const MainView = () => (
  <BackgroundLayout>
    <BorderedSider width='auto'>
      <SideBar/>
    </BorderedSider>
    <Layout className='no-background'>
        <Content className='no-background'/>
        <Footer className='no-background'/>
    </Layout>
  </BackgroundLayout>
);

export default MainView;