import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Seo from "@/components/Seo";
import { toast } from "sonner";

const Signup = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Connect Supabase to enable real sign-up and profiles.");
  };

  return (
    <main className="min-h-screen grid place-items-center px-4">
      <Seo title="Sign Up | MCP SaaS" description="Create your account to connect tools and boost productivity." />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org">Organization (optional)</Label>
              <Input id="org" type="text" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" variant="brand" className="w-full">Create account</Button>
            <p className="text-sm text-muted-foreground text-center">
              Already have an account? <Link to="/auth/login" className="underline">Log in</Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Signup;
