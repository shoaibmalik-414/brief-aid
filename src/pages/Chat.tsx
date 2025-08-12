import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Seo from "@/components/Seo";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! Connect Gmail on your Dashboard, then ask me to draft or send emails." }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const onSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }]);

    const gmailConnected = localStorage.getItem("gmail_connected") === "true";
    if (!gmailConnected) {
      toast.warning("Gmail not connected. Go to Dashboard to connect.");
    }

    // Placeholder assistant response
    const reply = gmailConnected
      ? `Understood. I would call the Gmail MCP to fulfill: "${text}".`
      : `I can do that once Gmail is connected. Please connect it on the Dashboard.`;

    setTimeout(() => setMessages((m) => [...m, { role: "assistant", content: reply }]), 400);
  };

  return (
    <main className="min-h-screen container py-10">
      <Seo title="Chat | MCP SaaS" description="Type prompts and let the assistant work across your connected tools." />
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Assistant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="min-h-[40vh] max-h-[60vh] overflow-y-auto rounded-md border p-4 bg-muted/20">
              {messages.map((m, idx) => (
                <div key={idx} className={`mb-3 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-md max-w-[80%] ${m.role === 'user' ? 'bg-brand text-brand-foreground' : 'bg-secondary'}`}>
                    <p className="text-sm">{m.content}</p>
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <form className="flex gap-2" onSubmit={onSend}>
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Draft reply to John about yesterday's meeting..." />
              <Button type="submit" variant="brand">Send</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Chat;
