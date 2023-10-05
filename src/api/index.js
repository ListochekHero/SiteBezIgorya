const path = "http://134.249.147.135/";
export const API = {

    getCVs: () => {
        const cv = fetch(`${path}team/CVs/`)
            .then(r => r.json(), () => [])
            .catch(e => console.log(e));

        return cv;
    },

    getSprint: (id) => {
        const sprint = fetch(`${path}getSprint?id=${id}`)
            .then(r => r.json(), () => [])
            .catch(e => console.log(e));

        return sprint;
    },

    saveSprint: async (form) => {
        await fetch(`${path}saveSprint/`, {
            method: "POST",
            mode: 'no-cors',
            body: form,
        })
            .then(r => r.json())
            .then(r => console.log(r))
            .catch(e => console.log(e));
    },

    getCount: () => {
        const count = fetch(`${path}sprintsCount/`)
            .then(r => r.json(), () => 0)
            .catch(e => console.log(e));

        return count;
    },
};