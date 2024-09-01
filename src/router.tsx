import { createBrowserRouter } from "react-router-dom";
import redirects from "./routes/redirects";
import publics from "./routes/publics";
import NotFound from "./modules/not_found/NotFound";

const router = createBrowserRouter([
  ...redirects, 
  ...publics,
  { path: "*", element: <NotFound/> }
]);

export default router;