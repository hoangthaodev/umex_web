'use server'

import pageContentToHtml from '@/lib/pageContentToHtml'
import { ArrowDown } from 'lucide-react'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const value = [{ "type": "h2", "align": "start", "children": [{ "text": "Equation" }], "id": "PxjwH4gqMV" }, { "type": "p", "indent": 1, "listStyleType": "decimal", "align": "start", "children": [{ "text": "Equations allow you to express complex mathematical concepts in both inline and block formats." }], "id": "2K_OoTKgxb" }, { "type": "p", "indent": 1, "listStart": 2, "listStyleType": "decimal", "align": "start", "children": [{ "text": "Key features:" }], "id": "NZXOk5aPSH" }, { "type": "p", "indent": 2, "listStyleType": "disc", "align": "start", "children": [{ "text": "LaTeX syntax support" }], "id": "bXsUxRblKk" }, { "type": "p", "indent": 2, "listStyleType": "disc", "align": "start", "children": [{ "text": "Inline and block equation formats" }], "id": "n5OqWWJM6c", "listStart": 2 }, { "type": "p", "indent": 1, "listStart": 3, "listStyleType": "decimal", "align": "start", "children": [{ "text": "Inline equation example: " }, { "type": "inline_equation", "texExpression": "E=mc^2", "children": [{ "text": "" }], "id": "FI2bawdvgX" }, { "text": " (Einstein's famous equation)" }], "id": "ZSTWsRWoGP" }, { "type": "p", "indent": 1, "listStart": 4, "listStyleType": "decimal", "align": "start", "children": [{ "text": "Block equation examples: " }], "id": "z6m5IoB1dQ" }, { "type": "equation", "texExpression": "\\frac{ -b \\pm \\sqrt{ b ^ 2 - 4ac } } { 2a } ", "children": [{ "text": "" }], "id": "MSQ2IrYIX - " }, { "type": "p", "align": "start", "children": [{ "text": "The quadratic formula for solving " }, { "type": "inline_equation", "texExpression": "ax ^ 2 + bx + c = 0", "children": [{ "text": "" }], "id": "siewYo6cgZ" }, { "text": "." }], "id": "LqtDmCIi3w" }, { "type": "equation", "texExpression": "\\int_{ a }^ { b } f(x) \\, dx = F(b) - F(a)", "children": [{ "text": "" }], "id": "M17OA2eTO4" }, { "type": "p", "align": "start", "children": [{ "text": "The fundamental theorem of calculus." }], "id": "pQB9FTQ5gJ" }]
  const html = await pageContentToHtml(JSON.stringify(value))
  return (
    <div>
      <br />
      <ArrowDown />
      <br />
      {/* <PlateStatic editor={editor} components={components} /> */}
      <br />
      <ArrowDown />
      <br />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <br />
    </div>
  )
}

export default page