import { querySelector } from "./utils.js";

export async function Header() {
  const headerContainer = querySelector('header');
  const response = await fetch('/Components/header.html');
  const html = await response.text();
  headerContainer.innerHTML = html;
}