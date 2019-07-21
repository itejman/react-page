import React from 'react';
import "./index.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import MainView from '../MainView/MainView';
import ArticlesView from '../ArticlesView/ArticlesView';
import BooksView from '../BooksView/BooksView';
import VideosView from '../VideosView/VideosView';

class Root extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Route path="/" component={ NavBar } />
                <Switch>
                    <Route exact path="/" component={ MainView } />
                    <Route path="/articles" component={ ArticlesView } />
                    <Route path="/books" component={ BooksView } />
                    <Route path="/videos" component={ VideosView } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Root;