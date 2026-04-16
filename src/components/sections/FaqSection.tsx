import { useRef, useState } from 'react'

import type { FaqItem } from '../../data/siteContent'

type FaqSectionProps = {
  faq: FaqItem[]
}

export function FaqSection({ faq }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const answerRefs = useRef<Array<HTMLDivElement | null>>([])

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="section-kicker">Dúvidas comuns</p>
          <h2 id="faq-title">Perguntas frequentes</h2>
          <p className="faq-subtitle">
            Respostas diretas para você entender cenário, risco e próximos passos antes de tomar qualquer decisão.
          </p>
        </div>
        <div className="faq-panel">
          {faq.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                >
                  {item.question}
                </button>

                <div
                  className="faq-answer-wrap"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{ maxHeight: isOpen ? `${answerRefs.current[index]?.scrollHeight ?? 0}px` : '0px' }}
                >
                  <div
                    className="faq-answer"
                    ref={(element) => {
                      answerRefs.current[index] = element
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
