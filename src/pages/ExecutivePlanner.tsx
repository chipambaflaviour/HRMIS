import React from "react"
import { Calendar as CalendarIcon, CheckCircle2, Clock,  MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog"
import { useAppData } from "../context/AppDataContext"

export function ExecutivePlanner() {
  const { tasks, addTask, updateTaskStatus } = useAppData()
  const [isAddingMode, setIsAddingMode] = React.useState(false)
  const [newTask, setNewTask] = React.useState({ title: '', due: '', status: 'Pending' })

  const handleSave = () => {
    if (newTask.title && newTask.due) {
      addTask({ ...newTask })
      setIsAddingMode(false)
      setNewTask({ title: '', due: '', status: 'Pending' })
    }
  }

  const handleTaskToggle = (id: number, currentStatus: string) => {
    updateTaskStatus(id, currentStatus === "Completed" ? "Pending" : "Completed")
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Executive Planner</h1>
          <p className="text-muted-foreground mt-1">Manage your daily tasks and schedule.</p>
        </div>
        <Button onClick={() => setIsAddingMode(true)}>+ New Task</Button>
      </div>

      <Dialog open={isAddingMode} onOpenChange={setIsAddingMode}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Task Description</label>
              <input type="text" className="border rounded-md px-3 py-2 text-sm" value={newTask.title} onChange={e => setNewTask({...newTask, title: e.target.value})} placeholder="e.g. Finalize Q3 Budget Report" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Due Date</label>
              <input type="date" className="border rounded-md px-3 py-2 text-sm" value={newTask.due} onChange={e => setNewTask({...newTask, due: e.target.value})} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddingMode(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save Task</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily To-Do List</CardTitle>
              <CardDescription>Tasks requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3 cursor-pointer" onClick={() => handleTaskToggle(task.id, task.status)}>
                      {task.status === "Completed" ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                      ) : (
                        <Clock className="w-5 h-5 text-amber-500 mt-0.5" />
                      )}
                      <div>
                        <p className={`font-medium ${task.status === "Completed" ? "line-through text-slate-500" : "text-slate-900"}`}>
                          {task.title}
                        </p>
                        <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                          <CalendarIcon className="w-3 h-3" /> Due {task.due}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={task.status === "Completed" ? "success" : task.status === "In Progress" ? "warning" : "secondary"}>
                        {task.status}
                      </Badge>
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Sample Tasks Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 border p-4 rounded-lg">
                  <h4 className="font-semibold text-sm">Submit monthly HR report</h4>
                  <p className="text-xs text-slate-500 mt-1">Due today by 5:00 PM</p>
                </div>
                <div className="bg-slate-50 border p-4 rounded-lg">
                  <h4 className="font-semibold text-sm">Approve leave request</h4>
                  <p className="text-xs text-slate-500 mt-1">3 pending requests</p>
                </div>
                <div className="bg-slate-50 border p-4 rounded-lg">
                  <h4 className="font-semibold text-sm">Update employee records</h4>
                  <p className="text-xs text-slate-500 mt-1">Finance Dept restructuring</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Mock Calendar Widget */}
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-sm">April 2026</span>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-slate-100 rounded">{'<'}</button>
                    <button className="p-1 hover:bg-slate-100 rounded">{'>'}</button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-slate-500">
                  <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {/* Empty cells for padding */}
                  <div className="text-slate-300 p-1">29</div><div className="text-slate-300 p-1">30</div>
                  <div className="text-slate-300 p-1">31</div>
                  
                  {Array.from({ length: 30 }).map((_, i) => {
                    const day = i + 1
                    const isToday = day === 9;
                    const hasTask = day === 10 || day === 15 || day === 25;
                    
                    return (
                      <div 
                        key={i} 
                        className={`p-1 rounded-sm flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100
                          ${isToday ? 'bg-primary text-primary-foreground hover:bg-primary/90 font-medium' : ''}
                        `}
                      >
                        {day}
                        {hasTask && (
                          <div className={`w-1 h-1 rounded-full mt-0.5 ${isToday ? 'bg-white' : 'bg-primary'}`} />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
