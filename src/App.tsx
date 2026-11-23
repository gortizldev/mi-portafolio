import styles from './App.module.css'

function App() {
  return (
    <main id="main" className={styles.page}>
      <p className={styles.eyebrow}>Etapa 1 · tokens y estilos base</p>
      <h1 className={styles.title}>gortizldev</h1>
      <p className={styles.lead}>
        Portafolio backend · en construcción
      </p>
      <ul className={styles.swatches} role="list">
        <li className={styles.swatchAccent}>accent</li>
        <li className={styles.swatchAccent2}>accent-2</li>
        <li className={styles.swatchPanel}>panel</li>
        <li className={styles.swatchRule}>rule</li>
      </ul>
    </main>
  )
}

export default App
