import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./Button";
import { Header } from "./Header";

export function StyleToggle() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      <Header />
      <p>
      Permitir que os usuários alternem entre dois estilos diferentes em um componente.

Descrição:

Crie um componente chamado StyleToggle.
Adicione um estado para controlar o estilo atual (por exemplo, "light" ou "dark").
Renderize um componente com base no estilo atual.
      </p>
      <Button />
      <h4>Adicione um botão que alterne entre os estilos quando clicado.</h4>
    </div>
  );
}