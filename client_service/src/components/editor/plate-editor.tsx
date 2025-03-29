'use client';

import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Plate } from '@udecode/plate/react';

import { useCreateEditor } from '@/components/editor/use-create-editor';
import { Editor, EditorContainer } from '@/components/plate-ui/editor';

type Props = {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export function PlateEditor({ value, setValue }: Props) {
  const editor = useCreateEditor({
    value: JSON.parse(value),
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor} onChange={({ value }) => { setValue(JSON.stringify(value)) }} >
        <EditorContainer>
          <Editor variant="default" />
        </EditorContainer>

      </Plate>
    </DndProvider>
  );
}
