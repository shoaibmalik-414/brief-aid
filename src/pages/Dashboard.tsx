import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Seo from "@/components/Seo";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const STORAGE_KEY = "gmail_connected";

const Dashboard = () => {
  const [gmailConnected, setGmailConnected] = useState<boolean>(false);

  useEffect(() => {
    setGmailConnected(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const handleConnect = () => {
    toast.info("For real OAuth, connect Supabase then add Google OAuth.");
    const next = !gmailConnected;
    localStorage.setItem(STORAGE_KEY, String(next));
    setGmailConnected(next);
  };

  return (
    <main className="min-h-screen container py-10">
      <Seo title="Dashboard | MCP SaaS" description="Connect tools like Gmail and start using the chat assistant." />
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your connected tools</p>
        </div>
        <div className="flex gap-3">
          <Link to="/chat"><Button variant="brand">Open Chat</Button></Link>
        </div>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Connected Tools</CardTitle>
            <CardDescription>Start with Gmail. OAuth will be wired after Supabase setup.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg border p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Gmail</h3>
                  <span className={`text-xs px-2 py-1 rounded-full border ${gmailConnected ? 'bg-secondary' : ''}`}>
                    {gmailConnected ? 'Connected' : 'Not connected'}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Fetch and send emails via the assistant.</p>
                <Button onClick={handleConnect} variant={gmailConnected ? 'outline' : 'brand'}>
                  {gmailConnected ? 'Disconnect' : 'Connect'}
                </Button>
              </div>
            </div>
            <Separator className="my-6" />
            <p className="text-sm text-muted-foreground">Need real integrations? Connect Supabase in the top-right, then we’ll add secure OAuth, token storage, and RLS.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Dashboard;
