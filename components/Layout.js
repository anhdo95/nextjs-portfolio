import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>Next Portfolio</title>
      </Head>

      <header className="header">
        <nav className="navbar">
          <Link href="/">
            <a className="navbar__item">Home</a>
          </Link>
          <Link href="/about">
            <a className="navbar__item">About</a>
          </Link>
        </nav>
      </header>

      <main className="content">
        <h2>{props.title}</h2>
        {props.children}
      </main>

      <footer className="footer">Copyright &copy;{new Date().getFullYear()}</footer>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
        }

        .header {
          width: 100%;
          background-color: #e2e9dd;
        }

        .navbar {
          display: flex;
        }

        .navbar__item {
          display: block;
          padding: 0.75rem 1.25rem;
          text-decoration: none;
          transition: all 1s ease;
        }

        .navbar__item:hover {
          text-decoration: underline;
        }

        .content {
          text-align: center;
        }

        .footer {
          margin-top: auto;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}
