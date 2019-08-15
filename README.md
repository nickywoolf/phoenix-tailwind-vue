# PhoenixTailwindVue

**TODO: Add description**

## Installation

> I've only been testing with Phoenix 1.4

Add dependency to `mix.exs`

```elixir
def deps do
  [
    {:phoenix_tailwind_vue, git: "https://github.com/nickywoolf/phoenix-tailwind-vue"}
  ]
end
```

Grab this package and install npm packages.

```bash
$ mix deps.get && mix phx_tailwind_vue.assets
```

You're ready to rock 'n roll!

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at [https://hexdocs.pm/phoenix_tailwind_vue](https://hexdocs.pm/phoenix_tailwind_vue).
