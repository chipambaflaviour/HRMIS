import React from "react"
import { Bell, Info, AlertCircle, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { notifications } from "../data/mockData"

export function Notifications() {
  const getIcon = (type: string, priority: string) => {
    if (priority === "High") return <AlertCircle className="w-5 h-5 text-destructive" />
    if (type === "Announcement") return <Info className="w-5 h-5 text-blue-500" />
    if (type === "System") return <CheckCircle className="w-5 h-5 text-green-500" />
    return <Bell className="w-5 h-5 text-amber-500" />
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Notifications</h1>
          <p className="text-muted-foreground mt-1">Manage your alerts, reminders, and announcements.</p>
        </div>
        <Button variant="outline">Mark all as read</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest system notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`flex gap-4 p-4 rounded-xl border transition-colors ${notif.priority === 'High' ? 'bg-red-50/50 border-red-100' : 'bg-white hover:bg-slate-50'}`}
              >
                <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notif.priority === 'High' ? 'bg-red-100' : 'bg-slate-100'}`}>
                  {getIcon(notif.type, notif.priority)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`font-semibold ${notif.priority === 'High' ? 'text-red-900' : 'text-slate-900'}`}>
                        {notif.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {notif.time}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge variant={notif.priority === 'High' ? 'destructive' : notif.priority === 'Normal' ? 'secondary' : 'outline'}>
                        {notif.type}
                      </Badge>
                      {notif.priority === 'High' && <span className="text-[10px] font-bold text-destructive uppercase tracking-wider">Urgent</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">System Announcement</h3>
              <p className="text-sm text-slate-600 mt-1">The system will undergo scheduled maintenance on Sunday, April 12th from 2:00 AM to 4:00 AM UTC. Please save your work.</p>
            </div>
          </div>
          <Button>View Details</Button>
        </CardContent>
      </Card>
    </div>
  )
}
