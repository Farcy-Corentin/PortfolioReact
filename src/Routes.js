import Home from './pages/HomePage';
import About from './pages/About';
import Works from './pages/Works';
import Skills from "./pages/Skills";
import HomePage from "./pages/HomePage";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/Works",
        name: "Works",
        component: Works,
    },
    {
        path: "/About",
        name: "About",
        component: About,
    },
    {
        path: "/Skills",
        name: "Skills",
        component: Skills,
    }
]

export default routes;