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
  Info
} from 'lucide-react';
import { cn } from './lib/utils';
import { 
  ARCHITECTURE_LAYERS, 
  TECH_STACK, 
  DATA_FLOW_STEPS, 
  MLOPS_STAGES 
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
              title="System Architecture Overview" 
              subtitle="High-level blueprint of the AI-powered enterprise platform on Google Cloud."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="glass-card p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Cloud size={120} />
                  </div>
                  <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                    <Layers className="text-blue-600" size={20} />
                    Layered Architecture
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
                    <Zap className="text-amber-500" size={20} />
                    System Goals
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { title: 'Scalability', desc: 'Auto-scaling compute via GKE and Cloud Run.', icon: ArrowRight },
                      { title: 'Intelligence', desc: 'Agentic reasoning with Gemini & Vertex AI.', icon: Bot },
                      { title: 'Automation', desc: 'Full MLOps & DevOps CI/CD pipelines.', icon: Workflow },
                      { title: 'Observability', desc: 'AIOps driven monitoring and healing.', icon: Activity }
                    ].map((goal) => (
                      <li key={goal.title} className="flex gap-3">
                        <div className="mt-1 text-blue-600"><goal.icon size={16} /></div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{goal.title}</p>
                          <p className="text-xs text-slate-500">{goal.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-6 bg-slate-900 text-white border-none">
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-emerald-400" size={20} />
                    Security Posture
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-xs font-mono text-emerald-400 mb-1">IDENTITY & ACCESS</p>
                      <p className="text-sm text-slate-300">IAM-based least privilege access control across all resources.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-xs font-mono text-emerald-400 mb-1">DATA PROTECTION</p>
                      <p className="text-sm text-slate-300">Encryption at rest and in transit with Customer-Managed Encryption Keys (CMEK).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'ai-ml':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <SectionHeader 
              title="AI & Machine Learning Engine" 
              subtitle="Deep dive into the transformer models, agentic AI, and generative capabilities."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <Bot size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Agentic AI Framework</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Our platform utilizes an autonomous agent framework built on Vertex AI. Agents are capable of multi-step reasoning, tool use, and self-correction.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="mt-1 text-purple-500"><CheckCircle2 size={18} /></div>
                    <div>
                      <h4 className="text-sm font-medium">Reasoning Engine</h4>
                      <p className="text-xs text-slate-500 mt-1">Leveraging Gemini Pro for complex chain-of-thought reasoning and planning.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="mt-1 text-purple-500"><CheckCircle2 size={18} /></div>
                    <div>
                      <h4 className="text-sm font-medium">Tool Use (Function Calling)</h4>
                      <p className="text-xs text-slate-500 mt-1">Agents can interact with external APIs, databases, and services via structured function calls.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="mt-1 text-purple-500"><CheckCircle2 size={18} /></div>
                    <div>
                      <h4 className="text-sm font-medium">Memory Management</h4>
                      <p className="text-xs text-slate-500 mt-1">Short-term context window management and long-term retrieval via Vector Search.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Transformer Models</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">NLP & Understanding</h4>
                    <p className="text-sm text-slate-600">State-of-the-art transformer architectures (BERT, T5, Gemini) for semantic search, sentiment analysis, and entity extraction.</p>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Generative Capabilities</h4>
                    <p className="text-sm text-slate-600">Multimodal generation including text, code, and images using Vertex AI Generative AI Studio.</p>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Custom Model Training</h4>
                    <p className="text-sm text-slate-600">Deep learning models built with TensorFlow and PyTorch, trained on Vertex AI Training with GPU/TPU acceleration.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-lg font-medium mb-6">MLOps Lifecycle</h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {MLOPS_STAGES.map((stage, idx) => (
                  <React.Fragment key={stage.name}>
                    <div className="flex flex-col items-center gap-3 group cursor-default">
                      <div className={cn("w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110", stage.color)}>
                        <stage.icon size={24} />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{stage.name}</span>
                    </div>
                    {idx < MLOPS_STAGES.length - 1 && (
                      <div className="hidden md:block flex-1 h-px bg-slate-200 relative">
                        <ArrowRight size={14} className="absolute -top-[7px] left-1/2 -translate-x-1/2 text-slate-300" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 'devops':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <SectionHeader 
              title="DevOps & AIOps" 
              subtitle="Automation, CI/CD, and intelligent system monitoring."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass-card p-8">
                <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                  <GitBranch className="text-indigo-600" size={20} />
                  CI/CD Pipeline
                </h3>
                <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                  {[
                    { title: 'Source Control', desc: 'Git-based workflow with Cloud Source Repositories.', icon: Code2 },
                    { title: 'Build & Test', desc: 'Cloud Build triggers automated unit and integration tests.', icon: Terminal },
                    { title: 'Artifact Management', desc: 'Container images stored in Artifact Registry.', icon: Box },
                    { title: 'Automated Deployment', desc: 'Cloud Deploy orchestrates releases to GKE and Cloud Run.', icon: Cloud }
                  ].map((step) => (
                    <div key={step.title} className="relative">
                      <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 z-10" />
                      <h4 className="text-sm font-semibold text-slate-900">{step.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                  <Activity className="text-emerald-600" size={20} />
                  AIOps & Monitoring
                </h3>
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                    <h4 className="text-sm font-medium text-emerald-900 flex items-center gap-2">
                      <Search size={16} />
                      Anomaly Detection
                    </h4>
                    <p className="text-xs text-emerald-700 mt-1">AI models analyze Cloud Logging and Monitoring data to detect patterns that deviate from normal system behavior.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <h4 className="text-sm font-medium text-blue-900 flex items-center gap-2">
                      <Zap size={16} />
                      Predictive Maintenance
                    </h4>
                    <p className="text-xs text-blue-700 mt-1">Forecasting potential failures in infrastructure components before they impact user experience.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="text-sm font-medium text-slate-900 flex items-center gap-2">
                      <Workflow size={16} />
                      Automated Remediation
                    </h4>
                    <p className="text-xs text-slate-700 mt-1">Triggering Cloud Functions to automatically restart services or scale resources based on AIOps alerts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                <Server className="text-blue-600" size={20} />
                Deployment Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-slate-100 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-2">Blue-Green Deployment</h4>
                  <p className="text-sm text-slate-500">Using Cloud Deploy to manage parallel environments, ensuring zero-downtime releases and instant rollbacks.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-2">Canary Releases</h4>
                  <p className="text-sm text-slate-500">Gradual traffic shifting via GKE Ingress or Cloud Run traffic management to validate new versions with a subset of users.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-2">Infrastructure as Code</h4>
                  <p className="text-sm text-slate-500">All resources (VPCs, GKE clusters, Vertex AI endpoints) are provisioned and managed via Terraform for consistency.</p>
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
              subtitle="Tracing a request from the user interface to the final AI-generated response."
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
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <Cloud size={20} />
          </div>
          <h1 className="font-bold text-slate-900 tracking-tight">CloudArchitect</h1>
        </div>

        <nav className="flex-1 space-y-1">
          <SidebarItem 
            icon={Layers} 
            label="Overview" 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
          />
          <SidebarItem 
            icon={Cpu} 
            label="AI & ML Engine" 
            active={activeTab === 'ai-ml'} 
            onClick={() => setActiveTab('ai-ml')} 
          />
          <SidebarItem 
            icon={Workflow} 
            label="DevOps & AIOps" 
            active={activeTab === 'devops'} 
            onClick={() => setActiveTab('devops')} 
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
              <p className="text-xs font-medium text-slate-900 truncate">Senior Architect</p>
              <p className="text-[10px] text-slate-500 truncate">v1.0.4-stable</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Architecture</span>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Settings size={20} />
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2" />
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-100">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              System Online
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

        <footer className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© 2024 CloudArchitect AI Platform. Built on Google Cloud.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Documentation</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Security Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Support</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
