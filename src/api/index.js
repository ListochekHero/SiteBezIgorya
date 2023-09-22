export const API = {
    getCV: () => [
        {
            name: "Фещенко Сергій",
            description: "Займався backend-розробкою та налаштуванням серверу.",
            url: "http://localhost/img/avatar_1",
            gitHub: "https://github.com/ListochekHero",
            cv: "/CV",
            portfolio: "https://github.com/ListochekHero?tab=repositories",
            id: 1,
        },
        {
            name: "Кривизюк Андрій",
            description: "Займався frontend-розробкою.",
            url: "http://localhost/img/avatar_2",
            gitHub: "https://github.com/su8ject",
            cv: "/CV",
            portfolio: "su8ject.github.io/portfolio/",
            id: 2,
        }],

    getSprint: (id) => ({
        id: 1,
        title: "Some sprint name",
        date: new Date().toLocaleString(),
        snapshotURL: "https://wow.zamimg.com/uploads/screenshots/small/544219.jpg",
        description: ["some text", "some text", "some text", "some text", "some text", "some text"],
        comments: [
            {
                name: "Dmytro",
                role: "foo",
                comment: "some text",
                avatar: "url",
            },
            {
                name: "Serhii",
                role: "foo",
                comment: "some text",
                avatar: "url",
            },
            {
                name: "Andrii",
                role: "foo",
                comment: "some text",
                avatar: "url",
            },
        ],
    }),

    saveSprint: (object) => {
        console.log(object);
    },
};