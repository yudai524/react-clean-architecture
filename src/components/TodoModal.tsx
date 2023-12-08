import { Button, Group, Modal, TextInput } from '@mantine/core'
import { useRef } from 'react'
import { ITodoListVM } from '@core/types'

type Props = {
  opened: boolean
  onClose: () => void
  todoList: ITodoListVM
}

export default function TodoModal({ opened, todoList, onClose }: Props) {
  const taskTitle = useRef<HTMLInputElement>()
  const taskSummary = useRef<HTMLInputElement>()

  return (
    <Modal opened={opened} size={'md'} title={'New Task'} withCloseButton={false} onClose={onClose} centered>
      <TextInput mt={'md'} ref={taskTitle} placeholder={'Task Title'} required label={'Title'} />
      <TextInput ref={taskSummary} mt={'md'} placeholder={'Task Summary'} label={'Summary'} />
      <Group mt={'md'} position={'apart'}>
        <Button onClick={onClose} variant={'subtle'}>
          Cancel
        </Button>
        <Button
          onClick={async () => {
            const output = await todoList.createDraftTodo()
            const { todoVM } = output.data
            await todoVM.create({
              title: taskTitle.current.value,
              summary: taskSummary.current.value,
            })
            onClose()
          }}
        >
          Create Task
        </Button>
      </Group>
    </Modal>
  )
}
