const mix = require("laravel-mix")

require("laravel-mix-tailwind")
require("laravel-mix-purgecss")

mix.setPublicPath(path.resolve('./priv/static'))
    .js("js/app.js", "js")
    .postCss("css/app.css", "css")
    .tailwind()
    .purgeCss({
        enabled: mix.inProduction(),
        globs: [
            path.join(__dirname, "js/components/*.vue"),
            path.join(__dirname, "../lib/*/templates/*/*.eex")
        ],
        extensions: ["eex", "vue"],
    })

if (mix.inProduction()) {
    mix.version()
}
