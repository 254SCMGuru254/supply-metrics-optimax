import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Onboarding from "./pages/Onboarding";
import Index from "./pages/Index";
import Analytics from "./pages/Analytics";
import CenterOfGravity from "./pages/CenterOfGravity";
import NetworkOptimization from "./pages/NetworkOptimization";
import Simulation from "./pages/Simulation";
import Heuristic from "./pages/Heuristic";
import Isohedron from "./pages/Isohedron";
import DataInput from "./pages/DataInput";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Index />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/center-of-gravity" element={<CenterOfGravity />} />
            <Route path="/network-optimization" element={<NetworkOptimization />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/heuristic" element={<Heuristic />} />
            <Route path="/isohedron" element={<Isohedron />} />
            <Route path="/data-input" element={<DataInput />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;