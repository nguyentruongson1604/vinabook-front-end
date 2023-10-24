import { observer } from 'mobx-react';
import styles from './style.module.css';
const AuthorWrap = observer(({authorName}: {authorName: string}) => {
  return (
      <div className={styles.authorWrap}>
          <span className={styles.author}>{authorName}</span>
      </div>
  )
})

export default AuthorWrap;