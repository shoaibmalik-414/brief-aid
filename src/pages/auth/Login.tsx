import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Seo from "@/components/Seo";
import { toast } from "sonner";

const Login = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Connect Supabase to enable real authentication.");
  };

  return (
    <main className="min-h-screen grid place-items-center px-4">
      <Seo title="Login | MCP SaaS" description="Secure login to your MCP-powered productivity hub." />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" variant="brand" className="w-full">Log in</Button>
            <p className="text-sm text-muted-foreground text-center">
              New here? <Link to="/auth/signup" className="underline">Create an account</Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Login;
