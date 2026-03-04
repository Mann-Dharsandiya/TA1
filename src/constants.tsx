import React from 'react';
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
  Users,
  FileSpreadsheet,
  BrainCircuit,
  Network,
  ClipboardList,
  Clock,
  CheckCircle2,
  Flag
} from 'lucide-react';

export const PROJECT_OVERVIEW = {
  title: "DevOps-Based Task Management System",
  stack: ["React.js", "Node.js", "SQL"],
  duration: "15 Weeks",
  teamSize: "4 FTE",
  loadFactor: "0.8"
};

export const TEAM_ROLES = [
  { id: 'arch', role: 'Architect', name: 'Anurag', fte: 1, icon: Server },
  { id: 'des', role: 'Designer', name: 'Anurag', fte: 1, icon: Globe },
  { id: 'dev', role: 'Developer', name: 'Mann, Omkar', fte: 2, icon: Code2 },
  { id: 'test', role: 'Integration Tester', name: 'Amit', fte: 1, icon: ShieldCheck },
  { id: 'pm', role: 'Product Manager', name: 'Mann', fte: 1, icon: User },
  { id: 'rel', role: 'Release Engineer', name: 'Anurag, Omkar', fte: 2, icon: GitBranch },
  { id: 'scrum', role: 'Scrum Master', name: 'Omkar', fte: 1, icon: Users }
];

export const PIPELINE_STAGES = [
  { stage: 'Discovery', duration: 2, role: 'Architect / PM', icon: Search },
  { stage: 'Build', duration: 3, role: 'Developers', icon: Code2 },
  { stage: 'Integration', duration: 4, role: 'Testers', icon: ShieldCheck },
  { stage: 'Deployment', duration: 3, role: 'Release Engineers', icon: Cloud },
  { stage: 'Monitoring', duration: 2, role: 'Release Engineers', icon: Activity }
];

export const SPRINT_PLAN = [
  {
    sprint: 1,
    weeks: "1-2",
    goal: "Git & GitHub (VCS Foundation)",
    activities: "Repository cleanup, branching strategy, commit conventions, GitHub issues, release tagging",
    version: "v1.0.1",
    remarks: "Version control stabilized",
    utilization: "Medium"
  },
  {
    sprint: 2,
    weeks: "3-4",
    goal: "Jenkins Installation & Git Integration",
    activities: "Jenkins install & config, GitHub webhook, CI job setup, build trigger on commit",
    version: "v1.1.0",
    remarks: "CI enabled",
    utilization: "Medium"
  },
  {
    sprint: 3,
    weeks: "5-6",
    goal: "Jenkins Build & Test Automation",
    activities: "Jenkinsfile creation, automated build, unit tests, artifact archiving",
    version: "v1.2.0",
    remarks: "Stable CI pipeline",
    utilization: "High"
  },
  {
    sprint: 4,
    weeks: "7-8",
    goal: "Docker Fundamentals",
    activities: "Docker installation, Dockerfile creation, image build & run, container testing",
    version: "v1.3.0",
    remarks: "Backend containerized",
    utilization: "High"
  },
  {
    sprint: 5,
    weeks: "9-10",
    goal: "Multi-Container Setup",
    activities: "Frontend & backend containerization, env variables, networking, port exposure",
    version: "v1.4.0",
    remarks: "Multi-container system",
    utilization: "High"
  },
  {
    sprint: 6,
    weeks: "11-12",
    goal: "Jenkins + Docker Integration",
    activities: "Jenkins Docker plugin, image build in pipeline, tagging, auto container restart",
    version: "v1.5.0",
    remarks: "CI -> Docker automation",
    utilization: "High"
  },
  {
    sprint: 7,
    weeks: "13-15",
    goal: "Container Stability & Release",
    activities: "Health checks, logging, restart policies, rollback, LTS release completed",
    version: "v1.6.0",
    remarks: "LTS release completed",
    utilization: "Medium"
  }
];

export const ARCHITECTURE_LAYERS = [
  {
    id: 'ui',
    title: 'Frontend Layer',
    icon: Globe,
    description: 'Task Dashboard & Management UI.',
    tech: ['React.js', 'Tailwind CSS'],
    details: 'User interface for creating, tracking, and managing tasks.'
  },
  {
    id: 'api',
    title: 'API Layer',
    icon: ShieldCheck,
    description: 'Business logic and task orchestration.',
    tech: ['Node.js', 'Express'],
    details: 'RESTful API handling task CRUD operations and user authentication.'
  },
  {
    id: 'data',
    title: 'Database Layer',
    icon: Database,
    description: 'Persistent storage for tasks and users.',
    tech: ['SQL', 'PostgreSQL/MySQL'],
    details: 'Relational database for structured task data storage.'
  },
  {
    id: 'devops',
    title: 'DevOps Layer',
    icon: GitBranch,
    description: 'CI/CD and Containerization.',
    tech: ['Jenkins', 'Docker', 'GitHub'],
    details: 'Automated build, test, and deployment pipelines.'
  }
];
