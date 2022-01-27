import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//Connect Frontend to Backend
export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-01-26',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
})

const building = imageUrlBuilder(client);

export const urlFor = (source) => building.image(source);