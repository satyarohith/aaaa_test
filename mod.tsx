import {
  h,
  json,
  jsx,
  PathParams,
  serve,
} from "https://deno.land/x/sift@0.1.6/mod.ts";

serve({
  "/": (request) => {
    console.log(request);
    return json({ message: "Hello, world!" });
  },
  "/:slug": (request, params?: PathParams) => {
    console.warn(request.url);
    return jsx(<html>{`visited /${params?.slug}`}</html>);
  },
});
