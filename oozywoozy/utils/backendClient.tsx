import { createClient } from "@sanity/client";
import { create } from "domain";

export const clients = createClient({
    projectId: '0sqgeum8',
    dataset: 'oozywoozy',
    apiVersion: '2024-11-12',
    useCdn: true,
    token: 'skjLVLyhhXCaYmg8f1NRsK7EnZxzGK2T2KVEsgu8CNm9hYPpGBmFvICxRZ80Qnnwdr4vZ9BEieyLrOF24fnr8VBS3C6V2K7LbBFdkRjSklvfExJLanPfs6iXgqQcIDsovoP5aXIWXdP1g30WUyr2yXAoyDxGtwN1eqo0T4e1CtTPWDfIQcJ8'
})