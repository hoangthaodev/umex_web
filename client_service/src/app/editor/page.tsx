'use client'

import { BsTwitterX } from 'react-icons/bs'
import RTEditor from '@/components/editor/RTEditor';
import React, { useEffect, useRef } from 'react';
import exportToHtml from '@/components/editor/exportToHtml';

export default function Page() {
  const [value, setValue] = React.useState('[{"children":[{"text":"da co gi dau ma phai so"}],"type":"p","id":"FZTBp7Yff2"}]');
  const showValue = useRef('')
  useEffect(() => {
    exportToHtml(value).then((html) => {
      showValue.current = html;
    })
  }, [value])

  return (
    <>
      <BsTwitterX />
      <div dangerouslySetInnerHTML={{ __html: showValue.current }} />
      <RTEditor value={value} setValue={setValue} />
    </>
  );
}
