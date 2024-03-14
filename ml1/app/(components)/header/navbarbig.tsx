import Link from 'next/link'
import styles from './header.module.css'

export default function Navbarbig(props: { links: any[] }) {
  return(
    <nav className={styles.navbar}>
      {props.links.map((el) => {
        return(
          <Link href={el.link} key={el.key} className={styles.link}>
            {el.name}
          </Link>
        )
      })}
    </nav>
  )
}