//Tekneo.tsx
import { createRoot } from "react-dom/client";
import AppTekneo from "./AppTekneo";
import "./i18n"; // Importa la configuración

createRoot(document.getElementById("tekneo-root")!).render(<AppTekneo />);
