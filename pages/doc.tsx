import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Documentation: NextPage = () => {
    return (
        <Layout>
            <h1>Documentation</h1>
            <Link href="/">
                <a className={styles.title}>Go back</a>
            </Link>
        </Layout>
    )
}

export default Documentation