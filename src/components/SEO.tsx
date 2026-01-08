import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = 'AgMinds - Growing Curious Minds Through Nature Education',
  description = 'AgMinds helps children understand nature through concept-based learning. Building foundational understanding of soil, water, food, and natural cycles so care follows naturally.',
  keywords = 'nature education, children learning, environmental education, concept-based learning, soil education, water education, sustainable education, outdoor learning, AgMinds',
  image = 'https://bolt.new/static/og_default.png',
  url = 'https://agminds.org',
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#677845" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
