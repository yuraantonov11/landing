import React, {ReactChild, Suspense} from "react";
import {
    Router,
    Route,
    Switch,
    RouteProps,
    RouteComponentProps
} from "react-router";
import {createBrowserHistory} from "history";
import Landing from './components/landing';
import Header from './components/header';
import Footer from './components/footer';
import {useTranslation} from 'react-i18next';

export const history = createBrowserHistory();

interface RouteWithLayoutProps {
    isPrivate?: boolean;
    layout:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
}

const RouteWithLayout: React.FC<RouteProps & RouteWithLayoutProps> = ({isPrivate, layout, component, path, ...rest}) => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<div>{t('loading')}... </div>}>
            <Route
                {...rest}
                path={path}
                render={props =>
                    React.createElement(
                        layout,
                        props,
                        component && React.createElement(component, props)
                    )
                }
            />
        </Suspense>);
    };
type Props = {
    children: ReactChild
}
const MainLayout: React.FC<Props> = props => (
    <main className="App">
        <Header />
        {props.children}
        <Footer />
    </main>
);

function Routes() {
    return (<Router history = {history}>
        <Switch>
            <RouteWithLayout
            exact
            path = "/"
            layout = {MainLayout}
            component = {Landing}
            />
            {/*<Route*/}
            {/*    exact*/}
            {/*    component = {//NotFoundPage}*/}
            {/*    />*/}
        </Switch>
    </Router>);
}

export default Routes;
