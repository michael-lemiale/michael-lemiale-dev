import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-bold title text-4xl mb-1 tracking-tighter">
        Work Experience - Elaborated
      </h1>
      <hr />
      <BlogPosts />
    </section>
  );
}
