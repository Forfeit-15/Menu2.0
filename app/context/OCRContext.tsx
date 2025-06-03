import React, { createContext, useState, useContext, ReactNode } from 'react';

type OCRContextType = {
  logs: string[];
  addLog: (text: string) => void;
};

const OCRContext = createContext<OCRContextType | undefined>(undefined);

export const OCRProvider = ({ children }: { children: ReactNode }) => {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (text: string) => {
    setLogs(prev => [text, ...prev]);
  };

  return (
    <OCRContext.Provider value={{ logs, addLog }}>
      {children}
    </OCRContext.Provider>
  );
};

export const useOCR = () => {
  const context = useContext(OCRContext);
  if (!context) throw new Error('useOCR must be used within OCRProvider');
  return context;
};
