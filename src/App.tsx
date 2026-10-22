import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/home";
import Servicios from "@/pages/servicios";
import Proceso from "@/pages/proceso";
import Planes from "@/pages/planes";
import PlanesHosting from "@/pages/planes-hosting";
import PlanesSSL from "@/pages/planes-ssl";
import PlanesWhatsapp from "@/pages/planes-whatsapp";
import PlanesCambios from "@/pages/planes-cambios";
import Contacto from "@/pages/contacto";
import Demos from "@/pages/demos";
import SeccionSecciones from "@/pages/seccion-secciones";
import SeccionSEO from "@/pages/seccion-seo";
import SeccionPaginas from "@/pages/seccion-paginas";
import SeccionAnalytics from "@/pages/seccion-analytics";
import SeccionSearchConsole from "@/pages/seccion-search-console";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60_000, retry: 1 },
  },
});

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/proceso" component={Proceso} />
        <Route path="/planes" component={Planes} />
        <Route path="/planes-hosting" component={PlanesHosting} />
        <Route path="/planes-ssl" component={PlanesSSL} />
        <Route path="/planes-whatsapp" component={PlanesWhatsapp} />
        <Route path="/planes-cambios" component={PlanesCambios} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/demos" component={Demos} />
        <Route path="/seccion-secciones" component={SeccionSecciones} />
        <Route path="/seccion-seo" component={SeccionSEO} />
        <Route path="/seccion-paginas" component={SeccionPaginas} />
        <Route path="/seccion-analytics" component={SeccionAnalytics} />
        <Route path="/seccion-search-console" component={SeccionSearchConsole} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export function App({ path }: { path?: string }) {
  const staticProps = path
    ? { hook: () => [path, () => {}] as [string, () => void], searchHook: () => "" }
    : {};
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter {...staticProps} base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
