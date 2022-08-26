import { ComponentMeta, ComponentStory } from '@storybook/react'
import ChatMessage, { IChatMessage } from './ChatMessage'
import { mockChatMessageProps } from './ChatMessage.mocks'

export default {
    title: 'chat/ChatMessage',
    component: ChatMessage,
    argTypes: {},
} as ComponentMeta<typeof ChatMessage>

const Template: ComponentStory<typeof ChatMessage> = (args) => (
    <ChatMessage {...args} />
)

export const SentMessage = Template.bind({})

SentMessage.args = {
    ...mockChatMessageProps.sent,
} as IChatMessage

export const RecievedMessage = Template.bind({})

RecievedMessage.args = {
    ...mockChatMessageProps.recieved,
} as IChatMessage
