import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Users } from "lucide-react"

export function Organogram() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Organogram</h1>
        <p className="text-muted-foreground mt-1">Visual organizational structure and reporting lines.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regional Structure</CardTitle>
          <CardDescription>Hierarchical view of the organization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center overflow-x-auto pb-8 pt-4">
            {/* Level 1: Regional Manager */}
            <div className="flex flex-col items-center">
              <Node title="Regional Manager" name="Alice Johnson" role="Management" />
              <div className="w-px h-8 bg-slate-300"></div>
              
              {/* Horizontal Line Connector */}
              <div className="w-full max-w-4xl relative flex justify-center">
                <div className="absolute top-0 w-3/4 border-t-2 border-slate-300"></div>
              </div>

              {/* Level 2: Country Managers */}
              <div className="flex w-full max-w-4xl justify-around pt-8 relative">
                {/* Branch 1 */}
                <div className="flex flex-col items-center">
                  <div className="absolute top-0 w-px h-8 bg-slate-300"></div>
                  <Node title="Country Manager" name="Robert Smith" role="Country Head" />
                  <div className="w-px h-8 bg-slate-300"></div>
                  
                  <div className="relative flex justify-center w-full min-w-[300px]">
                     <div className="absolute top-0 w-full border-t-2 border-slate-300"></div>
                      
                      <div className="flex w-full justify-around pt-8">
                        {/* Dept 1 */}
                        <div className="flex flex-col items-center relative">
                          <div className="absolute top-0 w-px h-8 bg-slate-300"></div>
                          <Node title="HR Director" name="Emily Chen" role="Human Resources" />
                          <div className="w-px h-8 bg-slate-300"></div>
                          <div className="flex flex-col gap-4">
                            <Node title="HR Specialist" name="Jessica Davis" size="small" />
                            <Node title="Recruiter" name="Sophia Anderson" size="small" />
                          </div>
                        </div>

                        {/* Dept 2 */}
                        <div className="flex flex-col items-center relative">
                          <div className="absolute top-0 w-px h-8 bg-slate-300"></div>
                          <Node title="IT Manager" name="Sarah Williams" role="IT" />
                          <div className="w-px h-8 bg-slate-300"></div>
                          <div className="flex flex-col gap-4">
                            <Node title="Software Engineer" name="Daniel Miller" size="small" />
                            <Node title="Systems Admin" name="Matthew Thomas" size="small" />
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="flex flex-col items-center relative">
                  <div className="absolute top-0 w-px h-8 bg-slate-300"></div>
                  <Node title="Country Manager" name="Jane Doe" role="Country Head" />
                  <div className="w-px h-8 bg-slate-300"></div>
                  
                  <div className="relative flex justify-center w-full min-w-[300px]">
                     <div className="absolute top-0 w-full border-t-2 border-slate-300"></div>
                      
                      <div className="flex w-full justify-around pt-8">
                        {/* Dept 3 */}
                        <div className="flex flex-col items-center relative">
                          <div className="absolute top-0 w-px h-8 bg-slate-300"></div>
                          <Node title="Finance Head" name="Michael Chang" role="Finance" />
                          <div className="w-px h-8 bg-slate-300"></div>
                          <div className="flex flex-col gap-4">
                            <Node title="Financial Analyst" name="Laura Wilson" size="small" />
                            <Node title="Accountant" name="Olivia Martinez" size="small" />
                          </div>
                        </div>

                        {/* Dept 4 */}
                        <div className="flex flex-col items-center relative">
                          <div className="absolute top-0 w-px h-8 bg-slate-300"></div>
                          <Node title="Operations Mgr" name="David Brown" role="Operations" />
                          <div className="w-px h-8 bg-slate-300"></div>
                          <div className="flex flex-col gap-4">
                            <Node title="Logistics Lead" name="Kevin Jackson" size="small" />
                            <Node title="Facility Manager" name="William Thompson" size="small" />
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Node({ title, name, role, size = "default" }: { title: string, name: string, role?: string, size?: "default" | "small" }) {
  if (size === "small") {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 w-40 text-center shadow-sm relative z-10 hover:border-primary transition-colors cursor-pointer">
        <p className="text-xs font-semibold text-slate-800">{name}</p>
        <p className="text-[10px] text-slate-500">{title}</p>
      </div>
    )
  }

  return (
    <div className="bg-white border-2 border-slate-200 rounded-xl p-4 w-52 text-center shadow-sm relative z-10 hover:border-primary transition-colors cursor-pointer group">
      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
        <Users className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-semibold text-slate-900 leading-tight">{title}</h3>
      <p className="text-sm font-medium text-slate-700 mt-1">{name}</p>
      {role && <span className="inline-block px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600 mt-2">{role}</span>}
    </div>
  )
}
