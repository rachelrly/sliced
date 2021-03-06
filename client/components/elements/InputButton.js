import styles from '../../styles/modules/ButtonToInput.module.css'

export function InputButton({ onClick, text }) {
  return (
    <button onClick={onClick} className={styles.input_button}>
      <p className="label-input">{text}</p>
    </button>
  )
}
