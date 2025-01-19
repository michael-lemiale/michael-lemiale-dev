import Link from 'next/link'
import Head from 'next/head'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/portfolio': {
    name: 'Portfolio',
  },
  '/cv': {
    name: 'CV',
  },
}

function RedTriangleIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1" 
      id="Layer_1"
      width="105px"
      height="105px"
      viewBox="0 0 512 512"
    >
      <path 
        d=" M217.001740,146.978363   C225.063156,133.982666 232.883133,121.233467 241.102997,108.747520   C249.415909,96.120285 266.085236,96.682816 274.927612,109.712547   C282.230438,120.473717 289.212860,131.457458 296.703003,142.084763   C302.683777,150.570526 309.444305,158.506165 315.438690,166.983017   C321.543457,175.616043 326.954620,184.737274 332.987396,193.423965   C347.021667,213.632156 361.225769,233.722656 375.402527,253.831604   C385.171051,267.687683 395.075623,281.448181 404.794281,295.338959   C412.168518,305.878906 419.301758,316.587128 426.625763,327.162659   C431.409698,334.070465 436.492523,340.774628 441.168243,347.753113   C446.029663,355.008728 446.245239,362.379242 442.407227,366.372650   C439.489929,369.408051 436.362427,371.022278 432.242737,371.007385   C424.912109,370.980927 417.581329,371.000000 410.250610,371.000000   C306.454224,371.000000 202.657761,371.044983 98.861816,370.834778   C94.728874,370.826416 90.300148,368.955109 86.547668,366.946106   C81.998482,364.510590 81.446762,354.566406 84.951309,349.196533   C91.305031,339.461029 97.727394,329.769257 103.983070,319.971069   C111.671501,307.928802 119.091270,295.713867 126.854797,283.720886   C140.496124,262.647919 154.288345,241.672409 168.059418,220.683685   C178.431992,204.874695 188.915527,189.138367 199.255295,173.308060   C202.968353,167.623322 206.275635,161.672485 210.020462,156.009979   C212.051498,152.938858 214.613312,150.218765 217.001740,146.978363  z"
        fill="#E75A70"
      />
    </svg>
  )
}

export function Navbar() {
  return (
    
    <aside className="-ml-[12px] mb-12 tracking-tight">
      <div>
        <Head> 
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        </Head>
      </div>
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div id="nav-row-1" className="flex flex-row items-center">
            <RedTriangleIcon/>
            <div className="flex flex-col items-start">
            <h1 className="mb-0 text-2xl font-bold tracking-normal">
              Michael Lemiale
            </h1>
            <h1 className="mb-0 text-lg tracking-tight">
              Data Engineer
            </h1>
            </div>
          </div>
          <div id="nav-row-2" className="flex flex-row">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="text-2xl font-black transition-all hover:text-red-400 flex align-middle relative mt-6 px-3 mr-2"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
