'use client';

import { NextPage } from 'next';

import { InputForm } from '~/components/InputForm';

const Home: NextPage = () => {
  const handleFormSubmit = (title: string, content: string) => {
    console.log('タイトル:', title);
    console.log('内容:', content);
  };

  return (
    <div className="bg-lime-300">
      <InputForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Home;
