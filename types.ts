export interface Concept {
  term: string;
  definition: string;
  example: string;
}

export interface LessonFlowItem {
  time: string;
  phase: string;
  activity: string;
}

export interface Tool {
  name: string;
  usage: string;
}

export interface MnemonicItem {
  letter: string;
  meaning: string;
  didacticLink: string;
  explanation: string;
}

export interface Source {
  title: string;
  url: string;
}

export interface Workshop {
  id: number;
  title:string;
  summary: string;
  didacticTips: string[];
  formsAndAttachments: string[];
  oopNote: string;
  metadata: {
    duration: string;
    level: string;
    targetAudience: string;
  };
  learningGoals: string[];
  lessonFlow: LessonFlowItem[];
  tools: Tool[];
  practicalInfo: string;
  sources: Source[];
  coreConcepts?: Concept[];
  safetyAndResponsibility?: {
    legislation?: string;
    avg?: string;
    officer?: string;
    rules?: string;
    labels?: string;
    ethicalPoints?: string[];
  };
  mnemonic?: {
    title: string;
    items: MnemonicItem[];
  };
}

export type View =
  | { type: 'homepage' }
  | { type: 'workshop'; id: number }
  | { type: 'handbook' }
  | { type: 'history' }
  | { type: 'downloads' }
  | { type: 'employees' }
  | { type: 'online-course' };

export interface DownloadableFile {
  id: string;
  title: string;
  description: string;
  filename: string;
  content: string;
}

export interface EmployeeHubProps {
  onSelectView: (view: View) => void;
}
