import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import BlogPost from "@/pages/BlogPost";
import AboutUs from "@/pages/AboutUs";
import Guide from "@/pages/Guide";
import FloatingContactButton from "@/components/FloatingContactButton";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/about" component={AboutUs} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/guide/:slug" component={Guide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <FloatingContactButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
