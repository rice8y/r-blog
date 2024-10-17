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
    href: 'https://rice8y.github.io/julia-book/',
  },
  {
    title: 'Hello, World!',
    description: 'とにかくHello, World!する話.',
    imgSrc: '/static/images/hello-m.png',
    href: 'https://rice8y.github.io/hello/',
  },
  {
    title: 'ごみカレンダー bot',
    description: '道後・湯築地区のごみカレンダー bot.',
    imgSrc: '/static/images/trash.jpg',
    href: 'https://l.instagram.com/?u=https%3A%2F%2Fliff.line.me%2F1645278921-kWRPP32q%2F%3FaccountId%3D756viccf&e=AT2ZQcKBYVa1OchuUomVezPyvR1otSp2w85DUGAz4QTiv6NdQgKsMOVIXfC00jiHeBgjIrTHnCMTEEoHRiaxFxctMcmFpsnFHfUPO-A',
  },
]

export default projectsData
