'use client';

import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Plate } from '@udecode/plate/react';

import { useCreateEditor } from '@/components/editor/use-create-editor';
import { SettingsDialog, SettingsProvider } from '@/components/editor/settings';
import { Editor, EditorContainer } from '@/components/plate-ui/editor';
import { Toaster } from 'sonner';
import DivNgang from '@/components/DivNgang';

type Props = {
  className?: string,
  label?: string
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>
}

export function PlateEditor({ className, label, content, setContent }: Props) {

  const editor = useCreateEditor({
    value: JSON.parse(content)
  });

  return (
    <div className={`${className} border border-gray-400 rounded-sm`} data-registry="plate">
      <h3 className='px-2 bg-gray-300'>{label}</h3>
      <DivNgang />
      <SettingsProvider>
        <DndProvider backend={HTML5Backend}>
          <Plate editor={editor}
            onChange={({ value }) => { setContent(JSON.stringify(value)) }}
          >
            <EditorContainer>
              <Editor />
            </EditorContainer>

            <SettingsDialog />
          </Plate>

        </DndProvider>
      </SettingsProvider>

      <Toaster />
    </div>
  );
}
