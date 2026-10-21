import nextra from 'nextra'

const withNextra = nextra({
  search: { codeblocks: true }
})

export default withNextra({
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true
})
