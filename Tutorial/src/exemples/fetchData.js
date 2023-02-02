import React from 'react';
import {useStaticQuery , graphql} from "gatsby";

const getData = graphql`
    {
      site {
        siteMetadata {
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
    const {site : {siteMetadata}} = useStaticQuery(getData);
    return (
        <div>
            <h2>{siteMetadata.title}</h2>
            <h2>{siteMetadata.author}</h2>
        </div>
    );
};

export default FetchData;
