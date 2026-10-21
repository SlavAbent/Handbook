import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

const generateAllStaticParams = generateStaticParamsFor('mdxPath')

export const dynamicParams = false

export async function generateStaticParams() {
  const params = await generateAllStaticParams()
  return params.filter(({ mdxPath }) => Array.isArray(mdxPath) && mdxPath.some(Boolean))
}

type PageProps = { params: Promise<{ mdxPath: string[] }> }

export async function generateMetadata(props: PageProps) {
  const { mdxPath } = await props.params
  const { metadata } = await importPage(mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props: PageProps) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath)
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
