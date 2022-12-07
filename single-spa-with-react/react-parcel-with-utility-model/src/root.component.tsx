import { useEffect, useState } from 'react'
import { listenEvent } from '@poc/utils'

export default function Root({ name }) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    listenEvent('@poc/react-form-with-utility-model/add/task', (event: CustomEvent) => {
      setTasks((prev) => [...prev, event.detail])
    })
  }, [])

  return (
    <>
      <h1>{name}</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
