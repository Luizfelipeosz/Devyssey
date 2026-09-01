type Props = {
  text: string
}

function TaskItem({ text }: Props) {
  return <li>{text}</li>
}

export default TaskItem