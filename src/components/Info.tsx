import './Info.css'

type InfoProps = {
  content: React.ReactNode
}

function Info1({ content }: InfoProps) {
  return (
    <div id="info1">
      <div className="info-icon">ⓘ</div>
      <p>{content}</p>
    </div>
  )
}

function Info2({ content }: InfoProps) {
  return (
    <div id="info2">
      <div className="info-title">
        <div className="info-icon">ⓘ</div>
        <strong>안내</strong>
      </div>
      <p>{content}</p>
    </div>
  )
}

export { Info1, Info2 }