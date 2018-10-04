const mix = require("laravel-mix")

require("laravel-mix-tailwind")
require("laravel-mix-purgecss")

mix.js("assets/js/app.js", "priv/static/js")
    .postCss("assets/css/app.css", "priv/static/css")
    .tailwind()
    .purgeCss({
        extensions: ["eex"],
        folders: ["lib/tailwave_web/templates"]
    })

if (mix.inProduction()) {
    mix.version()
}