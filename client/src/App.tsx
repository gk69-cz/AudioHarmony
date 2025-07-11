import { Switch, Route } from "wouter";
import { Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { CustomCursor } from "./components/custom-cursor";

const NotFound = React.lazy(() => import("@/pages/not-found"));
const Home = React.lazy(() => import("@/pages/home"));
const About = React.lazy(() => import("@/pages/about"));
const Products = React.lazy(() => import("@/pages/products"));
const ProductDetail = React.lazy(() => import("@/pages/product-detail"));
const Technology = React.lazy(() => import("@/pages/technology"));
const Contact = React.lazy(() => import("@/pages/contact"));
import { Analytics } from "@vercel/analytics/next"
function Router() {
  return (
    <Suspense fallback={<div> <CustomCursor /></div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/technology" component={Technology} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
     
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <Analytics/>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
