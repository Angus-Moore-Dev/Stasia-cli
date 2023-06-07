import { supabase } from "../lib/supabase";
import { ProjectSecret } from "../utils/types";


export default async function fetchSecrets(projectId: string, prod?: boolean): Promise<ProjectSecret[] | null>
{
    const res = await supabase.from('project_secrets').select('*').eq('projectId', projectId).eq('prod', prod ?? false);

    if (res.error)
    {
        return null;
    }
    else
    {
        return res.data as ProjectSecret[];
    }
}