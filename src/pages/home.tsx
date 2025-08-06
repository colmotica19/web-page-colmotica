import { FooterComponent } from "../components/Footer";
import { NavBarComponent } from "../components/NavBar";

export function HomePage() {
  return (
    <div>
      <NavBarComponent />
      <h1>Home</h1>
      <FooterComponent />
    </div>
  );
}
