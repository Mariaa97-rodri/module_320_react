import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';
import './App.css';

const posts = [
  {
    id: 1,
    date: '11/12/20',
    title: 'On the Street in Brooklyn',
    image: 'https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg',
    imageAlt: 'Street fashion in Brooklyn, woman in orange dress against blue wall',
    excerpt: 'ray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem nemo dignissimos fuga veniam inventore eligendi magnam aperiam cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Voluptatum quisquam reiciendis laboriosam, error cumque atque molestiae commodi possimus laborum.',
  },
  {
    id: 2,
    date: '11/11/20',
    title: 'Vintage in Vogue',
    image: 'https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg',
    imageAlt: 'Group of fashionable people at a vintage fashion event',
    excerpt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem nemo dignissimos fuga veniam inventore eligendi magnam aperiam cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Voluptatum quisquam reiciendis laboriosam.',
  },
];

function App() {
  return (
    <div>
      <Header />
      <main>
        {posts.map(post => (
          <Article key={post.id} post={post} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;