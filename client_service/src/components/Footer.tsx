'use server'

import { getConfigByKey } from '@/action/config.action'
import { getPageById } from '@/action/page.action'
import BTT from '@/components/BTT'
import exportToHtml from '@/components/editor/exportToHtml'
import FooterContent from '@/components/FooterContent'
import { FooterType } from '@/lib/type'
import React, { CSSProperties } from 'react'

const Footer = async () => {
  const footerConfig = await getConfigByKey('footer')
  const footer = JSON.parse(footerConfig?.config_value || '') as FooterType
  const styleAbsolute: CSSProperties = {
    backgroundColor: footer.footerAbsoluteBackgroundColor,
    color: footer.footerAbsoluteTextColor === 1 ? '#f3f4f6' : '',
    justifyContent: footer.footerAbsoluteAlign === 1 ? 'space-between' : 'center',
    flexDirection: footer.footerAbsoluteAlign === 1 ? 'row' : 'column',
  }

  if (footer.footerBlock !== 0) {
    const footerPage = await getPageById(footer.footerBlock)
    const footerContent = await exportToHtml(footerPage?.page_content || '')
    return (
      <footer>
        <div dangerouslySetInnerHTML={{ __html: footerContent }} />
        <div className={`p-2 bg-gray-600 flex items-center`}
          style={styleAbsolute}
        >
          <div>{footer.footerAbsoluteBottomTextPrimary}</div>
          <div>{footer.footerAbsoluteBottomTextSecondary}</div>
        </div>
        {
          footer.footerBTTEnable && <BTT buttonShape={footer.footerBTTShape} position={footer.footerBTTPosition} showMobile={footer.footerBTTShowMobile} />
        }
      </footer>
    )
  } else {
    return (
      <footer>
        {
          footer.footer1Checked && <FooterContent />
        }
        {
          footer.footer2Checked && <FooterContent />
        }
        <div className={`p-2 bg-gray-600 flex items-center`}
          style={styleAbsolute}
        >
          <div>{footer.footerAbsoluteBottomTextPrimary}</div>
          <div>{footer.footerAbsoluteBottomTextSecondary}</div>
        </div>
        {
          footer.footerBTTEnable && <BTT buttonShape={footer.footerBTTShape} position={footer.footerBTTPosition} showMobile={footer.footerBTTShowMobile} />
        }
      </footer>
    )
  }
}

export default Footer