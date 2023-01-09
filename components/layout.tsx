
// NOTICE - TS 声明 React 函数组件 又搞了好久...
// NOTICE - 关键它这里还解构了函数参数...如何给函数声明类型需要再梳理梳理...

import React from 'react'
import styles from './layout.module.css'

interface Props {
    children: JSX.Element[] // NOTICE - children是一个数组...
}
 const Layout: React.FC<Props> = ({ children })=> {
    return <div className={styles.container}>{children}</div>
}

export default Layout