import Link from "next/link"
import axios from 'axios'
import Layout from '@/components/Layout'

export default function About(props) {
  return (
    <Layout title={props.user.name}>
      <img src={props.user.avatar_url} alt={props.user.name} height="200" />
      <address>Location: {props.user.location}</address>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await axios.get('https://api.github.com/users/anhdo95')

  return {
    props: {
      user: res.data
    }
  }
}
