import Link from "next/link"
import Layout from '@/components/Layout'

export default function Error() {
  return (
    <Layout title="Oops!">
      <p>The requested page could not be found! Maybe try another one.</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </Layout>
  )
}
