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
import {MainComponent} from './components/common/styled';
import {useTranslation} from 'react-i18next';
import {NotFoundPage} from './pages/notFound/NotFound.page';
import {RegisterPage} from './pages/register/register.page';

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
    <MainComponent>
        <Header />
        {props.children}
    </MainComponent>
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
            <RouteWithLayout
                exact
                path = "/register"
                layout = {MainLayout}
                component = {RegisterPage}
            />
            <RouteWithLayout
                exact
                layout = {MainLayout}
                component = {NotFoundPage}
            />
        </Switch>
    </Router>);
}

export default Routes;
