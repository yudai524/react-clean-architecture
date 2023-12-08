import { observer } from 'mobx-react'
import { Text } from '@mantine/core'
import { TodoCard } from '@/components/TodoCard'
import { ITodoVM } from '@core/types'
import { FC } from 'react'

type Props = {
  todos: ITodoVM[]
}

export const Todos: FC<Props> = observer(({ todos }) => {
  if (todos.length === 0) {
    return (
      <Text size={'lg'} mt={'md'} color={'dimmed'}>
        You have no tasks
      </Text>
    )
  }

  return (
    <div className='Todos'>
      {todos.map((item) => (
        <TodoCard key={item.id} todo={item} />
      ))}
    </div>
  )
})
