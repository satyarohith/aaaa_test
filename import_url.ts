import { serve, json } from "https://deno.land/x/sift/mod.ts";

serve({
 "/": () => json({ importUrl: import.meta.url }),
})
