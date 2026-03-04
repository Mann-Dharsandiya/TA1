import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Cpu, 
  Database, 
  Activity, 
  ShieldCheck, 
  GitBranch, 
  Workflow, 
  Zap,
  Server,
  Cloud,
  Terminal,
  Search,
  Settings,
  Bell,
  User,
  ChevronRight,
  Box,
  Code2,
  LineChart,
  Lock,
  Globe,
  Bot,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Info,
  Users,
  FileSpreadsheet,
  BrainCircuit,
  Network,
  ClipboardList,
  Clock,
  Flag,
  Calendar
} from 'lucide-react';
import { cn } from './lib/utils';
import { 
  ARCHITECTURE_LAYERS, 
  PROJECT_OVERVIEW, 
  TEAM_ROLES, 
  PIPELINE_STAGES,
  SPRINT_PLAN
} from './constants';

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg group",
      active 
        ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
    )}
  >
    <Icon size={18} className={cn(active ? "text-blue-400" : "text-slate-400 group-hover:text-slate-600")} />
    {label}
  </button>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">{title}</h2>
    <p className="text-slate-500 mt-1">{subtitle}</p>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <SectionHeader 
              title="Project Overview" 
              subtitle="Architectural blueprint for the DevOps-Based Task Management System."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="glass-card p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <ClipboardList size={120} />
                  </div>
                  <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                    <Layers className="text-blue-600" size={20} />
                    System Architecture
                  </h3>
                  <div className="flex flex-col gap-4">
                    {ARCHITECTURE_LAYERS.map((layer, idx) => (
                      <div key={layer.id} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                          <layer.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-slate-900">{layer.title}</h4>
                            <span className="text-[10px] font-mono text-slate-400">LAYER 0{idx + 1}</span>
                          </div>
                          <p className="text-sm text-slate-500 mt-1">{layer.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {layer.tech.map(t => (
                              <span key={t} className="tech-badge">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Info className="text-blue-600" size={20} />
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">Title</p>
                      <p className="text-sm font-medium text-slate-900">{PROJECT_OVERVIEW.title}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">Tech Stack</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {PROJECT_OVERVIEW.stack.map(s => <span key={s} className="tech-badge">{s}</span>)}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold">Duration</p>
                        <p className="text-sm font-medium text-slate-900">{PROJECT_OVERVIEW.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold">Team Size</p>
                        <p className="text-sm font-medium text-slate-900">{PROJECT_OVERVIEW.teamSize}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 bg-slate-900 text-white border-none">
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Zap className="text-amber-400" size={20} />
                    Key Objectives
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Full CI/CD Pipeline Integration',
                      'Containerized Microservices',
                      'Automated Testing & Monitoring',
                      'Scalable SQL Database Design'
                    ].map((goal) => (
                      <li key={goal} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'team':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <SectionHeader 
              title="Resource Pool" 
              subtitle="Team structure and role allocation for the 15-week project."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM_ROLES.map((role) => (
                <div key={role.id} className="glass-card p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-600">
                    <role.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{role.role}</h3>
                    <p className="text-lg font-medium text-blue-600">{role.name}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded">FTE: {role.fte}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'pipeline':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <SectionHeader 
              title="Pipeline Stages" 
              subtitle="Development lifecycle phases and primary role responsibilities."
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {PIPELINE_STAGES.map((stage, idx) => (
                <div key={stage.stage} className="glass-card p-6 flex flex-col items-center text-center relative">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <stage.icon size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">{stage.stage}</h4>
                  <p className="text-xs text-slate-500 mt-1">{stage.duration} Weeks</p>
                  <p className="text-[10px] font-medium text-blue-600 mt-2 uppercase tracking-wider">{stage.role}</p>
                  {idx < PIPELINE_STAGES.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                      <ChevronRight size={16} className="text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="glass-card p-8">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                <Calendar className="text-indigo-600" size={20} />
                15-Week Sprint Plan
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="pb-4 font-bold text-slate-900">Sprint</th>
                      <th className="pb-4 font-bold text-slate-900">Weeks</th>
                      <th className="pb-4 font-bold text-slate-900">Goal</th>
                      <th className="pb-4 font-bold text-slate-900">Version</th>
                      <th className="pb-4 font-bold text-slate-900">Utilization</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {SPRINT_PLAN.map((s) => (
                      <tr key={s.sprint} className="group hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 font-medium">Sprint {s.sprint}</td>
                        <td className="py-4 text-slate-500">{s.weeks}</td>
                        <td className="py-4">
                          <p className="font-medium text-slate-900">{s.goal}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{s.activities}</p>
                        </td>
                        <td className="py-4 font-mono text-xs text-blue-600">{s.version}</td>
                        <td className="py-4">
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                            s.utilization === 'High' ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                          )}>
                            {s.utilization}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white p-6 flex flex-col gap-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
            <ClipboardList size={20} />
          </div>
          <h1 className="font-bold text-slate-900 tracking-tight">TaskArchitect</h1>
        </div>

        <nav className="flex-1 space-y-1">
          <SidebarItem 
            icon={Layers} 
            label="Overview" 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
          />
          <SidebarItem 
            icon={Users} 
            label="Resource Pool" 
            active={activeTab === 'team'} 
            onClick={() => setActiveTab('team')} 
          />
          <SidebarItem 
            icon={Workflow} 
            label="Pipeline Stages" 
            active={activeTab === 'pipeline'} 
            onClick={() => setActiveTab('pipeline')} 
          />
        </nav>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
              <User size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-900 truncate">DevOps Architect</p>
              <p className="text-[10px] text-slate-500 truncate">Project Lead</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>DevOps System</span>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-100">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Planning Phase
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

        <footer className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© 2024 DevOps Task Management System. Architectural Blueprint.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Sprint Board</a>
            <a href="#" className="hover:text-slate-600 transition-colors">VCS Repo</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Jenkins CI</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
