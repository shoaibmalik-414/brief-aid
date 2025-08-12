import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
}

const Seo = ({ title, description = "MCP-powered productivity app for business knowledge workers.", canonical }: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical || (typeof window !== 'undefined' ? window.location.href : '/') } />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default Seo;
