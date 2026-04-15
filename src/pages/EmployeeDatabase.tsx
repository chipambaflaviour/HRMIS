import React, { useState } from "react"
import { Search, Filter, UserPlus, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { useAppData } from "../context/AppDataContext"

export function EmployeeDatabase() {
  const { employees, addEmployee, deleteEmployee } = useAppData()
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddingMode, setIsAddingMode] = useState(false)
  const [newEmp, setNewEmp] = useState({ name: '', position: '', department: '', email: '', status: 'Active' })

  const handleAddEmployee = () => {
    if (newEmp.name && newEmp.position) {
      addEmployee({ ...newEmp })
      setIsAddingMode(false)
      setNewEmp({ name: '', position: '', department: '', email: '', status: 'Active' })
    }
  }

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Employee Database</h1>
          <p className="text-muted-foreground mt-1">Centralized directory of all personnel.</p>
        </div>
        <Button className="gap-2" onClick={() => setIsAddingMode(true)}>
          <UserPlus className="w-4 h-4" /> Add Employee
        </Button>
      </div>

      <Dialog open={isAddingMode} onOpenChange={setIsAddingMode}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Full Name</label>
              <input type="text" className="border rounded-md px-3 py-2 text-sm" value={newEmp.name} onChange={e => setNewEmp({...newEmp, name: e.target.value})} placeholder="e.g. John Doe" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Position</label>
              <input type="text" className="border rounded-md px-3 py-2 text-sm" value={newEmp.position} onChange={e => setNewEmp({...newEmp, position: e.target.value})} placeholder="e.g. Software Engineer" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Department</label>
                <input type="text" className="border rounded-md px-3 py-2 text-sm" value={newEmp.department} onChange={e => setNewEmp({...newEmp, department: e.target.value})} placeholder="e.g. IT" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="border rounded-md px-3 py-2 text-sm" value={newEmp.email} onChange={e => setNewEmp({...newEmp, email: e.target.value})} placeholder="john@example.com" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddingMode(false)}>Cancel</Button>
            <Button onClick={handleAddEmployee}>Save Employee</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader className="p-4 sm:p-6 pb-0 sm:pb-0">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search employees..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" /> Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 sm:p-6 mt-4">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead>Employee Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead className="hidden md:table-cell">Department</TableHead>
                <TableHead className="hidden lg:table-cell">Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((emp) => (
                <TableRow key={emp.id} className="hover:bg-slate-50/50 cursor-pointer">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-semibold">
                        {emp.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span>{emp.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{emp.position}</TableCell>
                  <TableCell className="hidden md:table-cell text-slate-500">{emp.department}</TableCell>
                  <TableCell className="hidden lg:table-cell text-slate-500">{emp.email}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        emp.status === "Active" ? "success" : 
                        emp.status === "Terminated" ? "destructive" : "warning"
                      }
                    >
                      {emp.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <button 
                      onClick={(e) => { e.stopPropagation(); deleteEmployee(emp.id); }}
                      className="text-red-400 hover:text-red-600 p-1 text-xs border border-transparent hover:border-red-200 rounded transition-colors"
                      title="Delete employee"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredEmployees.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No employees found matching your search.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
