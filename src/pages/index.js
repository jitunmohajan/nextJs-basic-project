import React from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
const { Header, Content, Footer } = Layout;
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Head>
        <title>Next js Project</title>
        <meta name='home page' description='This is a next js project'/>
      </Head>
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