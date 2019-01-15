import React from 'react';

const test = props => {

    // let str = props.blog.replace(/\*/g, '<b>');

    let str = props.blog
    let split = str.split(' ')
    console.log(split)

    const test = split.map((e,i) => {
        let count = 1

        if(e === '*') {
            count = count + 1
        }
        console.log(count)
    })

    console.log(test)

//   let str = props.blog
//       .replace('*', '<b>')
//       .replace('*', '</b>')
//       .replace('^', '<em>')
//       .replace('^', '</em>')
//       .replace('_', '<u>')
//       .replace('_', '</u>')

  const someHtml = props.blog;

  return <pre dangerouslySetInnerHTML={{ __html: someHtml }} />;
};

export default test;
