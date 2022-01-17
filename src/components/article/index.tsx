// Articleコンポーネント
import React from 'react'

import styles from './index.module.css'

const Paragraph: React.FC<{ p: string }> = ({ p }) => {
  return <div className={styles.paragraph}>{p}</div>
}

// import { formatArticle } from '@/utils/article'

// import { Paragraph } from './paragraph'

type Props = {
  content: string
}

export const Article: React.FC<Props> = ({ content }) => {
  return (
    <>
      {content.split('\n\n\n\n\n\n').map((p, i) => (
        <Paragraph p={p} key={i} />
      ))}
    </>
  )
}

// export const Article: React.FC<Props> = ({ content }) => {
//   return (
//     <>
//       {formatArticle(content).map((p, i) => (
//         <Paragraph p={p} key={i} />
//       ))}
//     </>
//   )
// }
