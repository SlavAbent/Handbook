import { importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../mdx-components'

export async function generateMetadata() {
  const { metadata } = await importPage()
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function HomePage() {
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage()
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent params={{ mdxPath: [] }} />
    </Wrapper>
  )
}
