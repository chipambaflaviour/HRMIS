import React, { useState } from "react"
import { Users, CalendarOff, GraduationCap, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog"
import { useAppData } from "../context/AppDataContext"

export function Dashboard() {
  const [showTasks, setShowTasks] = useState(true)

  const { employees, leaves, trainings, notifications, tasks, updateTaskStatus } = useAppData()

  const pendingLeaves = leaves.filter(l => l.status === "Pending").length
  const upcomingTrainings = trainings.filter(ts => ts.status === "Upcoming").length
  const priorityTasks = tasks.filter(t => t.status !== "Completed").slice(0, 3)

  const handleTaskToggle = (id: number, currentStatus: string) => {
    updateTaskStatus(id, currentStatus === "Completed" ? "Pending" : "Completed")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, Executive Admin! Here's what's happening today.</p>
        </div>
      </div>

      <Dialog open={showTasks} onOpenChange={setShowTasks}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Today's Tasks</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-slate-500">You have {priorityTasks.length} priority tasks that require your attention.</p>
            <div className="space-y-2">
              {priorityTasks.map(task => (
                <div key={task.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border hover:bg-slate-100 transition-colors cursor-pointer" onClick={() => handleTaskToggle(task.id, task.status)}>
                  <input 
                    type="checkbox" 
                    checked={task.status === "Completed"}
                    readOnly
                    className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer" 
                  />
                  <span className={`text-sm font-medium ${task.status === "Completed" ? "line-through text-slate-500" : "text-slate-900"}`}>
                    {task.title}
                  </span>
                  <Badge variant={task.status === "Completed" ? "success" : "secondary"} className="ml-auto">
                    {task.status}
                  </Badge>
                </div>
              ))}
              {priorityTasks.length === 0 && (
                <div className="text-center py-4 text-emerald-600 bg-emerald-50 rounded-lg border border-emerald-100">
                  You have completed all priority tasks for today!
                </div>
              )}
            </div>
            <button className="w-full bg-primary text-white py-2 rounded mt-2 text-sm font-medium hover:bg-primary/90 transition-colors" onClick={() => setShowTasks(false)}>Close Window</button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{employees.length}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Leave</CardTitle>
            <CalendarOff className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingLeaves}</div>
            <p className="text-xs text-muted-foreground">Requires your approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Trainings</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingTrainings}</div>
            <p className="text-xs text-muted-foreground">Next one in 3 days</p>
          </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/5 text-destructive-foreground">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-destructive">Performance Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">1</div>
            <p className="text-xs text-destructive/80">Reviews below threshold</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Activities</CardTitle>
            <CardDescription>Scheduled events for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trainings.slice(0, 3).map((ts) => (
                <div key={ts.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{ts.title}</p>
                    <p className="text-xs text-muted-foreground">{ts.date} • {ts.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Stay updated with latest activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.slice(0, 4).map((notif) => (
                <div key={notif.id} className="flex flex-col gap-1 border-b last:border-0 pb-3 last:pb-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{notif.title}</p>
                    <span className="text-xs text-muted-foreground">{notif.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={notif.priority === 'High' ? 'destructive' : 'secondary'} className="text-[10px] px-1 py-0 h-4">
                      {notif.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
