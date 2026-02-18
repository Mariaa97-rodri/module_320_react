import React from 'react';

function Article({ post }) {
  const { date, title, image, imageAlt, excerpt } = post;
  return (
    <article>
      <header>
        <p>{date}</p>
        <h3>{title}</h3>
      </header>
      <img src={image} alt={imageAlt} />
      <p>{excerpt}</p>
      <a href="#" className="continues">Continues ...</a>
    </article>
  );
}

export default Article;