import './EmptyState.css'
import { Box, Camera } from './CustomIcon'
 
type EmptyStateProps = {
  type: 'route' | 'photo'
  description?: string   // 아래 안내 문구를 바꿔야 할 때 (예: 피게시자 화면)
}
 
function EmptyState(props: EmptyStateProps) {
  const defaultDescription = props.type === 'route'
    ? '지금, 새로운 이동 경로를 등록해보세요.'
    : '지금, 새로운 사진을 등록해보세요.'
 
  return (
    <div className="empty-state">
 
      <div className="empty-icon">
        {props.type === 'route' ? <Box width={48} height={48} strokeWidth={2} /> : <Camera width={48} height={48} strokeWidth={4} />}
      </div>
 
      <strong>
        {props.type === 'route'
          ? '등록된 경로가 없어요'
          : '등록된 사진이 없어요'}
      </strong>
 
      <p>{props.description ?? defaultDescription}</p>
 
    </div>
  )
}
 
export default EmptyState