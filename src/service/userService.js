import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        //axios request
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserVideo = async ({ uuid }) => {
    try {
        //axios request
        const res = await httpRequest.get(`/videos/${uuid}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
