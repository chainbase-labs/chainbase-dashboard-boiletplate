'use client';

import React, { createContext, useCallback, useMemo, useRef } from 'react';

export interface TaskValue {
  id: string;
  task: (params: any) => Promise<any>;
  status: 'idle' | 'pending' | 'success' | 'error';
  data: any
}

interface TaskContextValue {
  tasks: TaskValue[];
  addTask: (task: TaskValue) => void;
  removeTask: (id: string) => void;
  callTask: (id: string, params?: any) => void;
}


// Create a new context
export const QueryTaskContext = createContext<TaskContextValue | undefined>(undefined);

interface QueryTaskProviderProps {
  children: React.ReactNode;
}
// Create a provider component
function QueryTaskProvider({ children }: QueryTaskProviderProps) {
  // Define the state or values you want to share
  const [tasks, setTasks] = React.useState<TaskValue[]>([]);
  const pendingTasksRef = useRef<Record<string, boolean>>({})
  const addTask = useCallback((task: TaskValue) => {
    console.log('addTask', task)
    setTasks(prev => {
      console.log(prev.filter(t => t.id === task.id))
      if (prev.filter(t => t.id === task.id).length > 0) {
        return prev
      } else {
        return [...prev, task]
      }
    })
  }, [])

  const removeTask = useCallback((id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }, [])

  const callTask = useCallback((id: string, params?: any) => {
    console.log('callTask', id, params)
    const task = tasks.find(t => t.id === id)
    if (task && pendingTasksRef.current[id] !== true) {
      pendingTasksRef.current[id] = true
      setTasks(prev => prev.map(t => {
        if (t.id === id) {
          return {
            ...t,
            status: 'pending'
          }
        } else {
          return t
        }
      }))
      task.task(params).then((data) => {
        console.log('response', id, data)
        setTasks(prev => prev.map(t => {
          if (t.id === id) {
            return {
              ...t,
              data,
              status: 'success'
            }
          } else {
            return t
          }
        }))
      }).catch(() => {
        setTasks(prev => prev.map(t => {
          if (t.id === id) {
            return {
              ...t,
              status: 'error'
            }
          } else {
            return t
          }
        }))
      }).finally(() => {
        pendingTasksRef.current[id] = false
      })
    }
  }, [tasks])

  const contextValue = useMemo(() => {
    return {
      tasks,
      addTask,
      removeTask,
      callTask
    }
  }, [addTask, callTask, removeTask, tasks])
  console.log('init query')


  return (
    <QueryTaskContext.Provider value={contextValue}>
      {children}
    </QueryTaskContext.Provider>
  );
}

export default QueryTaskProvider

