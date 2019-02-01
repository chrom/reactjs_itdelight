import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Head from './elements/Head';
import Body from './elements/Body';
import Search from './elements/body/Search';
import Pagination from './elements/body/Pagination';
import List from './elements/body/List';
import View from './elements/body/post/View';
import Card from './elements/body/list/Card';
import Card from './elements/body/';


const routes = [
    {
        path: "/",
        component: Head
    },
    {
        path: "/",
        component: Body
    },
    {
        path: "/",
        component: Search
    },
    {
        path: "/list",
        component: List
    },
    {
        path: "/list",
        component: Pagination
    },
    {
        path: "/list",
        component: Card
    }
];
