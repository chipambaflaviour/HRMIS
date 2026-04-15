import React from "react"
import { Upload, FileText, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { performanceRecords } from "../data/mockData"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"

export function PerformanceManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Performance Management</h1>
          <p className="text-muted-foreground mt-1">Manage performance contracts, scorecards, and JDs.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Uploads and Quick Actions */}
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Descriptions</CardTitle>
              <CardDescription>Upload new JDs for evaluation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-900">Upload JD</h3>
                <p className="text-xs text-slate-500 mt-1">Drag and drop or click to browse</p>
                <p className="text-[10px] text-slate-400 mt-2">Supports PDF, DOCX (Max 5MB)</p>
              </div>

              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold text-slate-700">Recently Uploaded</h4>
                <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded border text-sm">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span>JD_Software_Eng.pdf</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded border text-sm">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span>JD_HR_Manager.docx</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Performance Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>
                    <div>
                      <p className="text-sm font-medium">Signed Contracts</p>
                      <p className="text-xl font-bold">142</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center"><AlertTriangle className="w-4 h-4" /></div>
                    <div>
                      <p className="text-sm font-medium">Pending Signature</p>
                      <p className="text-xl font-bold">18</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Remind</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scorecard Table */}
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Employee Scorecards</CardTitle>
                  <CardDescription>Latest performance scores</CardDescription>
                </div>
                <Button variant="outline" size="sm">Export Report</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Last Review</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {performanceRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{record.score}%</span>
                          <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                            <div 
                              className={`h-full rounded-full ${
                                record.score >= 90 ? 'bg-emerald-500' : 
                                record.score >= 80 ? 'bg-primary' : 
                                record.score >= 70 ? 'bg-amber-500' : 'bg-destructive'
                              }`} 
                              style={{ width: `${record.score}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-500">{record.lastReview}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            record.status === "Excellent" ? "success" : 
                            record.status === "Good" ? "default" : 
                            record.status === "Average" ? "warning" : "destructive"
                          }
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
