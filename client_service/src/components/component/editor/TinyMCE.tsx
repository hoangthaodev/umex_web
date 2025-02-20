'use client'
import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import DivNgang from '@/components/DivNgang';

type props = {
  label?: string
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>
}

export default function TinyMCE({ label, content, setContent }: props) {
  const [isLoadding, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [])

  const handleEditerChange = (newContent: string) => {
    setContent(newContent)
  }

  if (isLoadding) {
    return <div>Loading...</div>  // show loading screen while TinyMCE is loading
  }

  return (
    <div className='border border-gray-400 rounded-sm'>
      <h3 className='px-2'>{label}</h3>
      <DivNgang />
      <Editor
        onEditorChange={handleEditerChange}
        apiKey='xrmkzvcfl84woxsj27znnf2jv7jr3fdkxag82vgjxq56le41'
        init={{
          branding: false,
          plugins: [
            // Core editing features
            'autolink', 'charmap', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            // Your account includes a free trial of TinyMCE premium features
            // Try the most popular premium features until Feb 28, 2025:
            'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'mentions', 'autocorrect', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
          ],
          toolbar: 'undo redo | bold italic underline strikethrough | link image media table | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | blocks fontfamily fontsize',
          placeholder: 'Nhập nội dung của bạn ở đây...', // Thêm placeholder
        }}
        value={content}
      />
    </div>
  );
}