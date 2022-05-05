import React from 'react'
import Collapsible from '../components/Collapsible';

const Tips = () => {
    const data = require('../data/articles.json');
    var titles = [];
    var texts = [];
  
  
    data.articles.forEach((art) => {
      titles.push(art.title);
      texts.push(art.text);
    })

    const zip = (...arr) => Array(Math.max(...arr.map(a => a.length))).fill().map((_, i) => arr.map(a => a[i]));

    const content = zip(titles, texts);

  return (
    <div className='content'>
        <h1 className='title'>Wskazówki</h1>
        {content.map(function (content) {
          return (
            <div key={content[0]} className='container-mobile'>
              <Collapsible desc={content[1]} text={content[0]} />
            </div>)
        })}
    </div>
  )
}

export default Tips