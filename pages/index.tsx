import ChatMessage from '../components/chat/message/ChatMessage'
import { mockChatMessageProps } from '../components/chat/message/ChatMessage.mocks'
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
    return (
        <section className="">
            <h1 className="">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <ChatMessage {...mockChatMessageProps.recieved} />
        </section>
    )
}

export default Home

Home.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <SidebarLayout />
            {page}
        </PrimaryLayout>
    )
}
