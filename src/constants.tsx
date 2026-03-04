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
  Network
} from 'lucide-react';

export const ARCHITECTURE_LAYERS = [
  {
    id: 'ui',
    title: 'User Interface Layer',
    icon: Globe,
    description: 'Web dashboard for data upload, monitoring, and prediction visualization.',
    tech: ['React', 'Tailwind CSS'],
    details: 'Provides a portal for users to upload CSV datasets and view model performance metrics.'
  },
  {
    id: 'api',
    title: 'Backend API Layer',
    icon: ShieldCheck,
    description: 'RESTful endpoints for data management and model inference.',
    tech: ['FastAPI', 'Python', 'Google APIs'],
    details: 'Handles authentication, data routing, and serves as the bridge between the UI and ML models.'
  },
  {
    id: 'processing',
    title: 'Data Processing Layer',
    icon: Database,
    description: 'CSV cleaning, feature engineering, and pipeline management.',
    tech: ['Pandas', 'NumPy', 'Scikit-learn'],
    details: 'Automated pipelines for cleaning raw CSV data and preparing it for model consumption.'
  },
  {
    id: 'training',
    title: 'Model Training Layer',
    icon: BrainCircuit,
    description: 'LSTM and Transformer model training environment.',
    tech: ['TensorFlow', 'PyTorch', 'Vertex AI'],
    details: 'Compute-intensive layer for training sequential and attention-based models.'
  },
  {
    id: 'testing',
    title: 'Model Testing Layer',
    icon: LineChart,
    description: 'Evaluation, validation, and performance comparison.',
    tech: ['MLflow', 'TensorBoard'],
    details: 'Rigorous testing against hold-out sets to ensure accuracy and robustness.'
  },
  {
    id: 'deployment',
    title: 'Deployment Layer',
    icon: Server,
    description: 'Containerized production environment.',
    tech: ['Docker', 'Kubernetes', 'GitHub Actions'],
    details: 'Scalable infrastructure for serving models in a high-availability production setting.'
  }
];

export const TEAM_ROLES = [
  {
    id: 'dev1',
    role: 'Developer 1 – Backend Developer',
    icon: Code2,
    responsibilities: [
      'Building backend APIs (FastAPI/Flask)',
      'Handling data upload and retrieval',
      'Connecting frontend with ML models',
      'Managing CSV dataset storage',
      'Integrating Google Cloud services'
    ],
    color: 'border-blue-500 text-blue-600'
  },
  {
    id: 'dev2',
    role: 'Developer 2 – Data Engineer',
    icon: FileSpreadsheet,
    responsibilities: [
      'Preparing and cleaning CSV datasets',
      'Feature engineering and selection',
      'Splitting data into train/test sets',
      'Creating automated data pipelines',
      'Ensuring data quality and integrity'
    ],
    color: 'border-emerald-500 text-emerald-600'
  },
  {
    id: 'dev3',
    role: 'Developer 3 – Deep Learning Engineer',
    icon: Network,
    responsibilities: [
      'Implementing LSTM networks',
      'Handling time-series/sequential data',
      'Model optimization & hyperparameter tuning',
      'Deep learning model training',
      'Implementing sequence-to-sequence logic'
    ],
    color: 'border-purple-500 text-purple-600'
  },
  {
    id: 'dev4',
    role: 'Developer 4 – Transformer / AI Engineer',
    icon: BrainCircuit,
    responsibilities: [
      'Implementing Transformer-based models',
      'NLP and sequence processing',
      'Model evaluation & comparison',
      'Integrating Transformers with APIs',
      'Fine-tuning attention mechanisms'
    ],
    color: 'border-amber-500 text-amber-600'
  }
];

export const DATA_FLOW_STEPS = [
  { step: 1, action: 'CSV Ingestion', detail: 'Raw CSV files are uploaded via the UI to Cloud Storage.' },
  { step: 2, action: 'Preprocessing', detail: 'Data Engineer cleans data and performs feature engineering.' },
  { step: 3, action: 'Data Splitting', detail: 'Dataset is divided into Training, Validation, and Testing sets.' },
  { step: 4, action: 'Parallel Training', detail: 'LSTM and Transformer models are trained simultaneously.' },
  { step: 5, action: 'Model Validation', detail: 'Performance is tested and compared using standardized metrics.' },
  { step: 6, action: 'API Deployment', detail: 'Best models are containerized and exposed via FastAPI.' },
  { step: 7, action: 'Inference Request', detail: 'Backend receives prediction requests and returns AI results.' }
];

export const TECH_STACK = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'SQL'] },
  { category: 'Frameworks', items: ['FastAPI', 'TensorFlow', 'PyTorch'] },
  { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Google Cloud'] },
  { category: 'DevOps', items: ['GitHub Actions', 'Artifact Registry', 'Cloud Build'] }
];
