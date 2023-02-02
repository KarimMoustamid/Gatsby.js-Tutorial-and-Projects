import React from 'react';
import {graphql} from "gatsby";


const Test = ({data: {site: {info}}}) => {
    const author = info.author;
    return (
        <div>
         <h2>{author}</h2>
        </div>
    );
};

export const data = graphql`
    query PageQuery {
      site {
        info : siteMetadata {
          author
          description
          simpleData
          title
          complexData {
            age
            name
          }
          person {
            age
            name
          }
        }
      }
    }
`

export default Test;
