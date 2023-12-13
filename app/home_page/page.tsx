"use client"
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import BodyToDo1 from './BodyToDo1';
import BodyToDo2 from './BodyToDo2';
import BodyToDo3 from './BodyToDo3';

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>ToDo List</title>
      </Head>
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14"> 
        <BodyToDo1 />
        <BodyToDo2 />
        <BodyToDo3 />
      </div>
    </>
  );
};

export default Page;
