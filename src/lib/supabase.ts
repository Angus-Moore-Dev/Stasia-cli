import { createClient, type SupportedStorage } from "@supabase/supabase-js";
import fs from 'fs';

const storage: SupportedStorage = 
{
    async getItem(key: string) {
        // Check if the file exists
        if (!fs.existsSync(key)) {
            fs.writeFileSync(key, '');
        }
        return fs.readFileSync(key, 'utf8');
    },
    async setItem(key: string, value: string) {
        // Check if the file exists
        if (!fs.existsSync(key)) {
            fs.writeFileSync(key, '');
        }
        fs.writeFileSync(key, value);
    },
    async removeItem(key: string) {
        if (fs.existsSync(key))
            fs.unlinkSync(key);
    }
}

export const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
    auth: {
        storage: storage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    }
});