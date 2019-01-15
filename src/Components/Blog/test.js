import React from 'react';

const test = (props) => {
    // const parse = new HTMLtoDOM(props.blog)
    
    // return (
    //     <div className='test_blog'>
    //         {parse}
    //     </div>
    // );

        const someHtml = props.blog
     
        return(
            <div dangerouslySetInnerHTML={{__html: 
             someHtml}}></div>
         )

};

export default test;