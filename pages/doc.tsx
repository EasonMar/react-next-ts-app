import type { NextPage } from 'next'
import Link from 'next/link'

const Documentation: NextPage = () => {
    return (
        <>
            <h1>Documentation</h1>
            <Link href="/">
                <a>Go back</a>
            </Link>
        </>
    )
}

export default Documentation