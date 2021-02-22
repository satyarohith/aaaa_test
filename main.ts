import { serve, json } from "https://deno.land/x/sift@0.1.4/mod.ts";

serve({
  "/": request => {
    console.log(request);
    return json({ message: "Hello, world!" });
  }
});
