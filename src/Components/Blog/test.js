import React from 'react';

const test = props => {

    let str = props.blog.replace(/\*([^*]*)\*/g, '<b>$1</b>')
    .replace(/\^([^^]*)\^/g, '<em>$1</em>')
    .replace(/_([^_]*)_/g, '<u>$1</u>')

  const someHtml = str;

  return <pre dangerouslySetInnerHTML={{ __html: someHtml }} />;
};

export default test;
