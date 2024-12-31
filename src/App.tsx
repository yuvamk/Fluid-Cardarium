import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import Index from "./pages/Index";
import Recruitment from "./pages/Recruitment";
import Schedule from "./pages/Schedule";
import Employee from "./pages/Employee";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50 dark:bg-navy transition-colors duration-200">
            <Sidebar />
            <Header />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/employee" element={<Employee />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;