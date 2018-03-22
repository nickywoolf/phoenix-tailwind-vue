# PhoenixTailwindVue

**TODO: Add description**

## Installation

```elixir
def deps do
  [
    {:phoenix_tailwind_vue, git: "https://github.com/nickywoolf/phoenix-tailwind-vue"}
  ]
end
```

To run webpack as a watcher while the development server is running, edit `watchers` option in `config/dev.exs`:

```elixir
config :your_app, YourAppWeb.Endpoint,
  # ...all the other options
  watchers: [npm: ["run", "watch"]]
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at [https://hexdocs.pm/phoenix_tailwind_vue](https://hexdocs.pm/phoenix_tailwind_vue).
