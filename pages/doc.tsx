import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const Documentation: NextPage = () => {
    return (
    <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Senior FrontEnd Develop Engineer</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
          </p>
        </section>
    </Layout>
    )
}

export default Documentation