const path = "http://134.249.147.135/";
export const API = {

    getCVs: async () => {
        return fetch(`${path}team/CVs/`)
            .then(r => r.json())
            .catch(() => []);
    },

    getSprint: async (id) => {
        return fetch(`${path}getSprint?id=${id}`)
            .then(r => r.json())
            .catch(() => []);
    },

    saveSprint: (form) => {
        return fetch(`${path}saveSprint/`, {
            method: "POST",
            mode: 'no-cors',
            body: form,
        });
    },

    getCount: async () => {
        return fetch(`${path}sprintsCount/`)
            .then(r => r.json())
            .catch(e => console.log(e));
    },
};