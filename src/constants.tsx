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
  Bot
} from 'lucide-react';

export const ARCHITECTURE_LAYERS = [
  {
    id: 'ui',
    title: 'User Interface Layer',
    icon: Globe,
    description: 'Entry point for users, providing interactive dashboards and interfaces.',
    tech: ['React', 'Tailwind CSS', 'Cloud CDN'],
    details: 'Responsive web application hosted on Firebase Hosting or Cloud Storage with Cloud CDN for global low-latency delivery.'
  },
  {
    id: 'gateway',
    title: 'API Gateway Layer',
    icon: ShieldCheck,
    description: 'Security, rate limiting, and request routing.',
    tech: ['Apigee', 'Cloud Endpoints', 'Cloud Load Balancing'],
    details: 'Manages API traffic, enforces IAM policies, and routes requests to appropriate backend services.'
  },
  {
    id: 'processing',
    title: 'AI/ML Processing Layer',
    icon: Cpu,
    description: 'Core intelligence and reasoning engine.',
    tech: ['Vertex AI', 'Gemini API', 'Cloud Run'],
    details: 'Handles inference requests, orchestrates agentic workflows, and executes transformer-based reasoning.'
  },
  {
    id: 'data',
    title: 'Data Processing Layer',
    icon: Database,
    description: 'Structured and unstructured data management.',
    tech: ['BigQuery', 'Cloud Storage', 'Cloud SQL', 'Pub/Sub'],
    details: 'Scalable data lake and warehouse for training data, logs, and application state.'
  },
  {
    id: 'mlops',
    title: 'Model Training & MLOps',
    icon: Workflow,
    description: 'ML lifecycle management and automation.',
    tech: ['Vertex AI Pipelines', 'Model Registry', 'Feature Store'],
    details: 'Automated pipelines for data ingestion, preprocessing, training, validation, and deployment.'
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD Layer',
    icon: GitBranch,
    description: 'Infrastructure as Code and automated delivery.',
    tech: ['Cloud Build', 'Cloud Deploy', 'Terraform', 'Artifact Registry'],
    details: 'Automated build and deployment pipelines for microservices and infrastructure.'
  },
  {
    id: 'aiops',
    title: 'Monitoring & AIOps',
    icon: Activity,
    description: 'Intelligent observability and self-healing.',
    tech: ['Cloud Monitoring', 'Cloud Logging', 'Error Reporting'],
    details: 'AI-driven anomaly detection and automated incident response based on system logs and metrics.'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Layer',
    icon: Server,
    description: 'Compute and networking foundation.',
    tech: ['GKE', 'Cloud Run', 'VPC Service Controls'],
    details: 'Container orchestration and serverless execution environments with strict network isolation.'
  }
];

export const TECH_STACK = [
  { category: 'Compute', items: ['Google Kubernetes Engine (GKE)', 'Cloud Run', 'Cloud Functions'] },
  { category: 'AI & ML', items: ['Vertex AI', 'Gemini API', 'TensorFlow', 'PyTorch'] },
  { category: 'Data', items: ['BigQuery', 'Cloud Storage', 'Pub/Sub', 'Cloud Spanner'] },
  { category: 'DevOps', items: ['Cloud Build', 'Cloud Deploy', 'Artifact Registry', 'Terraform'] },
  { category: 'Operations', items: ['Cloud Monitoring', 'Cloud Logging', 'Trace', 'Profiler'] },
  { category: 'Security', items: ['Cloud IAM', 'Secret Manager', 'Cloud Armor', 'Identity-Aware Proxy'] }
];

export const DATA_FLOW_STEPS = [
  { step: 1, action: 'User Request', detail: 'User submits a natural language query via the UI.' },
  { step: 2, action: 'API Gateway', detail: 'Request is authenticated and routed via Cloud Load Balancing.' },
  { step: 3, action: 'Agent Orchestrator', detail: 'An AI Agent (Gemini) analyzes the intent and plans tasks.' },
  { step: 4, action: 'Data Retrieval', detail: 'Agent fetches relevant context from BigQuery or Vector Search.' },
  { step: 5, action: 'Model Inference', detail: 'Transformer models process the query with the retrieved context.' },
  { step: 6, action: 'Task Execution', detail: 'Agent executes necessary actions (e.g., API calls, data updates).' },
  { step: 7, action: 'Response Generation', detail: 'Final response is synthesized and sent back to the user.' }
];

export const MLOPS_STAGES = [
  { name: 'Ingestion', icon: Database, color: 'bg-blue-500' },
  { name: 'Preprocessing', icon: Settings, color: 'bg-indigo-500' },
  { name: 'Training', icon: Cpu, color: 'bg-purple-500' },
  { name: 'Validation', icon: ShieldCheck, color: 'bg-pink-500' },
  { name: 'Deployment', icon: Box, color: 'bg-orange-500' },
  { name: 'Monitoring', icon: Activity, color: 'bg-emerald-500' }
];
