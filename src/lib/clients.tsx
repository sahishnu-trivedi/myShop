import { createClient } from "@sanity/client";

const clients = createClient({
    projectId: '0sqgeum8',
    dataset: 'oozywoozy',
    apiVersion: '2024-11-12',
    useCdn: true,
})

export default clients;

// import sanityClient from "@sanity/client";

// export default sanityClient({
//   projectId: "Your Project ID Here", // find this at manage.sanity.io or in your sanity.json
//   dataset: "production", // this is from those question during 'sanity init'
//   useCdn: true,
// });