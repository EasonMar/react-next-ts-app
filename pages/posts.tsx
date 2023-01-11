import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, IPostData } from '../lib/posts'

// NOTICE - 有一个 TS 问题 - 还好查看 NextPage 类型声明很快就解决了
interface IParam {
    allPostsData: IPostData[]
}
const Posts: NextPage<IParam> = ({ allPostsData }) => {
    return (
        <Layout>
            <Head>
                <title>POSTS</title>
            </Head>
            <section className={utilStyles.headingMd}>What a post?!</section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export default Posts


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }