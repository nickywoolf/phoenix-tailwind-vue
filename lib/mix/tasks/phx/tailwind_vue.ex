defmodule Mix.Tasks.Phx.TailwindVue do
  @moduledoc """
  Installs Tailwindcss and Vue in a Phoenix project.
  """

  use Mix.Task

  @directories [
    "assets/css",
    "assets/js/components"
  ]

  @assets [
    {"assets/.babelrc", ".bablerc"},
    {"assets/package.json", "package.json"},
    {"assets/postcss.config.js", "postcss.config.js"},
    {"assets/webpack.config.js", "webpack.config.js"},
    {"assets/css/app.css", "assets/css/app.css"},
    {"assets/js/app.js", "assets/js/app.js"},
    {"assets/js/components/Hello.vue", "assets/js/components/Hello.vue"}
  ]

  @shortdoc "Installs Tailwindcss and Vue in a Phoenix project."
  def run(_args) do
    Enum.each(@directories, &make_directory/1)
    Enum.each(@assets, &copy_file/1)
    System.cmd("npm", ["install"])
    System.cmd(Path.expand("./node_modules/.bin/tailwind"), ["init"])
  end

  defp make_directory(dir) do
    dir |> Path.expand() |> File.mkdir_p!()
  end

  defp copy_file({file, destination}) do
    file |> local_path() |> File.copy!(Path.expand(destination))
  end

  defp local_path(file) do
    Path.expand("../../../../" <> file, unquote(__DIR__))
  end
end
