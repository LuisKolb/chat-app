import { IChatMessage } from './ChatMessage'

const sent: IChatMessage = {
    from: 'Luis 1',
    to: 'Empfänger 1',
    messageText: 'hello!',
    timestamp: '13:37',
}

const recieved: IChatMessage = {
    to: 'Luis 1',
    from: 'Empfänger 1',
    messageText: 'hello back to you!',
    timestamp: '16:20',
}

export const mockChatMessageProps = {
    sent,
    recieved,
}
