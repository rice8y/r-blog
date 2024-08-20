interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Julia 忘備録',
    description: 'Julia の忘備録.',
    imgSrc: '/static/images/julia-m.png',
    href: 'https://rice8y.github.io/Eypage/',
  },
  {
    title: 'SQLite3 for PHP',
    description: 'PHP による SQLite3 に関する忘備録',
    imgSrc: '/static/images/sqlite-m',
    href: 'https://rice8y.github.io/sqlite3/',
  },
]

export default projectsData
