import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-semibold tracking-tighter">
        Michael Lemiale
      </h1>
      <h3 className="mb-10 text-2xl font-semibold tracking-tighter">
        Data Engineer
      </h3>
      <h1 className="mb-4 text-xl">
        {`Hi 👋🏻 I'm Michael.\n`} 
      </h1>
      <h1 className="mb-4 text-xl">
        {`I'm a data nerd and experienced software engineer in the data and analytics space. 
        I’ve spent years developing efficient, well architected data warehousing enviornments.`}
      </h1>
      <h1 className="mb-4 text-xl">
        {`My full time passion is enabling world class analytics: uplifting those I work with 
        through the tools and processes I have the opportunity to work on.`}
      </h1>
      <h1 className="mb-4 text-xl">
        {`Part time, `} <a className="link-danger" target="_blank" href="https://notfromparismusic.com/">I’m a musician.</a>
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
