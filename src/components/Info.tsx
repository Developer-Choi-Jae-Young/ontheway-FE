import './Info.css'

type InfoProps = { content: React.ReactNode }

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M9.99984 13.3332V9.99984M9.99984 6.6665H10.0082M18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984Z" stroke="#4B5663" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Info1({ content }: InfoProps) {
  return (
    <div id="info1">
      <InfoIcon/>
      <p>{content}</p>
    </div>
  )
}

function Info2({ content }: InfoProps) {
  return (
    <div id="info2">
      <div className="info-title"><InfoIcon/><strong>안내</strong></div>
      <div className="info-content">{content}</div>
    </div>
  )
}

export { Info1, Info2 }