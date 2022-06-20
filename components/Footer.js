import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />. Not even remotely related to <a href="https://www.nosuchthingasafish.com">the podcast.</a>
      </footer>
    </>
  )
}
