import { CustomMDX } from "./CustomMDX";
import { formatDate, getPortfolioPosts } from "@/utils";

export function WorkElaborated() {
  let allBlogs = getPortfolioPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div key={post.slug} className="flex flex-col mt-8">
            <div className="w-full flex flex-col items-start">
              <h1 className="title font-semibold text-3xl tracking-tighter">
                {post.metadata.title}
              </h1>
              <div className="items-start mt-2">
                <p className="text-normal text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </div>
            </div>
            <article className="text-xl font-normal prose">
              <CustomMDX source={post.content} />
            </article>
          </div>
        ))}
    </div>
  );
}
