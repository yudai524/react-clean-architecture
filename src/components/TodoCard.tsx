import { ActionIcon, Card, Group, Text } from '@mantine/core'
import { Trash } from 'tabler-icons-react'
import { ITodoVM } from '@core/types'
import { observer } from 'mobx-react'

type Props = {
  todo: ITodoVM
}

export const TodoCard = observer(({ todo }: Props) => {
  return (
    <Card withBorder key={todo.id} mt={'sm'}>
      <Group position={'apart'}>
        <Text weight={'bold'}>{todo.entity.title}</Text>
        <ActionIcon
          onClick={() => {
            todo.delete()
          }}
          color={'red'}
          variant={'transparent'}
        >
          <Trash />
        </ActionIcon>
      </Group>
      <Text color={'dimmed'} size={'md'} mt={'sm'}>
        {todo.entity.summary ? todo.entity.summary : 'No summary was provided for this task'}
      </Text>
    </Card>
  )
})
