import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import { Divider } from '@mantine/core'
import { Todos } from '@/components/Todos'
import TodoListFooter from '@/components/TodoListFooter'
import { useEffect, useState } from 'react'
import TodoModal from '@/components/TodoModal'

export const TodoLists = observer(() => {
  const [opened, setOpened] = useState(false)
  const { todoStore } = useStores()
  const onClickCreateButton = () => {
    setOpened(true)
  }

  useEffect(() => {
    todoStore.fetchTodoLists({ limit: 10 })
  }, [todoStore])

  return (
    <div className='TodoList'>
      {todoStore.lists.map((list) => (
        <div key={list.id}>
          <Divider label={list.entity.title} labelPosition={'center'} my={'xl'} />
          <Todos todos={list.list} />
          <TodoListFooter onClickButton={onClickCreateButton} />
          <TodoModal opened={opened} onClose={() => setOpened(false)} todoList={list} />
        </div>
      ))}
    </div>
  )
})
