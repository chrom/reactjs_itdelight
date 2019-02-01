import React from 'react';
import MetaTags from 'react-meta-tags';

export default class Meta extends React.Component {
    render() {
        return (
            <MetaTags>
                <meta id="meta-description" name="description" content="Some description."/>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Document</title>
            </MetaTags>
        )
    }
}
