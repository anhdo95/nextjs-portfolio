import Link from "next/link"
import Layout from '@/components/Layout'

export default function About() {
  return (
    <Layout title="About">
      <img src="/static/nextjs-logo.png" alt="NextJS logo" height="200" />
      <p>
        <Link href="/">
          <a>Go to home page</a>
        </Link>
      </p>
      <p>Lorem ipsum ...</p>
    </Layout>
  )
}
