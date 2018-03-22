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

Grap the project and install a thousand npm packages.

```bash
$ mix deps.get && mix phx.tailwind_vue
```

To run webpack as a watcher while the development server is running, edit the `watchers` option in `config/dev.exs`:

```elixir
config :your_app, YourAppWeb.Endpoint,
  # ...
  # all the other options
  # ...
  watchers: [npm: ["run", "watch"]]
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at [https://hexdocs.pm/phoenix_tailwind_vue](https://hexdocs.pm/phoenix_tailwind_vue).
