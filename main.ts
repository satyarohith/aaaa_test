import { serve, json } from "https://deno.land/x/sift@0.1.4/mod.ts";

serve({
  "/": () => json({ message: "Hello, world!" })
});
