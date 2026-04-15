import React from "react"
import { Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog"
import { useAppData } from "../context/AppDataContext"

export function TrainingCalendar() {
  const { trainings, addTraining } = useAppData()
  const [isAddingMode, setIsAddingMode] = React.useState(false)
  const [newTraining, setNewTraining] = React.useState({ title: '', date: '', type: 'Technical', participants: 0, status: 'Upcoming' })

  const handleSave = () => {
    if (newTraining.title && newTraining.date) {
      addTraining({ ...newTraining })
      setIsAddingMode(false)
      setNewTraining({ title: '', date: '', type: 'Technical', participants: 0, status: 'Upcoming' })
    }
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Training Calendar</h1>
          <p className="text-muted-foreground mt-1">Manage annual training plans and schedules.</p>
        </div>
        <Button onClick={() => setIsAddingMode(true)}>Add New Training</Button>
      </div>

      <Dialog open={isAddingMode} onOpenChange={setIsAddingMode}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Training Session</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Session Title</label>
              <input type="text" className="border rounded-md px-3 py-2 text-sm" value={newTraining.title} onChange={e => setNewTraining({...newTraining, title: e.target.value})} placeholder="e.g. Leadership Workshop" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Date</label>
                <input type="date" className="border rounded-md px-3 py-2 text-sm" value={newTraining.date} onChange={e => setNewTraining({...newTraining, date: e.target.value})} />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Type</label>
                <select className="border rounded-md px-3 py-2 text-sm bg-white" value={newTraining.type} onChange={e => setNewTraining({...newTraining, type: e.target.value})}>
                  <option>Technical</option>
                  <option>Soft Skills</option>
                  <option>Orientation</option>
                  <option>Mandatory</option>
                </select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddingMode(false)}>Cancel</Button>
            <Button onClick={handleSave}>Schedule Session</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Calendar Side */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
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
                  <div className="text-slate-300 p-1">29</div><div className="text-slate-300 p-1">30</div>
                  <div className="text-slate-300 p-1">31</div>
                  {Array.from({ length: 30 }).map((_, i) => {
                    const day = i + 1
                    const isToday = day === 9;
                    const hasTraining = day === 12 || day === 25;
                    
                    return (
                      <div 
                        key={i} 
                        className={`p-1 rounded-sm flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100
                          ${isToday ? 'bg-primary text-primary-foreground hover:bg-primary/90 font-medium' : ''}
                        `}
                      >
                        {day}
                        {hasTraining && (
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

        {/* Training List Side */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Scheduled training sessions for the team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainings.map((session) => (
                  <div key={session.id} className="flex flex-col sm:flex-row gap-4 border p-4 rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex-shrink-0 bg-slate-50 border rounded-lg p-3 text-center min-w-[80px]">
                      <span className="block text-xs font-semibold text-slate-500 uppercase">
                        {new Date(session.date).toLocaleString('default', { month: 'short' })}
                      </span>
                      <span className="block text-2xl font-bold text-primary">
                        {new Date(session.date).getDate()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-900">{session.title}</h3>
                        <Badge variant={session.status === "Completed" ? "secondary" : "default"}>
                          {session.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{session.participants} Participants</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>HQ Conference Room</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>09:00 AM - 04:00 PM</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Badge variant="outline" className="text-xs">{session.type}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
