import React from "react"
import { Target, TrendingUp, Users, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export function BalancedScorecard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Balanced Scorecard</h1>
        <p className="text-muted-foreground mt-1">Track strategic performance metrics across levels.</p>
      </div>

      <Tabs defaultValue="country" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="individual">Individual</TabsTrigger>
          <TabsTrigger value="department">Department</TabsTrigger>
          <TabsTrigger value="country">Country</TabsTrigger>
        </TabsList>
        
        <TabsContent value="country" className="space-y-6 mt-6 focus-visible:outline-none focus-visible:ring-0">
          <div className="grid gap-4 md:grid-cols-4">
            <MetricCard title="Regional Revenue" value="$4.2M" target="$4.5M" progress={93} icon={<Globe className="w-5 h-5 text-blue-500" />} />
            <MetricCard title="Operational Cost" value="$1.1M" target="$1.2M" progress={91} inverted icon={<TrendingUp className="w-5 h-5 text-emerald-500" />} />
            <MetricCard title="Employee Retention" value="94%" target="90%" progress={100} icon={<Users className="w-5 h-5 text-indigo-500" />} />
            <MetricCard title="Customer Sat." value="4.8/5" target="4.5/5" progress={100} icon={<Target className="w-5 h-5 text-amber-500" />} />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Country Level KPIs</CardTitle>
              <CardDescription>Strategic objectives progress across the region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <ProgressRow label="Financial Perspective (Revenue Growth)" value={85} color="bg-blue-500" />
                <ProgressRow label="Customer Perspective (Market Share expansion)" value={72} color="bg-emerald-500" />
                <ProgressRow label="Internal Process (Operational Efficiency)" value={90} color="bg-amber-500" />
                <ProgressRow label="Learning & Growth (Training completion)" value={65} color="bg-indigo-500" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="department" className="space-y-6 mt-6 focus-visible:outline-none focus-visible:ring-0">
          <Card>
            <CardHeader>
              <CardTitle>Departmental Performance</CardTitle>
              <CardDescription>Metrics segmented by functional departments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <ProgressRow label="Human Resources (Onboarding speed)" value={88} color="bg-indigo-500" />
                <ProgressRow label="IT (System Uptime)" value={99} color="bg-blue-500" />
                <ProgressRow label="Finance (Budget Variance)" value={92} color="bg-emerald-500" />
                <ProgressRow label="Operations (Delivery Time)" value={78} color="bg-amber-500" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="individual" className="space-y-6 mt-6 focus-visible:outline-none focus-visible:ring-0">
          <Card>
            <CardHeader>
              <CardTitle>Individual Performance Overview</CardTitle>
              <CardDescription>Aggregated metrics across all staff</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <ProgressRow label="Goal Achievement Rate" value={82} color="bg-primary" />
                <ProgressRow label="Core Competencies" value={89} color="bg-primary/80" />
                <ProgressRow label="Values & Behaviors" value={95} color="bg-primary/60" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MetricCard({ title, value, target, progress, icon, inverted = false }: any) {
  const isGood = inverted ? progress <= 100 : progress >= 100;
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-slate-500">{title}</span>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <h4 className="text-3xl font-bold text-slate-900">{value}</h4>
          <span className="text-sm text-slate-500">of {target}</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className={`h-full ${isGood ? 'bg-emerald-500' : 'bg-primary'}`} 
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

function ProgressRow({ label, value, color }: any) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm text-slate-700">{label}</span>
        <span className="font-bold text-sm text-slate-900">{value}%</span>
      </div>
      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000`} 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  )
}
