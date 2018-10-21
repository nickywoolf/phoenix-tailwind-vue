# PhoenixTailwindVue

**TODO: Add description**

## Installation

I've only been testing with Phoenix 1.3+ created without brunch.

```bash
$ mix phx.new --no-brunch
```

Add dependency to `mix.exs`

```elixir
def deps do
  [
    {:phoenix_tailwind_vue, git: "https://github.com/nickywoolf/phoenix-tailwind-vue"}
  ]
end
```

Grab the project and install a thousand npm packages. 
>This step will copy files into an `assets` directory. If you already have `assets/js/app.js` or `assets/js/app.css`, those could (and most likely will) go bye-bye.

```bash
$ mix deps.get && mix phx_tailwind_vue.assets
```

To run webpack as a watcher while the development server is running, edit the `watchers` option in `config/dev.exs`:

```elixir
config :your_app, YourAppWeb.Endpoint,
  # ...
  # all the other options
  # ...
  watchers: [npm: ["run", "watch"]]
```

## Vue Tests

There is an example vue component test in `assets/js/__tests__/Hello.spec.js`.

Run tests with the following commands

```bash
$ npm run test
$ npm run test-watch
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at [https://hexdocs.pm/phoenix_tailwind_vue](https://hexdocs.pm/phoenix_tailwind_vue).
