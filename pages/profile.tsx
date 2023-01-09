import type { NextPage } from 'next'
import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import useSWR from 'swr' // SWR is a React Hooks library for data fetching
import fetch from 'unfetch' // Tiny 500b fetch "barely-polyfill"
const fetcher = (url: string) => fetch(url).then(r => r.json())

type User = {
    name: string
}

const Profile: NextPage = () => {
    const { data, error } = useSWR<User>('/api/hello', fetcher)

    // // 保镖模式（the Bouncer Pattern）， 后面处理正确业务逻辑
    // if (error) return <div className={styles.main}>failed to load</div>

    // // 没有错误，且没有数据 只有可能是正常业务流程中的等待取数据
    // if (!data) return <div className={styles.main}>loading...</div>

    // // 没有错误有数据，进行渲染
    // return <div className={styles.main}>hello {data.name}!</div>


    // === 重构处理逻辑 === 
    const result = error ? `failed to load` : data ? `hello ${data.name}!` : `loading...`;
    return <Layout>
        <h1>{result}</h1>
        <Link href="/">
            <a className={styles.title}>Go back</a>
        </Link>
    </Layout>
}

export default Profile