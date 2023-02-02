import React from 'react';
import {graphql, useStaticQuery} from "gatsby";

const getData = graphql`
    {
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
`;

const FetchData = () => {
    const {site: {info}} = useStaticQuery(getData);
    return (
        <div>
            <h2>{info.title}</h2>
            <h2>{info.author}</h2>
        </div>
    );
};

export default FetchData;
