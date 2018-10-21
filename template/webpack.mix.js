const mix = require("laravel-mix")

require("laravel-mix-tailwind")
require("laravel-mix-purgecss")

mix.setPublicPath(path.resolve('./'))
    .js("assets/js/app.js", "priv/static/js")
    .postCss("assets/css/app.css", "priv/static/css")
    .tailwind()
    .purgeCss({
        enabled: mix.inProduction(),
        globs: [
            path.join(__dirname, "assets/js/components/*.vue"),
            path.join(__dirname, "lib/*/templates/*/*.eex")
        ],
        extensions: ["eex", "vue"],
    })

if (mix.inProduction()) {
    mix.version()
}
