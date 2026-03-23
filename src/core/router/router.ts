import { HomePage } from "../../home/home-page";

export const routes = [
    {
        path: "/",
        label: "Inicio",
        component: HomePage.render,
    },
    {
        path: "/app",
        label: "App",
        component: projectsPage,
    },
    {
        path: "/todo",
        label: "Tareas",
        component: todoPage,
    },
    {
        path: "/contact",
        label: "Contacto",
        component: contactPage,
    },
];

export const navigate = (url = "", addHistory = true) => {
    console.log("URL for navigate", url);
    console.log(history.state)

    if (history.state?.url  === url) {
        return;
    }

    if (addHistory) {
        history.pushState({ url }, null, url);
    }
    let path = url.split("/").pop();
    const route = routes.find((o) => o.path === "/" + path);

    if (route) {
        route.component();
    }
};
