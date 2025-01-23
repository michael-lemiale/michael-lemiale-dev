import { CustomMDX } from "./CustomMDX";
import { formatDate, getPortfolioPosts } from "@/utils";

type Props = {
  locale: string;
};

export function Projects(locale: Props) {
  let allBlogs = getPortfolioPosts(locale, "projects");

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
                  {formatDate(locale, post.metadata.publishedAt)}
                </p>
              </div>
            </div>
            <article className="text-xl font-normal prose">
              <CustomMDX source={post.content} />
            </article>
            <div className="mt-12" style={{ position: "relative" }}>
              <iframe src={post.metadata.url} height={600} width={"100%"} />
              <a
                href={post.metadata.url}
                target="_blank"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "inline-block",
                  width: "100%",
                  height: "600px",
                  zIndex: 5,
                }}
              ></a>
            </div>
          </div>
        ))}
    </div>
  );
}
