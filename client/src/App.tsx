import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
      <WhatsAppButton />
      <Toaster />
    </>
  );
}

export default App;
