import React from 'react';
import {
  Code,
  Palette,
  Atom,
  GitBranch,
  FileSpreadsheet,
  Database,
  Layout,
  Image as ImageIcon,
  GraduationCap,
  Presentation,
  Lightbulb,
  MessageSquare,
  Sparkles,
  Users,
  ShieldCheck,
  Clock,
  Globe,
  BookOpen,
  Cpu,
  PenTool,
  FileCode,
  CheckCircle2,
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  LucideProps
} from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'FileCode':
      return <FileCode {...props} />;
    case 'Palette':
      return <Palette {...props} />;
    case 'Code':
      return <Code {...props} />;
    case 'Atom':
      return <Atom {...props} />;
    case 'GitBranch':
      return <GitBranch {...props} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet {...props} />;
    case 'Database':
      return <Database {...props} />;
    case 'Layout':
      return <Layout {...props} />;
    case 'Image':
      return <ImageIcon {...props} />;
    case 'GraduationCap':
      return <GraduationCap {...props} />;
    case 'Presentation':
      return <Presentation {...props} />;
    case 'Lightbulb':
      return <Lightbulb {...props} />;
    case 'MessageSquare':
      return <MessageSquare {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'Users':
      return <Users {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'Clock':
      return <Clock {...props} />;
    case 'Globe':
      return <Globe {...props} />;
    case 'BookOpen':
      return <BookOpen {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'PenTool':
      return <PenTool {...props} />;
    case 'Briefcase':
      return <Briefcase {...props} />;
    case 'Calendar':
      return <Calendar {...props} />;
    case 'MapPin':
      return <MapPin {...props} />;
    case 'Phone':
      return <Phone {...props} />;
    case 'Mail':
      return <Mail {...props} />;
    case 'Download':
      return <Download {...props} />;
    case 'ExternalLink':
      return <ExternalLink {...props} />;
    default:
      return <CheckCircle2 {...props} />;
  }
};
