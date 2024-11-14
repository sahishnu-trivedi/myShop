import { createClient } from "@sanity/client";

export const clients = createClient({
    projectId: '0sqgeum8',
    dataset: 'production',
    apiVersion: '2024-11-12',
    useCdn: true,

})