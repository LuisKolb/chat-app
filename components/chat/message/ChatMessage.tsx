import styles from './ChatMessage.module.css'

export interface IChatMessage {
    messageText: string
    from: string
    to: string
    timestamp: string
}

const ChatMessage: React.FC<IChatMessage> = ({
    from,
    messageText,
    timestamp,
    to,
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sender_name}>{from}</div>
            <div className={styles.message}>{messageText}</div>
            <div className={styles.timestamp}>{timestamp}</div>
        </div>
    )
}

export default ChatMessage
