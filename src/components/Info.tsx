import './Info.css'

function Info1() {
  return (
    <div id="info1">
      <div className="info-icon">ⓘ</div>
      <p>안내 내용을 제공할 때 사용합니다.</p>
    </div>
  )
}

function Info2() {
  return (
    <div id="info2">
      <div className="info-title">
        <div className="info-icon">ⓘ</div>
        <strong>안내</strong>
      </div>
      <p>
        안내 내용을 제공할 때 사용합니다.안내 내용을 제공할 때 사용합니다.
        안내 내용을 제공할 때 사용합니다.안내 내용을 제공할 때 사용합니다.
      </p>
    </div>
  )
}

export { Info1, Info2 }