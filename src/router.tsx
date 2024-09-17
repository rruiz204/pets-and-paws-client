import { createBrowserRouter } from "react-router-dom";
import redirects from "./routes/Redirects";
import publics from "./routes/Publics";
import privates from "./routes/Privates";
import NotFound from "./modules/not_found/NotFound";

const router = createBrowserRouter([
  ...redirects, 
  ...publics,
  ...privates,
  { path: "*", element: <NotFound/> }
]);

export default router;