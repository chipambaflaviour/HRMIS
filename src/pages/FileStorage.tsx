import React, { useState } from "react"
import { Component, Folder, File as FileIcon, UploadCloud, MoreVertical, FileText, Image as ImageIcon, FileSpreadsheet } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Button } from "../components/ui/button"

const mockFolders = [
  { id: 'f1', name: 'Employee Files', count: 124, size: '2.4 GB', color: 'bg-blue-100 text-blue-600' },
  { id: 'f2', name: 'HR Files', count: 45, size: '450 MB', color: 'bg-green-100 text-green-600' },
  { id: 'f3', name: 'EOR Files', count: 32, size: '1.2 GB', color: 'bg-purple-100 text-purple-600' },
  { id: 'f4', name: 'ISO Templates', count: 18, size: '85 MB', color: 'bg-amber-100 text-amber-600' },
]

const recentFiles = [
  { id: 'd1', name: 'Q1_Performance_Reviews_Draft.pdf', type: 'pdf', size: '2.4 MB', date: '2026-04-09' },
  { id: 'd2', name: 'Employee_Handbook_2026.docx', type: 'doc', size: '1.8 MB', date: '2026-04-08' },
  { id: 'd3', name: 'New_Hire_Onboarding_Checklist.xlsx', type: 'xls', size: '450 KB', date: '2026-04-07' },
  { id: 'd4', name: 'Org_Chart_Updated.png', type: 'img', size: '3.2 MB', date: '2026-04-05' },
  { id: 'd5', name: 'Leave_Policy_v2.pdf', type: 'pdf', size: '1.1 MB', date: '2026-04-01' },
]

export function FileStorage() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null)

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />
      case 'xls': return <FileSpreadsheet className="w-5 h-5 text-green-500" />
      case 'img': return <ImageIcon className="w-5 h-5 text-blue-500" />
      default: return <FileIcon className="w-5 h-5 text-blue-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">File Storage</h1>
          <p className="text-muted-foreground mt-1">Centralized directory for HR records and ISO templates.</p>
        </div>
        <Button className="gap-2">
          <UploadCloud className="w-4 h-4" /> Upload File
        </Button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-slate-800">Folders</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {mockFolders.map(folder => (
            <Card 
              key={folder.id} 
              className={`cursor-pointer hover:border-primary transition-colors ${activeFolder === folder.id ? 'ring-2 ring-primary border-primary' : ''}`}
              onClick={() => setActiveFolder(folder.id === activeFolder ? null : folder.id)}
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${folder.color}`}>
                  <Folder className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{folder.name}</h3>
                  <p className="text-xs text-slate-500">{folder.count} files • {folder.size}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{activeFolder ? mockFolders.find(f => f.id === activeFolder)?.name : 'Recent Files'}</CardTitle>
          <CardDescription>View, download, and manage your documents.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-slate-50 text-xs font-semibold text-slate-500 uppercase rounded-t-lg border-b">
              <div className="col-span-6">Name</div>
              <div className="col-span-2">Date Modified</div>
              <div className="col-span-2">Size</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
            
            {recentFiles.map(file => (
              <div key={file.id} className="grid grid-cols-12 gap-4 px-4 py-3 items-center border-b last:border-0 hover:bg-slate-50 transition-colors">
                <div className="col-span-6 flex items-center gap-3">
                  {getFileIcon(file.type)}
                  <span className="font-medium text-sm text-slate-700 truncate">{file.name}</span>
                </div>
                <div className="col-span-2 text-sm text-slate-500">
                  {file.date}
                </div>
                <div className="col-span-2 text-sm text-slate-500">
                  {file.size}
                </div>
                <div className="col-span-2 flex justify-end">
                  <button className="p-1 hover:bg-slate-200 rounded text-slate-500">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
