import React from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import RootLayout from '../../components/Layouts/RootLayout';
const { Header, Content, Footer } = Layout;
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
        <h1>This is Home page</h1>      
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}