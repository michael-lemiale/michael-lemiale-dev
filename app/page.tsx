import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-xl font-normal">
        {`Hi 👋🏻 I'm Michael.\n`} 
      </h1>
      <h1 className="mb-4 text-xl font-normal">
        {`I'm a data nerd and experienced software engineer in the data and analytics space. 
        I’ve spent years developing efficient, well architected data warehousing enviornments.`}
      </h1>
      <h1 className="mb-4 text-xl font-normal">
        {`My full time passion is enabling world class analytics. I strive to uplift my peers
        through the tools and processes I have the opportunity to work on.`}
      </h1>
      <h1 className="mb-4 text-xl font-normal">
        {`Part time, `} <a className="text-blue-600 hover:text-blue-800" target="_blank" href="https://notfromparismusic.com/">I’m a musician.</a>
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
