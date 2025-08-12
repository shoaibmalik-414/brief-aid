import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const Index = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--pointer-x", `${x}px`);
    el.style.setProperty("--pointer-y", `${y}px`);
  };

  return (
    <main>
      <Seo title="MCP SaaS | Unified Productivity Hub" description="Clean, responsive SaaS MVP that connects tools via MCP. Secure auth, dashboard integrations, and a powerful chat interface." />
      <section ref={ref} onMouseMove={onMouseMove} className="relative overflow-hidden">
        <div className="bg-hero-gradient">
          <div className="container min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 py-20">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Your MCP‑Powered Productivity Hub
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Connect Gmail and more, then work through a focused chat interface. Minimal clicks, maximum flow.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="/auth/signup"><Button size="lg" variant="brand" className="shadow-glow">Get Started</Button></a>
              <a href="/dashboard"><Button size="lg" variant="hero">View Dashboard</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="container grid md:grid-cols-3 gap-6 py-14">
        <div className="rounded-lg border p-6">
          <h3 className="font-medium mb-2">Authentication</h3>
          <p className="text-muted-foreground text-sm">Email/password accounts with profiles. Secured via Supabase (connect to enable).</p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-medium mb-2">Dashboard Integrations</h3>
          <p className="text-muted-foreground text-sm">Start with Gmail OAuth, then expand to CRM, calendar, and files.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-medium mb-2">Chat Assistant</h3>
          <p className="text-muted-foreground text-sm">Write prompts and trigger actions via MCP servers across your tools.</p>
        </div>
      </section>
    </main>
  );
};

export default Index;
