import axios from "axios";

class BlogApi {
  private readonly apiKey: string;
  private readonly blogId: string;

  constructor(apiKey: string, blogId: string) {
    this.apiKey = apiKey;
    this.blogId = blogId;
  }

  async get(endpoint: string, maxResults: number = 50) {
    const res = await axios.get(
      `https://www.googleapis.com/blogger/v3/blogs/${this.blogId}/${endpoint}?maxResults=${maxResults}&key=${this.apiKey}&fetchImages=true`
    );
    return res.data;
  }

  async getProject(pageId: string) {
    const res = await axios.get(
      `https://www.googleapis.com/blogger/v3/blogs/${this.blogId}/pages/${pageId}?key=${this.apiKey}`
    );
    return res.data;
  }
}

export const blog = new BlogApi(
  process.env.NEXT_PUBLIC_BLOGGER_API_KEY!,
  process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID!
);
