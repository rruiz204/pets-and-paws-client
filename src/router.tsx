import { createBrowserRouter } from "react-router-dom";
import redirects from "@core/routes/Redirects";
import publics from "@core/routes/Publics";
import privates from "@core/routes/Privates";

const router = createBrowserRouter([
  ...redirects, 
  ...publics,
  ...privates,
]);

export default router;