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
  Network
} from 'lucide-react';
import { cn } from './lib/utils';
import { 
  ARCHITECTURE_LAYERS, 
  TECH_STACK, 
  DATA_FLOW_STEPS, 
  TEAM_ROLES 
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
              title="System Architecture Blueprint" 
              subtitle="A collaborative AI platform architecture designed for a 4-developer team."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="glass-card p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <BrainCircuit size={120} />
                  </div>
                  <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                    <Layers className="text-blue-600" size={20} />
                    Architecture Layers
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
                    <Users className="text-blue-600" size={20} />
                    Team Composition
                  </h3>
                  <div className="space-y-3">
                    {TEAM_ROLES.map((role) => (
                      <div key={role.id} className={cn("p-3 rounded-lg border-l-4 bg-slate-50", role.color)}>
                        <p className="text-xs font-bold uppercase tracking-wider">{role.role.split(' – ')[1]}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Assigned to {role.role.split(' – ')[0]}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 bg-slate-900 text-white border-none">
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Zap className="text-amber-400" size={20} />
                    Project Goals
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Process structured CSV datasets',
                      'Train LSTM & Transformer models',
                      'Expose results via Backend APIs',
                      'Automated CI/CD with Docker'
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
              title="Developer Responsibilities" 
              subtitle="Clear division of tasks for a high-performance 4-developer team."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TEAM_ROLES.map((role) => (
                <div key={role.id} className="glass-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={cn("p-2 rounded-lg bg-slate-100", role.color.split(' ')[1])}>
                      <role.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{role.role}</h3>
                  </div>
                  <ul className="space-y-3">
                    {role.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="mt-1 text-slate-400"><ArrowRight size={14} /></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'pipelines':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <SectionHeader 
              title="Model & Data Pipelines" 
              subtitle="How LSTM and Transformer models are trained, validated, and deployed."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass-card p-8">
                <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                  <Network className="text-purple-600" size={20} />
                  LSTM Pipeline (Deep Learning)
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                    <h4 className="text-sm font-medium text-purple-900">Sequential Processing</h4>
                    <p className="text-xs text-purple-700 mt-1">Designed for time-series or sequential data extracted from CSVs. Developer 3 manages the LSTM architecture.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="text-sm font-medium text-slate-900">Optimization</h4>
                    <p className="text-xs text-slate-700 mt-1">Hyperparameter tuning using Keras Tuner or Optuna to find the best hidden layer sizes and learning rates.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                  <BrainCircuit className="text-amber-600" size={20} />
                  Transformer Pipeline (AI Engine)
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                    <h4 className="text-sm font-medium text-amber-900">Attention Mechanisms</h4>
                    <p className="text-xs text-amber-700 mt-1">Implementing self-attention for complex sequence processing. Developer 4 leads the Transformer implementation.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="text-sm font-medium text-slate-900">Evaluation</h4>
                    <p className="text-xs text-slate-700 mt-1">Comparing Transformer performance against LSTM benchmarks to ensure superior reasoning capabilities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                <GitBranch className="text-indigo-600" size={20} />
                DevOps & CI/CD Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-slate-100 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-2">GitHub Workflow</h4>
                  <p className="text-sm text-slate-500">Pull request based development with automated linting and testing on every commit.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-2">Dockerization</h4>
                  <p className="text-sm text-slate-500">Backend and ML models are containerized for environment parity across dev, test, and prod.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-2">Kubernetes Orchestration</h4>
                  <p className="text-sm text-slate-500">GKE manages the scaling of prediction APIs to handle varying traffic loads.</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'data-flow':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <SectionHeader 
              title="End-to-End Data Flow" 
              subtitle="Tracing the journey from raw CSV data to intelligent API predictions."
            />

            <div className="glass-card p-8">
              <div className="max-w-4xl mx-auto">
                {DATA_FLOW_STEPS.map((step, idx) => (
                  <div key={step.step} className="flex gap-6 mb-8 last:mb-0 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm z-10 group-hover:bg-blue-600 transition-colors">
                        {step.step}
                      </div>
                      {idx < DATA_FLOW_STEPS.length - 1 && (
                        <div className="w-0.5 flex-1 bg-slate-100 my-2" />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="text-lg font-semibold text-slate-900">{step.action}</h4>
                      <p className="text-slate-500 mt-1">{step.detail}</p>
                    </div>
                  </div>
                ))}
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
            <BrainCircuit size={20} />
          </div>
          <h1 className="font-bold text-slate-900 tracking-tight">AI Team Architect</h1>
        </div>

        <nav className="flex-1 space-y-1">
          <SidebarItem 
            icon={Layers} 
            label="Architecture" 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
          />
          <SidebarItem 
            icon={Users} 
            label="Team Roles" 
            active={activeTab === 'team'} 
            onClick={() => setActiveTab('team')} 
          />
          <SidebarItem 
            icon={Workflow} 
            label="Pipelines" 
            active={activeTab === 'pipelines'} 
            onClick={() => setActiveTab('pipelines')} 
          />
          <SidebarItem 
            icon={Zap} 
            label="Data Flow" 
            active={activeTab === 'data-flow'} 
            onClick={() => setActiveTab('data-flow')} 
          />
        </nav>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
              <User size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-900 truncate">System Architect</p>
              <p className="text-[10px] text-slate-500 truncate">Team Edition</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Project</span>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-100">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Design Phase
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

        <footer className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© 2024 AI Team Architect Pro. Collaborative AI System Design.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">GitHub Repo</a>
            <a href="#" className="hover:text-slate-600 transition-colors">API Docs</a>
            <a href="#" className="hover:text-slate-600 transition-colors">MLOps Guide</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
