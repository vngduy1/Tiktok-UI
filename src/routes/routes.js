import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Friends from '~/pages/Friends';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';
import { HeaderOnly } from '~/layouts';

import config from '~/config';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.friends,
        component: Friends,
    },
    {
        path: config.routes.explore,
        component: Explore,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
