import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: Page not found");
  }, []);

  return (
    <main className="min-h-screen grid place-items-center px-4">
      <Seo title="404 | Page Not Found" description="Sorry, we couldn’t find that page." />
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-3">404</h1>
        <p className="text-muted-foreground mb-6">Oops! Page not found</p>
        <Link to="/">
          <Button variant="brand">Go Home</Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
