defmodule Mix.Tasks.PhxTailwindVue.Assets do
  @moduledoc """
  Installs Tailwindcss and Vue in a Phoenix project.
  """

  use Mix.Task

  @shortdoc "Installs Tailwindcss and Vue in a Phoenix project."
  def run(_args) do
    copy_files()
    install_packages()
    initialize_tailwind()
  end

  defp copy_files() do
    "../../../../template"
    |> Path.expand(__DIR__)
    |> File.cp_r!(Path.expand("."))
  end

  defp install_packages() do
    System.cmd("npm", ["install"], cd: "assets")
  end

  defp initialize_tailwind() do
    "./assets/node_modules/.bin/tailwind"
    |> Path.expand()
    |> System.cmd(["init"], cd: "./assets")
  end
end
