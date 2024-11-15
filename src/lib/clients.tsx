import { createClient } from "@sanity/client";
import { env } from "process";

const clients = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
    useCdn: true,
})

export default clients;

// import sanityClient from "@sanity/client";

// export default sanityClient({
//   projectId: "Your Project ID Here", // find this at manage.sanity.io or in your sanity.json
//   dataset: "production", // this is from those question during 'sanity init'
//   useCdn: true,
// });