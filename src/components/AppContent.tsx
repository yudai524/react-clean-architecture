import { Container } from '@mantine/core'
import AppHeader from '@/components/AppHeader'
import { TodoLists } from '@/components/TodoLists'

export const AppContent = () => {
  return (
    <div className='App'>
      <Container size={550} my={40}>
        <AppHeader />
        <TodoLists />
      </Container>
    </div>
  )
}
