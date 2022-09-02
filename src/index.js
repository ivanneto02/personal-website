import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MiniPosts from './MiniPosts';
import MajorArticles from './MajorArticles';

import reportWebVitals from './reportWebVitals';

const main_articles = ReactDOM.createRoot(document.getElementById('main_articles_root'));
main_articles.render(
  <React.StrictMode>
    <MajorArticles />
  </React.StrictMode>
);

const mini_articles = ReactDOM.createRoot(document.getElementById('mini_posts_root'));
mini_articles.render(
    <React.StrictMode>
    <MiniPosts />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
