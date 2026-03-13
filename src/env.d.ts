declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BLOGGER_API_KEY: string;
    NEXT_PUBLIC_BLOGGER_BLOG_ID: string;
    // Add other environment variables here
    NEXT_PUBLIC_EMAIL_SERVICE_ID: string;
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID: string;
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: string;
    FB_PAGE_ACCESS_TOKEN: string;
    DATABASE_URL: string;
    NODE_ENV: 'development' | 'production' | 'test'; // Example of a specific type
    PORT?: string; // Example of an optional variable
  }
}
